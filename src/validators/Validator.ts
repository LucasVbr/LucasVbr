import type { ZodObject } from 'zod';

/**
 * Validator class for validating and parsing objects against a Zod schema.
 */
export class Validator {
  /**
   * Creates an instance of the Validator.
   * @param schema - The Zod schema to validate against.
   */
  constructor(private schema: ZodObject) {}

  /**
   * Validates the given value against the schema.
   * @param value - The object to validate.
   * @returns true if the value is valid, false otherwise.
   */
  public isValid(value: object): boolean {
    try {
      this.schema.parse(value);
      return true;
    } catch (error) {
      console.error('Validation error:', error);
      return false;
    }
  }

  /**
   * Parses the given value against the schema.
   * @param value - The object to parse.
   * @returns The parsed object if valid, throws an error otherwise.
   */
  public validate(value: object): object {
    try {
      return this.schema.parse(value);
    } catch (error) {
      console.error('Parsing error:', error);
      throw new Error('Failed to parse value');
    }
  }
}
