exports.startGame = (req, res) => {
  // Initialize game state, shuffle deck, assign dealer
  // Broadcast to players in lobby
  res.status(200).json({ message: 'Game started' });
};