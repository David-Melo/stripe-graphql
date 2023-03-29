"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builder = void 0;
const graphql_scalars_1 = require("graphql-scalars");
const core_1 = require("@pothos/core");
const builder = new core_1.default({});
exports.builder = builder;
builder.queryType();
builder.mutationType();
builder.addScalarType('JSON', graphql_scalars_1.GraphQLJSONObject, {});
//# sourceMappingURL=builder.js.map