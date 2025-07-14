import { type Parser, ParserType } from '.';
import { parse } from 'yaml';

/**
 * YamlParser class implements the Parser interface for parsing YAML data.
 */
export class YamlParser implements Parser {
  /**
   * The type of the parser.
   * This is used to identify the parser type in the system.
   */
  static readonly TYPE: ParserType = ParserType.YAML;

  /**
   * Singleton instance of the parser.
   * This ensures that only one instance of the parser exists.
   */
  static instance?: YamlParser;

  private constructor() {}

  /**
   * @inheritdoc
   */
  public static getInstance(): YamlParser {
    if (!this.instance) {
      this.instance = new YamlParser();
    }
    return this.instance;
  }

  getInstance(): Parser {
    throw new Error('Method not implemented.');
  }

  /**
   * @inheritdoc
   */
  public parse(data: string): object {
    try {
      return parse(data);
    } catch (error) {
      throw new Error('Failed to parse YAML data', { cause: error });
    }
  }
}
