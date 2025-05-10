const express = require("express");
const router = express.Router();
const { registerUser, loginUser, getMe, updateUser, deleteUser } = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// Ruta para registro de usuario
router.post("/", registerUser);

// Ruta para login
router.post("/login", loginUser);

// Ruta para obtener perfil del usuario autenticado
router.get("/me", protect, getMe);

//Ruta para actualizar el usuario
router.put("/:id", updateUser);

//Eliminar Tareas
router.delete("/:id", deleteUser);

module.exports = router;
