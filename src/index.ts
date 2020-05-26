import { User } from "./models/User";

const user = new User({ name: "Asnan", age: 12 });

user.save();
