/**
 * Compiler interface for compiling templates with data.
 */
export interface Compiler {
  /**
   * Compiles the given template with the provided data.
   * @param template - The template string to compile.
   * @param data - The data object to use for compilation.
   */
  compile(template: string, data: object): string;
}
