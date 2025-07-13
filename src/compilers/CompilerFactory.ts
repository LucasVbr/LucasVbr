import {type Compiler, CompilerType, HandlebarsCompiler} from '.';

/**
 * Factory class for creating compiler instances.
 * This class provides a method to get a compiler based on the specified type.
 */
export class CompilerFactory {

  /**
   * Creates a compiler instance based on the specified type.
   * @param type - The type of compiler to create.
   * @returns An instance of the specified compiler.
   */
  public static getCompiler(type: CompilerType): Compiler {
    switch (type) {
      case CompilerType.HANDLEBARS:
        return HandlebarsCompiler.getInstance();
      default:
        throw new Error(`Unsupported compiler type: ${type}`);
    }
  }
}