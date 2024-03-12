import dbContext from "./dbContext.js";

class FriendsService {
  getFriend() {
    return dbContext.findAll();
  }

  createFriend({ name }) {
    return dbContext.createOne({ name });
  }
}

export default new FriendsService();
