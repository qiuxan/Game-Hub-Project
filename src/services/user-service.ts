import apiClient from "./api-client";
export interface User {
  id: number;
  name: string;
}

class userService {
  getAllUsers() {
    const controller = new AbortController();
    const request = apiClient.get<User[]>("/users", {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  }

  deleteUser(id: number) {
    return apiClient.delete("/users/" + id);
  }
  updateUser(user: User) {
    const updatedUser = { ...user, name: user.name + "!" };
    return apiClient.patch("/users/" + user.id, updatedUser);
  }

  addUser(newUser: User) {
    return apiClient.post("/users/", newUser);
  }
}

export default new userService();
