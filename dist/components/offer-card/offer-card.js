"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const OfferCard = (props) => {
    const { offer, index, isNearPlace, onTitleClick, handleMouseOver, handleMouseLeave } = props;
    const { title, price, preview_image, is_premium, type, rating } = offer;
    const handleTitleClick = (idx, evt) => {
        evt.preventDefault();
        onTitleClick(idx);
    };
    return (React.createElement("article", { className: isNearPlace ? `near-places__card place-card` : `cities__place-card place-card`, onMouseEnter: () => handleMouseOver(offer), onMouseLeave: handleMouseLeave },
        is_premium &&
            React.createElement("div", { className: "place-card__mark" },
                React.createElement("span", null, "Premium")),
        React.createElement("div", { className: "cities__image-wrapper place-card__image-wrapper" },
            React.createElement("a", { href: "#" },
                React.createElement("img", { className: "place-card__image", src: preview_image, width: "260", height: "200", alt: "Place image" }))),
        React.createElement("div", { className: "place-card__info" },
            React.createElement("div", { className: "place-card__price-wrapper" },
                React.createElement("div", { className: "place-card__price" },
                    React.createElement("b", { className: "place-card__price-value" },
                        "\u20AC",
                        price),
                    React.createElement("span", { className: "place-card__price-text" }, "/\u00A0night")),
                React.createElement("button", { className: "place-card__bookmark-button button", type: "button" },
                    React.createElement("svg", { className: "place-card__bookmark-icon", width: "18", height: "19" },
                        React.createElement("use", { xlinkHref: "#icon-bookmark" })),
                    React.createElement("span", { className: "visually-hidden" }, "To bookmarks"))),
            React.createElement("div", { className: "place-card__rating rating" },
                React.createElement("div", { className: "place-card__stars rating__stars" },
                    React.createElement("span", { style: { width: `${rating}%` } }),
                    React.createElement("span", { className: "visually-hidden" }, "Rating"))),
            React.createElement("h2", { className: "place-card__name" },
                React.createElement("a", { href: "#", onClick: (evt) => handleTitleClick(index, evt) }, title)),
            React.createElement("p", { className: "place-card__type" }, type))));
};
exports.default = OfferCard;
//# sourceMappingURL=offer-card.js.map