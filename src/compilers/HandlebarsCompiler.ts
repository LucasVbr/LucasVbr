import {type Compiler, CompilerType} from '.';
import {compile} from 'handlebars';

export class HandlebarsCompiler implements Compiler {

  static readonly TYPE: CompilerType = CompilerType.HANDLEBARS;

  private static instance: HandlebarsCompiler;
  private constructor() {}

  public static getInstance(): HandlebarsCompiler {
    if (!HandlebarsCompiler.instance) {
      HandlebarsCompiler.instance = new HandlebarsCompiler();
    }
    return HandlebarsCompiler.instance;
  }

  /**
   * @inheritdoc
   */
  public compile(template: string, data: object = {}): string {
    const compiledTemplate = compile(template);
    return compiledTemplate(data);
  }
}