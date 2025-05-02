const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Ingresar nombre"],
    },
    email: {
      type: String,
      required: [true, "Ingresar email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Ingresar contraseña"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
