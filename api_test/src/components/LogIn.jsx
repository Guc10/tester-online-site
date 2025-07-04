import { useState } from "react";

function LogIn({ fetchUsersAndCheck }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchUsersAndCheck(username, password);
        }}
      >
        <input
          type="text"
          placeholder="username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default LogIn;
