import { User } from "./models/User";

const user = new User({ id: 3, name: "Ashraf Ali", age: 89 });

user.on("save", () => {
  console.log(user);
});

user.save();
