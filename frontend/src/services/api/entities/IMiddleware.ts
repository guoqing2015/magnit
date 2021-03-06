import { TMethod } from "./ICourier";

export interface IMiddlewareMeta {
    method: TMethod;
    version: string;
    path: string;
}

export interface IMiddleware {
    request(meta: IMiddlewareMeta, data: any): Promise<any>;

    response(meta: IMiddlewareMeta, response: any): Promise<any>;

    error<T>(meta: IMiddlewareMeta, reason: T): void;
}
