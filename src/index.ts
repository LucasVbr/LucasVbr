import config from '../config.json';
import {CompilerFactory, CompilerType} from './compilers';
import {ParserFactory, ParserType} from './parsers';
import {Validator} from './validators/Validator.ts';
import {FileManager} from './io/FileManager.ts';
import {ReadmeSchema} from './validators/schemas';

/**
 * Point d'entrée du script
 */
async function main(): Promise<void> {
  const compiler = createCompiler(config.compiler_type);
  const parser = createParser(config.parser_type);
  const validator = new Validator(ReadmeSchema);

  const data = await loadData(config.data_file, parser, validator);
  const template = await loadTemplate(config.input_file);
  const result = compiler.compile(template, data);

  await saveOutput(config.output_file, result);
}

/**
 * Crée un compilateur en fonction du type spécifié dans la configuration
 * @param type - Le type de compilateur à créer
 */
function createCompiler(type: string) {
  const compilerType = CompilerType[type as keyof typeof CompilerType];
  return CompilerFactory.getCompiler(compilerType);
}

/**
 * Crée un parseur en fonction du type spécifié dans la configuration
 * @param type - Le type de parseur à créer
 */
function createParser(type: string) {
  const parserType = ParserType[type as keyof typeof ParserType];
  return ParserFactory.getParser(parserType);
}

/**
 * Charge les données depuis le fichier spécifié, les parse et les valide
 * @param path - Le chemin du fichier de données
 * @param parser - Le parseur à utiliser pour analyser les données
 * @param validator - Le validateur à utiliser pour valider les données
 */
async function loadData(
    path: string, parser: ReturnType<typeof createParser>,
    validator: Validator) {
  const raw = await FileManager.read(path);
  const parsed = parser.parse(raw);
  return validator.validate(parsed);
}

/**
 * Charge le modèle de template depuis le fichier spécifié
 * @param path - Le chemin du fichier de template
 */
async function loadTemplate(path: string): Promise<string> {
  return FileManager.read(path);
}

/**
 * Enregistre le résultat compilé dans le fichier de sortie spécifié
 * @param path - Le chemin du fichier de sortie
 * @param content - Le contenu à écrire dans le fichier
 */
async function saveOutput(path: string, content: string): Promise<void> {
  await FileManager.write(path, content);
}

// Exécute le script principal
main()
    .then(() => console.log('🎉 Exécution terminée avec succès.'))
    .catch(err => console.error('❌ Erreur pendant l’exécution:', err));
