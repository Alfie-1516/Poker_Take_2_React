import React, { Component } from "react";
const cardImages = import.meta.glob(
  "../../../../assets/Playing_Cards/SVG-cards-1.3/*.svg",
  { eager: true, as: "url" }
);

export class PlayerCard extends Component {
  render() {
    const { cardImage } = this.props;
    const imagePath = `../../../../assets/Playing_Cards/SVG-cards-1.3/${cardImage}.svg`;
    const imageUrl = cardImages[imagePath];
    return (
      <div className="w-2/5 h-full  ">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={cardImage}
            className="w-full h-full object-contain"
          />
        ) : (
          <p>Image not found: {cardImage}</p>
        )}
      </div>
    );
  }
}

export default PlayerCard;
