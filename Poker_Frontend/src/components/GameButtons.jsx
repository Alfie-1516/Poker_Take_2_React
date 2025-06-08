import React, { Component } from "react";

export class GameButtons extends Component {
  render() {
    const { buttonName } = this.props;

    function handleButtonPress(clickedButton) {
      switch (clickedButton) {
        case "Raise":
          console.log("Player Raised");
          return "Player Raised";
        case "Call":
          console.log("Player Called");
          return "Player Called";
        case "Check":
          console.log("Player Checked");
          return "Player Checked";
        case "Fold":
          console.log("Player Folded");
          return "Player Folded";
        case "All In":
          console.log("Player All In");
          return "Player All In";
        default:
          console.log("Unknown");
          return "Unknown";
      }
    }

    return (
      <button
        onClick={() => handleButtonPress(buttonName)}
        className="bg-[#4d724d] w-20 h-8 flex justify-center items-center rounded-3xl text-white"
      >
        {buttonName}
      </button>
    );
  }
}

export default GameButtons;
