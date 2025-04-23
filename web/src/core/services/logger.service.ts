/**
 * Log levels
 */
export enum LogLevel {
  DEBUG = 'debug',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error'
}

/**
 * Logger service for consistent logging throughout the application
 * Can be extended to send logs to external services
 */
class LoggerService {
  private logLevel: LogLevel = LogLevel.INFO;
  private enabled: boolean = true;

  /**
   * Set the minimum log level
   * @param level - Minimum log level to display
   */
  setLogLevel(level: LogLevel): void {
    this.logLevel = level;
  }

  /**
   * Enable or disable logging
   * @param enabled - Whether logging is enabled
   */
  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  /**
   * Log a debug message
   * @param message - The message to log
   * @param data - Optional data to log
   */
  debug(message: string, ...data: any[]): void {
    if (!this.enabled || this.getLogLevelValue(this.logLevel) > this.getLogLevelValue(LogLevel.DEBUG)) {
      return;
    }
    console.debug(`[DEBUG] ${message}`, ...data);
  }

  /**
   * Log an info message
   * @param message - The message to log
   * @param data - Optional data to log
   */
  info(message: string, ...data: any[]): void {
    if (!this.enabled || this.getLogLevelValue(this.logLevel) > this.getLogLevelValue(LogLevel.INFO)) {
      return;
    }
    console.info(`[INFO] ${message}`, ...data);
  }

  /**
   * Log a warning message
   * @param message - The message to log
   * @param data - Optional data to log
   */
  warn(message: string, ...data: any[]): void {
    if (!this.enabled || this.getLogLevelValue(this.logLevel) > this.getLogLevelValue(LogLevel.WARN)) {
      return;
    }
    console.warn(`[WARN] ${message}`, ...data);
  }

  /**
   * Log an error message
   * @param message - The message to log
   * @param data - Optional data to log
   */
  error(message: string, ...data: any[]): void {
    if (!this.enabled || this.getLogLevelValue(this.logLevel) > this.getLogLevelValue(LogLevel.ERROR)) {
      return;
    }
    console.error(`[ERROR] ${message}`, ...data);
  }

  /**
   * Get numeric value for log level (for comparison)
   * @param level - Log level to get value for
   * @returns Numeric log level value
   */
  private getLogLevelValue(level: LogLevel): number {
    switch (level) {
      case LogLevel.DEBUG:
        return 0;
      case LogLevel.INFO:
        return 1;
      case LogLevel.WARN:
        return 2;
      case LogLevel.ERROR:
        return 3;
      default:
        return 1;
    }
  }
}

export default new LoggerService();