import { useState } from "react";

export default function Login({ onLogin, onSwitch }) {
  const [username, setUsername] = useState("");

  return (
    <main className="auth">
      <h2>Login to ArtSphere</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" />
      <button onClick={() => onLogin({ username })}>Login</button>
      <p onClick={onSwitch}>No account? Register</p>
    </main>
  );
}
