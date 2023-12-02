import {GetRecoilValue, RecoilState, selector, selectorFamily} from 'recoil';
import {
  DefaultMessageTtl,
  HierarchyLanguage,
  LanguagesHierarchyState,
  Language,
  languagesHierarchyState,
  LanguagesState,
  languagesState,
  Message,
  MessagesState,
  messagesState,
} from './state';
import {id} from './utils/id';

// Function to add a message with TTL
function addMessageWithTTL(
  set: (recoilVal: RecoilState<MessagesState>, newVal: (prevVal: MessagesState) => MessagesState) => void,
  message: Omit<Message, 'id' | 'ttl'> & {ttl?: number; id?: string},
) {
  // ensure ttl
  message = {
    id: id(),
    ttl: DefaultMessageTtl,
    ...message,
  };
  // add message
  set(messagesState, (prev) => ({
    ...prev,
    messages: [...prev.messages, message as Message],
  }));
  // remove message after TTL
  setTimeout(() => {
    set(messagesState, (prev: MessagesState) => ({
      ...prev,
      messages: prev.messages.filter((m: Message) => m.id !== message.id),
    }));
  }, message.ttl);
}

export const loadLanguageHierarchy = selector<LanguagesHierarchyState>({
  key: 'loadLanguageHierarchy',
  get: async ({get, set}: any) => {
    console.log('Loading language hierarchy');
    try {
      const response = await fetch('/generated/hierarchy.json');
      if (!response.ok) {
        throw new Error('Failed to load language hierarchy.');
      }

      const list = (await response.json()) as HierarchyLanguage[];
      return {
        ready: true,
        list,
      };
    } catch (error) {
      console.error('Error fetching language hierarchy:', error);
      console.log(set);
      // addMessageWithTTL(set, {
      //   message: error instanceof Error ? error.message : 'Could not load language hierarchy data',
      //   type: 'error',
      // });

      return {
        ...get(languagesHierarchyState),
        ready: false,
      };
    }
  },
});

// type LanguageSelectorGetSet = {
//   get: GetRecoilValue;
//   set: (
//     recoilVal: RecoilState<LanguagesState>,
//     newVal: LanguagesState | ((prevVal: LanguagesState) => LanguagesState),
//   ) => void;
// };

export const loadLanguage = selectorFamily<LanguagesState, string>({
  key: 'loadLanguage',
  get:
    (code) =>
    async ({get, set}: any) => {
      try {
        const currentLanguagesState = get(languagesState);
        // Set specific language's readiness to false
        set(languagesState, {
          ...currentLanguagesState,
          languages: {
            ...currentLanguagesState.languages,
            [code]: {...currentLanguagesState.languages[code], ready: false},
          },
        });

        const response = await fetch(`/generated/${code}.json`);
        if (!response.ok) {
          throw new Error('Failed to load language details.');
        }

        const language = (await response.json()) as Language;

        // Update specific language's data and readiness
        set(languagesState, (prev: LanguagesState) => ({
          ...prev,
          languages: {
            ...(prev.languages ?? {}),
            [code]: {language, ready: true},
          },
        }));

        return get(languagesState).languages[code];
      } catch (error) {
        console.error('Error fetching language:', error);
        addMessageWithTTL(set, {
          message: error instanceof Error ? error.message : 'Could not load language details',
          type: 'error',
        });

        // Update specific language's readiness to false in case of error
        set(languagesState, (prev: LanguagesState) => ({
          ...prev,
          languages: {
            ...prev.languages,
            [code]: {...prev.languages[code], ready: false},
          },
        }));

        return get(languagesState);
      }
    },
});

// selector for adding messages
export const addMessageSelector = selector<MessagesState>({
  key: 'addMessageSelector',
  get: ({get}: any) => get(messagesState),
  set: ({set}: any, message: Message) => {
    addMessageWithTTL(set, message);
  },
} as any);
