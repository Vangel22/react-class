import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission
    // Ova go sprecuva refreshiranjeto na stranicata

    const data = {
      email,
      password,
    };

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data),
    });

    console.log("res", res);
    if (res.ok) {
      const data = await res.json();
      window.localStorage.setItem("token", data.token);
      window.location = "/home";
    } else {
      console.log(res.statusText);
    }
  };

  return (
    <form
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
      onSubmit={handleLogin}
    >
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

export { Login };
