import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUnsers] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUnsers(res.data));
  }, []);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          ID: {user.id} Name: {user.name}
        </li>
      ))}
    </ul>
  );
}

export default App;
