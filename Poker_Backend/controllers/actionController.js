export const playerAction = (req, res) => {
  const { action } = req.body;
  console.log(action)
  res.json({ message: `Received action: ${action}` });
};