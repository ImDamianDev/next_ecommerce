import User from "models/userModel";

// Obtener un usuario por su ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    console.error("Failed to get user by ID:", error);
    throw error;
  }
};

// Obtener un usuario por su correo electrónico
const getUserByEmail = async (email) => {
  if (!email) {
    throw new Error("Email is required.");
  }

  try {
    const user = await User.findOne({ email }).maxTimeMS(20000);
    return user || null; // Devolver null si no se encuentra ningún usuario
  } catch (error) {
    console.error("Failed to get user by email:", error);
    throw new Error("Failed to fetch user by email.");
  }
};

// Crear un nuevo usuario
const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    const user = await newUser.save();
    return user;
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error;
  }
};

// Actualizar un usuario
const updateUser = async (userId, userData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    return user;
  } catch (error) {
    console.error("Failed to update user:", error);
    throw error;
  }
};

// Eliminar un usuario
const deleteUser = async (userId) => {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw error;
  }
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
