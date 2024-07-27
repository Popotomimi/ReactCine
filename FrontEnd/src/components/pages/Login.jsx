// React Router Dom
import { Link } from "react-router-dom";

// Hooks
import { useState, useContext } from "react";

// Context
import { Context } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    login(user);
  };

  return (
    <div className="background-image">
      <div className="login">
        <h1>Entrar</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>E-mail:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Senha:</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Ainda não tem conta? <Link to="/register">Clique aqui!</Link>{" "}
          </p>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
