import { CompilerFactory } from './CompilerFactory.ts';
import { CompilerType } from './CompilerType.ts';
import { describe, expect, it } from 'bun:test';
import type { Compiler } from './Compiler.ts';

describe('CompilerFactory', () => {
  it('should return a valid compiler instance for each supported type', () => {
    const fixture: CompilerType[] = [CompilerType.HANDLEBARS];

    for (const type of fixture) {
      const compiler: Compiler = CompilerFactory.getCompiler(type);
      expect(compiler).toBeDefined();
      expect(compiler).toHaveProperty('compile');
    }
  });

  it('should throw an error for unsupported compiler types', () => {
    const fixture: CompilerType[] = ['UNSUPPORTED_TYPE' as unknown as CompilerType];

    for (const type of fixture) {
      expect(() => CompilerFactory.getCompiler(type)).toThrowError(
        `Unsupported compiler type: ${type}`
      );
    }
  });
});
