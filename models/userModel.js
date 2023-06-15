import { Schema, model, models } from "mongoose";
import bcrypt from 'bcryptjs';

// Definir el schema de usuario
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ['user'] },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

// Método para comparar contraseñas
UserSchema.methods.comparePassword = async function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

// Crear el modelo de producto usuario a partir del schema
const User = models.User || model("User", UserSchema);

export default User;
