import friendsService from "./service.js";

export const getFriend = async (req, res) => {
  return res.status(200).json(friendsService.getFriend());
};

export const createFriend = async (req, res) => {
  const { name, age } = req.body;
  return res.status(200).json(friendsService.createFriend({ name }));
};
