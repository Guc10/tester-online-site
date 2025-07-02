import { useEffect, useState } from "react";
import Form from "./components/form.jsx";
import { getAllUsers, deleteUser } from "./api.js";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchUsers() {
    try {
      const res = await getAllUsers();
      setUsers(res.data);
    } catch (err) {
      setError("Błąd pobierania użytkowników");
    } finally {
      setLoading(false);
    }
  }

  async function removeUser(id) {
    const res = await deleteUser(id);
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div>
        {users.map((user) => (
          <div
            key={user.id}
            className="userContainer"
            onClick={() => removeUser(user.id)}
          >
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>
      <Form onUserAdded={fetchUsers} />
    </>
  );
}

export default App;
