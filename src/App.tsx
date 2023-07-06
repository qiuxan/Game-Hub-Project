import React, { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}
function App() {
  const [users, setUnsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    // const fetchUser = async () => {
    //   try {
    //     const res = await axios.get<User[]>(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     setUnsers(res.data);
    //   } catch (err) {
    //     setError((err as AxiosError).message);
    //   }
    // };

    // fetchUser();

    const controller = new AbortController();
    const res = axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => setUnsers(res.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return (
    <>
      {error && <p className="text-danger">{error}</p>}
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
