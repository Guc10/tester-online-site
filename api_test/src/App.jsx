import { useState } from "react";
import { getAllUsers } from "./api";

import Form from "./components/LogIn";

function App() {
  const [users, setUsers] = useState([]);

  const Status = {
    LoggedIn: "loggedIn",
    LogIn: "logIn",
    NotFound: "notFound",
    WrongCredentials: "wrongCredentials",
  };

  const [status, setStatus] = useState(Status.LogIn);

  async function fetchUsersAndCheck(username, password) {
    const res = await getAllUsers();
    setUsers(res.data);

    const user = res.data.find((user) => user.name === username);
    if (user) {
      if (user.password === password) {
        setStatus(Status.LoggedIn);
        console.log("loggedIn");
      } else {
        setStatus(Status.NotFound);
        console.log("notFound");
      }
    } else {
      setStatus(Status.WrongCredentials);
      console.log("wrongCredentials");
    }
  }

  return (
    <>
      <main>
        {status === Status.LoggedIn ? (
          <p>Logged successfully</p>
        ) : (
          <Form fetchUsersAndCheck={fetchUsersAndCheck}></Form>
        )}
      </main>
    </>
  );
}

export default App;
