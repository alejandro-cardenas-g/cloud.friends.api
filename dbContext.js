import { v4 } from "uuid";

class FriendsDbContext {
  friends = [
    { id: v4(), name: "amigo 1" },
    { id: v4(), name: "amigo 2" },
    { id: v4(), name: "amigo 3" },
  ];

  findAll() {
    return this.friends;
  }

  createOne({ name }) {
    const newFriend = { id: v4(), name };
    this.friends.push(newFriend);
    return newFriend;
  }
}

export default new FriendsDbContext();
