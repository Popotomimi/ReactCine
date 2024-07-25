import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Robertinho Dev!");
  };

  return (
    <div className="background-image">
      <div className="login">
        <h1>Entrar</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>E-mail:</label>
            <input type="email" placeholder="Digite seu e-mail" />
          </div>
          <div className="form-control">
            <label>Senha:</label>
            <input type="password" placeholder="Digite sua senha" />
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
