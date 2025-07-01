import { useState } from "react";
import { createUser } from "../api";

function Form({ onUserAdded }) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const uploadUser = async (e) => {
    e.preventDefault();
    if (!userName || !userAge) return;
    await createUser(userName, userAge);
    setUserName("");
    setUserAge("");
    if (onUserAdded) onUserAdded();
  };

  return (
    <form onSubmit={uploadUser}>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Imię"
      />
      <input
        type="number"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value)}
        placeholder="Wiek"
      />
      <input type="submit" value="Upload user" />
    </form>
  );
}

export default Form;
