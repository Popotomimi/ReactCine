// Hooks
import { useContext, useState } from "react";

// React Router Dom
import { Link, useNavigate } from "react-router-dom";

// Context
import { Context } from "../../context/UserContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      confirmpassword: confirmPassword,
    };
    register(user);
  };

  return (
    <div className="bgdImgRegister">
      <div className="register">
        <h1>Cadastrar</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Nome Completo:</label>
            <input
              type="text"
              placeholder="Digite seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>E-mail:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label>Telefone:</label>
            <input
              type="text"
              placeholder="Digite seu número de telefone"
              onChange={(e) => setPhone(e.target.value)}
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
          <div className="form-control">
            <label>Confirme sua senha:</label>
            <input
              type="password"
              placeholder="Confirme sua senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <p>
            Já tem conta? <Link to="/login">Clique aqui!</Link>{" "}
          </p>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
