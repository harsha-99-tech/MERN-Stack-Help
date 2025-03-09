import { useState } from "react";
import axios from "axios";

const UserForm = ({ onSubmit }) => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/createuser", { id, name });
      onSubmit({ id, name });
      setId(0);
      setName("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input
          type="number"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <button type="submit">Add User</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default UserForm;
