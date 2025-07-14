import { CompilerType } from './CompilerType';
import { describe, expect, it } from 'bun:test';

describe('CompilerType', () => {
  it('should be an enum', () => {
    expect(typeof CompilerType).toBe('object');
    expect(Object.keys(CompilerType)).toContain('HANDLEBARS');
  });
});
