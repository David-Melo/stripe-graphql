/// <reference types="node" />
import { schema } from './schema';
import { CreateServerProps } from './types';
declare const createStripeGraphQLServer: (params?: CreateServerProps) => import("http").Server<typeof import("http").IncomingMessage, typeof import("http").ServerResponse>;
export { createStripeGraphQLServer, schema };
