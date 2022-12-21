class Log {
  colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
  };

  private readonly logFunction: (message?: any, ...optionalParams: any[]) => void;

  constructor(logFunction: (message?: any, ...optionalParams: any[]) => void) {
    this.logFunction = logFunction;
  }

  info(message: string): void {
    this.logFunction(message);
  }

  success(message: string): void {
    this.logFunction(this.colors.green, message);
  }

  error(message: string): void {
    this.logFunction(this.colors.red, message);
  }

  warning(message: string): void {
    this.logFunction(this.colors.yellow, message);
  }
}

const log = new Log(console.log);
export default log;
