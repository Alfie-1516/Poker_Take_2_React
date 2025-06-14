import React from "react";

function GameButtons({ buttonName, setTempPlayers, temp_players }) {
  async function handleButtonPress(clickedButton) {
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
      case "Start Game":
        console.log("Player has started the game");

        try {
          const response = await fetch(
            "http://localhost:5001/api/game/startGame"
          );
          const data = await response.json();
          console.log(data.allPlayers);
          setTempPlayers(data.allPlayers);
        } catch (error) {
          console.error("Failed to fetch players:", error);
        }
        return;
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

export default GameButtons;
