"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripePaymentMethodTypes = void 0;
const builder_1 = require("../builder");
builder_1.builder.objectType('StripePaymentMethods', {
    fields: (t) => ({
        object: t.exposeString('object'),
        url: t.exposeString('url', {
            description: `The URL where this list can be accessed.`
        }),
        hasMore: t.exposeBoolean('has_more', {
            description: `True if this list has another page of items after this one that can be fetched.`
        }),
        data: t.expose('data', {
            type: ['StripePaymentMethod'],
            nullable: false
        })
    })
});
exports.StripePaymentMethodTypes = builder_1.builder.enumType('StripePaymentMethodTypes', {
    values: [
        'acss_debit',
        'affirm',
        'afterpay_clearpay',
        'alipay',
        'au_becs_debit',
        'bacs_debit',
        'bancontact',
        'blik',
        'boleto',
        'card',
        'card_present',
        'cashapp',
        'customer_balance',
        'eps',
        'fpx',
        'giropay',
        'grabpay',
        'ideal',
        'klarna',
        'konbini',
        'link',
        'oxxo',
        'p24',
        'paynow',
        'pix',
        'promptpay',
        'sepa_debit',
        'sofort',
        'us_bank_account',
        'wechat_pay',
    ]
});
//# sourceMappingURL=payment-methods.js.map