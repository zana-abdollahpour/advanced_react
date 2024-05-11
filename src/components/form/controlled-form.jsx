import { useState, useEffect } from "react";

export default function ControlledForm() {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();

  useEffect(() => {
    if (name.length < 3) {
      setError("name must be at least 3 characters long");
    } else {
      setError("");
    }
  }, [name, age]);

  return (
    <form>
      {error && <p>{error}</p>}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
