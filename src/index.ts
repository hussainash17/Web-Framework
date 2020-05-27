import { User } from "./models/User";

const collection = User.buildUserCollection();

collection.on("Change", () => {
  console.log(collection);
});

collection.fetch();
