"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var head_1 = __importDefault(require("next/head"));
var link_1 = __importDefault(require("next/link"));
var graphql_1 = require("../web/graphql/generated/graphql");
function My() {
    var _a = graphql_1.useMeQuery(), data = _a.data, loading = _a.loading, error = _a.error;
    if (error) {
        var errorMessage = error.graphQLErrors.map(function (x) { return x.message; });
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(link_1.default, { href: '/' },
                react_1.default.createElement("a", null, "Top\u30DA\u30FC\u30B8\u3078\u623B\u308B")),
            react_1.default.createElement("div", null, errorMessage[0]['message'])));
    }
    if (typeof data === 'undefined') {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(link_1.default, { href: '/' },
                react_1.default.createElement("a", null, "Top\u30DA\u30FC\u30B8\u3078\u623B\u308B"))));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(head_1.default, null,
            react_1.default.createElement("title", null, "\u30DE\u30A4\u30DA\u30FC\u30B8")),
        react_1.default.createElement(link_1.default, { href: '/home' },
            react_1.default.createElement("a", null, "\u30DB\u30FC\u30E0\u3078\u623B\u308B")),
        react_1.default.createElement("p", null, "This is MyPaeg !!!!"),
        react_1.default.createElement("div", null, data.me && data.me.nickname),
        react_1.default.createElement("style", { jsx: true }, "")));
}
exports.default = My;
