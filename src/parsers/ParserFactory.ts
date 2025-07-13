import {ParserType, type Parser, YamlParser} from "."

/**
 * Factory class for creating parser instances.
 */
export class ParserFactory {

  /**
   * Creates and returns a parser instance based on the specified type.
   * @param type
   */
  static getParser(type: ParserType): Parser {
    switch (type) {
      case ParserType.YAML:
        return YamlParser.getInstance();
      default:
        throw new Error(`Unsupported parser type: ${type}`);
    }
  }
}