import { Request, Response } from "express";
import { ConnectionOptions } from "typeorm";

export type ApolloContext = {
    req: Request;
    res: Response;
}

export type DBDetailsType = {
    db_type: ConnectionOptions;
    db_host: string;
    db_port: number;
    db_user: string;
    db_pass: string;
    db_name: string;
}