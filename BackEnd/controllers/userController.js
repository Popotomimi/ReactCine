const User = require("../models/User");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Helpers
const createUserToken = require("../helpers/create-user-token");

module.exports = class userController {
  static async register(req, res) {
    // Colocando os valores enviado pelo forms em variáveis
    const { name, email, phone, password, confirmpassword } = req.body;

    // Fazendo validações
    if (!name) {
      res.status(422).json({ message: "O Nome é obrigatório!" });
      return;
    }
    if (!email) {
      res.status(422).json({ message: "O E-mail é obrigatório!" });
      return;
    }
    if (!phone) {
      res.status(422).json({ message: "O Telefone é obrigatório!" });
      return;
    }
    if (!password) {
      res.status(422).json({ message: "A Senha é obrigatória!" });
      return;
    }
    if (!confirmpassword) {
      res.status(422).json({ message: "A Confirmação é obrigatória!" });
      return;
    }
    if (password !== confirmpassword) {
      res.status(422).json({
        message: "A senha e confirmação de senha precisam ser iguais!",
      });
      return;
    }

    // Verificando se o usuário já existe
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      res.status(422).json({
        message: "E-mail já cadastrado, utilize outro",
      });
      return;
    }

    // Criando a senha com bcrypt e colocando um salt
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Criando usuário
    const user = new User({
      name,
      email,
      phone,
      password: passwordHash,
    });

    try {
      const newUser = await user.save();
      await createUserToken(newUser, req, res);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    // Validações
    if (!email) {
      res.status(422).json({ message: "O e-mail é obrigatório!" });
      return;
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória!" });
      return;
    }

    // Verificando se o usuário já esta cadastrado no banco de dados
    const user = await User.findOne({ email: email });

    if (!user) {
      res
        .status(422)
        .json({ message: "Não existe usuário cadastrado com esse e-mail!" });
      return;
    }

    // Verificando se a senha é a mesma cadastrada no DB
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.status(422).json({
        message: "Senha inválida",
      });
      return;
    }

    await createUserToken(user, req, res);
  }
};
