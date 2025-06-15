export function turnManager(players){
    let highestBet = Math.max(
    ...players
      .filter((player) => !player.fold && !player.out)
      .map((player) => player.bet))

    return highestBet
}