"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const reducer_1 = require("./store/reducer");
const app_jsx_1 = require("./components/app/app.jsx");
const offers_1 = require("./mocks/offers");
const cities_1 = require("./mocks/cities");
const store = redux_1.createStore(reducer_1.reducer, redux_devtools_extension_1.composeWithDevTools());
const baseSettings = {
    rentOffers: offers_1.offers,
    rentOffersCount: offers_1.offers.length,
    cities: cities_1.cities,
};
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(app_jsx_1.default, { settings: baseSettings })), document.querySelector(`#root`));
//# sourceMappingURL=index.js.map