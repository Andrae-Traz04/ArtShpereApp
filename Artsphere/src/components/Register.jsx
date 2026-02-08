import { useState } from "react";

export default function Register({ onRegister, onSwitch }) {
  const [username, setUsername] = useState("");

  return (
    <main className="auth">
      <h2>Create Account</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" />
      <button onClick={() => onRegister({ username })}>Register</button>
      <p onClick={onSwitch}>Already have an account?</p>
    </main>
  );
}
