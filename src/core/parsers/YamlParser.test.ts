import { YamlParser } from './YamlParser';
import { describe, expect, it } from 'bun:test';

describe('YamlParser', () => {
  const parser = YamlParser.getInstance();

  it('should parse valid YAML data', () => {
    type Fixture = {
      actual: string;
      expected: object;
    };

    const fixture: Fixture[] = [
      {
        actual: `
          name: John Doe
          age: 30
          skills:
          - JavaScript
          - TypeScript
        `,
        expected: {
          name: 'John Doe',
          age: 30,
          skills: ['JavaScript', 'TypeScript'],
        },
      },
    ];

    for (const { actual, expected } of fixture) {
      expect(parser.parse(actual)).toEqual(expected);
    }
  });

  it('should throw an error for invalid YAML data', () => {
    type Fixture = {
      actual: string;
    };

    const fixture: Fixture[] = [
      {
        actual: `
          name: John Doe
          age: 30
          skills:
            - JavaScript
            - TypeScript
          10
        `,
      },
    ];

    for (const { actual } of fixture) {
      expect(() => parser.parse(actual)).toThrow('Failed to parse YAML data');
    }
  });
});
