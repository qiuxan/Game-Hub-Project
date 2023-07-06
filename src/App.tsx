import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUnsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => setUnsers(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error &&  <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            ID: {user.id} Name: {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
