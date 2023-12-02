import {promises as fs} from 'fs';
import {join as pathJoin, dirname, basename} from 'path';
import {fileURLToPath} from 'url';
import {globby} from 'globby';

import yaml from 'yaml';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const jsonStringifyConfig = process.env.NODE_ENV === 'development' ? [null, 2] : [];

const {readFile, writeFile, mkdir} = fs;

main();

function ofUnix(file) {
  return file.replace(/\\/gi, '/');
}

async function yamlParseAndSave(file) {
  file = file.replace(ofUnix(pathJoin(__dirname, '..', '..')) + '/', '');
  console.log(file);

  const chunks = file.split('/');

  const yamlString = await readFile(file, 'utf-8');
  const yamlObject = yaml.parse(yamlString);

  const dirName = pathJoin(__dirname, '..', '..', 'public', 'generated', 'languages', chunks[chunks.length - 2]);
  await mkdir(dirName, {recursive: true});

  const fileName = pathJoin(dirName, basename(file, '.yml') + '.json');
  await writeFile(fileName, JSON.stringify(yamlObject, ...jsonStringifyConfig));
}

async function main() {
  const search = ofUnix(pathJoin(__dirname, '..', '..', 'yaml', 'lang', '**', 'lang.yml'));

  const yamlFiles = await globby([search]);
  await Promise.all(yamlFiles.map((file) => yamlParseAndSave(file)));

  const languageHierarchy = [];
  for (const file of yamlFiles) {
    const yamlString = await readFile(file, 'utf-8');
    const yamlObject = yaml.parse(yamlString);

    languageHierarchy.push(yamlObject);
  }

  await writeFile(
    pathJoin(__dirname, '..', '..', 'public', 'generated', 'hierarchy.json'),
    JSON.stringify(languageHierarchy, ...jsonStringifyConfig),
  );
}
