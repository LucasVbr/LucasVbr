import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

/**
 * FileManager is a singleton class that provides methods to read and write files.
 * It ensures that only one instance of the FileManager exists throughout the application.
 */
export class FileManager {
  /**
   * Reads the content of a file at the specified path.
   * @param {string} filePath - The path to the file to read.
   * @returns {Promise<string>} A promise that resolves with the file content.
   */
  public static async read(filePath: string): Promise<string> {
    return readFileSync(filePath, {
      encoding: 'utf-8',
    });
  }

  /**
   * Writes content to a file at the specified path.
   * If the file does not exist, it will be created.
   * @param {string} filePath - The path to the file to write.
   * @param {string} content - The content to write to the file.
   * @returns {Promise<void>} A promise that resolves when the write operation is complete.
   */
  public static async write(filePath: string, content: string): Promise<void> {
    // Ensure the directory exists before writing the file
    const dir: string = dirname(filePath);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }

    return writeFileSync(filePath, content, {
      encoding: 'utf-8',
      flag: 'w',
    });
  }
}
