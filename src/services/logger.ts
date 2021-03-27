import winston from 'winston';
import { stringify } from 'flatted';

const customLogFormat = winston.format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

export const logger = winston.createLogger({
    level: 'silly',
    format: winston.format.combine(
        winston.format.label({ label: 'ExpressServer' }),
        winston.format.timestamp({
            format: ((): string => {
                return new Date().toLocaleString('en-IN');
            })
        }),
        customLogFormat
    ),
    defaultMeta: {
        service: 'user-service'
    },
    transports: [
        new winston.transports.File({ filename: './logs/logs-api.log', level: 'info' }),
        new winston.transports.Console({
            level: 'silly',
            format: winston.format.combine(
                winston.format.colorize()
            )
        })
    ]
});