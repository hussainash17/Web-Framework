import Axios, { AxiosResponse } from "axios";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propsName: string): string | number {
    return this.data[propsName];
  }

  set(update: UserProps): void {
    // take all the properties of update and override in this.data
    Object.assign(this.data, update);
  }

  fetch(): void {
    Axios.get(`http://localhost:3000/users/${this.get("id")}`).then(
      (response: AxiosResponse): void => {
        this.set(response.data);
      }
    );
  }

  save(): void {
    const id = this.get("id");
    if (id) {
      Axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      Axios.post("http://localhost:3000/users", this.data);
    }
  }
}
