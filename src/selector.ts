// selectors.js
import {selector, selectorFamily} from 'recoil';
import {LanguageHierarchy, LanguageHierarchyObject, LanguageMarkdownObject, MarkdownRootNode} from './state';

export const loadLanguageHierarchy = selector<LanguageHierarchyObject>({
  key: 'loadLanguageHierarchy',
  get: async () => {
    const response = await fetch('/generated/languages.json');
    const data = (await response.json()) as LanguageHierarchy;

    return {
      ready: true,
      rootLanguages: Object.keys(data),
      languages: Object.keys(data)
        .map((l) => data[l])
        .reduce((acc, cur) => [...acc, ...cur], []),
      languageMap: data,
      languageLink: Object.keys(data)
        .map((l) => data[l].map((ll) => ({[ll]: `${l}-${ll}`})).reduce((acc, cur) => ({...acc, ...cur}), {}))
        .reduce((acc, cur) => ({...acc, ...cur}), {}),
    } as unknown as LanguageHierarchyObject;
  },
});

// This is a selector family, which means it can take a parameter (in this case, the language)
export const loadMarkdownByLanguage = selectorFamily<LanguageMarkdownObject, string>({
  key: 'loadMarkdownByLanguage',
  get: (language: string) => async () => {
    try {
      const response = await fetch(`/generated/languages/${language}.json`);
      const markdown: MarkdownRootNode = await response.json();
      return {
        ready: true,
        markdown,
      } as unknown as LanguageMarkdownObject;
    } catch (error) {
      throw error; // Handle errors as needed, this will set the Recoil loadable to an error state
    }
  },
});