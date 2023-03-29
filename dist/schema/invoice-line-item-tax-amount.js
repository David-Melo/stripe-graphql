"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../builder");
builder_1.builder.objectType('StripeInvoiceLineItemTaxAmount', {
    fields: (t) => ({
        amount: t.exposeInt('amount', {
            description: `The amount, in %s, of the tax.`
        }),
        inclusive: t.exposeBoolean('inclusive', {
            description: `Whether this tax amount is inclusive or exclusive.`
        })
    })
});
//# sourceMappingURL=invoice-line-item-tax-amount.js.map