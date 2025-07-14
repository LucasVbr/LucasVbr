/**
 * Parser interface for parsing data strings into object representations.
 */
export interface Parser {
  /**
   * Parses the given data string and returns an object representation.
   * @param data - The data string to parse.
   * @returns An object representation of the parsed data.
   */
  parse(data: string): object;

  /**
   * Returns an instance of the parser.
   * @returns An instance of the parser.
   */
  getInstance(): Parser;
}
