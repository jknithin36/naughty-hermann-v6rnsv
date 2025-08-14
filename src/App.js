import { useState } from "react";
import "./styles.css";
import { useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const data = await res.json();
      setUsers(data.filter((user) => user.id % 2 === 0));
      setLoading(!loading);
    }

    fetchData();
  }, []);

  if (loading) return <p> Loading Tasks....</p>;
  return (
    <div className="App">
      <h1>Fetch Users Data</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
