"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
require("./address");
require("./customer");
require("./customers");
require("./customer-shipping");
require("./customer-tax");
require("./customer-tax-location");
require("./payment-methods");
require("./payment-method");
require("./payment-method-billing-details");
require("./payment-method-card");
require("./payment-method-card-checks");
require("./payment-method-card-networks");
require("./payment-method-card-three-d-secure-usage");
require("./payment-method-card-wallet-masterpass");
require("./payment-method-card-wallet-visa-checkout");
require("./payment-method-card-wallet");
require("./stripe");
require("./subscriptions");
require("./subscription");
require("./subscription-items");
require("./subscription-item");
require("./subscription-item-billing-thresholds");
require("./subscription-automatic-tax");
require("./subscription-billing-thresholds");
require("./subscription-pause-collection");
require("./invoices");
require("./invoice");
require("./invoice-automatic-tax");
require("./invoice-custom-field");
require("./invoice-customer-shipping");
require("./invoice-customer-tax-id");
require("./invoice-line-items");
require("./invoice-line-item");
require("./invoice-line-item-period");
require("./invoice-line-item-tax-amount");
require("./invoice-rendering-options");
require("./invoice-status-transitions");
require("./plan");
require("./plan-transform-usage");
require("./price");
require("./product");
require("./tax-rate");
require("./test-clock");
require("./billing-portal-session");
require("./payment-intent");
require("./payment-intents");
require("./charges");
require("./charge");
require("./connectedAccount");
require("./connectedAccounts");
const builder_1 = require("../builder");
exports.schema = builder_1.builder.toSchema();
//# sourceMappingURL=index.js.map