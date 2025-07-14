import { HandlebarsCompiler } from './HandlebarsCompiler';
import { CompilerType } from './CompilerType';
import { describe, expect, it } from 'bun:test';

describe('HandlebarsCompiler', () => {
  const compiler = HandlebarsCompiler.getInstance();

  it('should return the singleton instance', () => {
    expect(compiler).toBeInstanceOf(HandlebarsCompiler);
    expect(HandlebarsCompiler.getInstance()).toBe(compiler);
  });

  it('should have the correct compiler type', () => {
    expect(HandlebarsCompiler.TYPE).toBe(CompilerType.HANDLEBARS);
  });

  it('should compile valid Handlebars templates', () => {
    type Fixture = {
      actual: {
        template: string;
        data: object;
      };
      expected: string;
    };

    const fixture: Fixture[] = [
      {
        actual: {
          template: `Hello, {{name}}!`,
          data: { name: 'World' },
        },
        expected: 'Hello, World!',
      },
    ];

    for (const { actual, expected } of fixture) {
      expect(compiler.compile(actual.template, actual.data)).toBe(expected);
    }
  });

  it('should throw an error for invalid Handlebars templates', () => {
    type Fixture = {
      actual: {
        template: string;
        data: object;
      };
    };

    const fixture: Fixture[] = [
      {
        actual: {
          template: `Hello, {{name!}}`,
          data: { name: 'World' },
        },
      },
    ];

    for (const { actual } of fixture) {
      expect(() => compiler.compile(actual.template, actual.data)).toThrowError();
    }
  });
});
