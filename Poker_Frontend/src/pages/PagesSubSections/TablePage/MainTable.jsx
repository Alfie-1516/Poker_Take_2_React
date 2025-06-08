import React, { Component } from "react";
import Card from "../../../components/card";

export class MainTable extends Component {
  render() {
    let table_cards = [
      "2_of_diamonds",
      "2_of_diamonds",
      "2_of_diamonds",
      "2_of_diamonds",
      "2_of_diamonds",
    ];
    let potValue = 500;
    return (
      <div className="p-6 h-[65%] border-2 rounded-tr-lg  border-l-0 border-[#8db48e] flex flex-col justify-center gap-3 items-center w-full bg-[url(/poker_table.webp)] bg-center xl:bg-size-[80%] lg:bg-size-[100%] bg-no-repeat">
        <p className="text-xl font-semibold text-white">
          Pot Amount : <span className="text-white">${potValue}</span>
        </p>
        <img src="/medium.jpg" alt="" className="w-30 h-30" />
        <div className="h-2/6 w-1/2 flex">
          {table_cards.map((card, idx) => (
            <Card key={idx} cardImage={card} />
          ))}
        </div>
      </div>
    );
  }
}

export default MainTable;
