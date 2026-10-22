import { config } from '@/platform/config/config';

/* Application logging. Routes and shared code log through `log`, never through console directly (rule NO-CONSOLE).
   A sink receives every entry: the console today; a monitoring service (e.g. Application Insights, which the original
   app uses) can be added with addLogSink without touching callers. */
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export interface LogEntry {
  level: LogLevel;
  message: string;
  data?: unknown;
  time: string;
  env: string;
}
export type LogSink = (entry: LogEntry) => void;

const consoleSink: LogSink = ({ level, message, data }) => {
  const line = `[${level}] ${message}`;
  if (level === 'error') console.error(line, data ?? '');
  else if (level === 'warn') console.warn(line, data ?? '');
  else if (import.meta.env.DEV) console.info(line, data ?? '');
};

const sinks = new Set<LogSink>([consoleSink]);

export function addLogSink(sink: LogSink): () => void {
  sinks.add(sink);
  return () => {
    sinks.delete(sink);
  };
}

function write(level: LogLevel, message: string, data?: unknown) {
  const entry: LogEntry = { level, message, data, time: new Date().toISOString(), env: config.env };
  for (const sink of sinks) {
    try {
      sink(entry);
    } catch {
      /* a failing sink must never break the app */
    }
  }
}

export const log = {
  debug: (message: string, data?: unknown) => {
    write('debug', message, data);
  },
  info: (message: string, data?: unknown) => {
    write('info', message, data);
  },
  warn: (message: string, data?: unknown) => {
    write('warn', message, data);
  },
  error: (message: string, data?: unknown) => {
    write('error', message, data);
  },
};
