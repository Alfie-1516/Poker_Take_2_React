import React, { Component } from "react";
import cardImages from "./cardImages";

export class Card extends Component {
  render() {
    const { cardImage } = this.props;
    const imageUrl = cardImages[cardImage];
    return (
      <div className="w-5/12 h-full ">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={cardImage}
            className="w-full h-full object-contain"
          />
        ) : (
          <p>Image not found: {cardImages}</p>
        )}
      </div>
    );
  }
}

export default Card;
