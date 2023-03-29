"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.createStripeGraphQLServer = void 0;
const node_http_1 = require("node:http");
const graphql_yoga_1 = require("graphql-yoga");
const schema_1 = require("./schema");
Object.defineProperty(exports, "schema", { enumerable: true, get: function () { return schema_1.schema; } });
const utils_1 = require("./utils");
const createStripeGraphQLServer = (params) => {
    const cors = params === null || params === void 0 ? void 0 : params.cors;
    const isAllowed = params === null || params === void 0 ? void 0 : params.isAllowed;
    const graphiql = params === null || params === void 0 ? void 0 : params.graphiql;
    const context = (context) => {
        const { request } = context;
        const userClaims = (0, utils_1.getUserClaims)(request);
        const adminSecretFromHeader = request.headers.get('x-hasura-admin-secret');
        const adminSecret = process.env.NHOST_ADMIN_SECRET;
        const nhostWebhookSecretFromHeader = request.headers.get('x-hasura-webhook-secret');
        const nhostWebhookSecret = process.env.SERVICE_API_SECRET_KEY;
        const role = request.headers.get('x-hasura-role');
        const isAdmin = adminSecretFromHeader === adminSecret ||
            (role === 'admin' && nhostWebhookSecretFromHeader === nhostWebhookSecret);
        const isAllowedFunction = isAllowed ||
            ((_stripeCustomerId, context) => {
                return context.isAdmin;
            });
        return Object.assign(Object.assign({}, context), { isAllowed: isAllowedFunction, userClaims,
            isAdmin });
    };
    const yoga = (0, graphql_yoga_1.createYoga)({
        cors,
        graphiql,
        context,
        schema: schema_1.schema,
        graphqlEndpoint: '*'
    });
    return (0, node_http_1.createServer)(yoga);
};
exports.createStripeGraphQLServer = createStripeGraphQLServer;
//# sourceMappingURL=server.js.map