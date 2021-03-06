import { createLogger, format, transports } from "winston";
const { combine, timestamp, label, printf } = format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = createLogger({
  format: combine(label({ label: "school API" }), timestamp(), logFormat),
  level: "debug",
  transports: [new transports.Console()],
});
