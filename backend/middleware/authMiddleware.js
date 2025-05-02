const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Verifica si hay header Authorization y empieza con "Bearer"
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Extrae el token
      token = req.headers.authorization.split(" ")[1];

      // Verifica y decodifica el token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Busca al usuario y lo agrega al objeto request sin la contraseña
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Token inválido");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("No autorizado, no hay token");
  }
});

module.exports = { protect };
