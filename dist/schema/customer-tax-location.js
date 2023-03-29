"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeCustomerTaxLocation', {
    fields: (t) => ({
        country: t.exposeString('country', {
            description: `The customer's country as identified by Stripe Tax.`
        }),
        state: t.exposeString('state', {
            description: `The customer's state, county, province, or region as identified by Stripe Tax.`,
            nullable: true
        })
    })
});
//# sourceMappingURL=customer-tax-location.js.map