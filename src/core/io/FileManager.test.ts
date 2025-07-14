import { FileManager } from './FileManager';
import { describe, expect, it } from 'bun:test';

describe('FileManager', () => {
  it('should read a file successfully', async () => {
    const content = await FileManager.read('tests/core/io/test.txt');
    expect(content).toBeDefined();
    expect(typeof content).toBe('string');
    expect(content).toContain('This is a test file.');
  });

  it('should throw an error for a non-existent file', async () => {
    expect(FileManager.read('./non-existent.txt')).rejects.toThrow(
      "ENOENT: no such file or directory, open './non-existent.txt'"
    );
  });
});
