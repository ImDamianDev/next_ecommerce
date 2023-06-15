import dbConnect from "config/db";
import userService from "services/userService";

// Establecer la conexión con la base de datos
dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { username, email, password } = req.body;
      console.log("new user : " + username, email, password);

      const newUser = {
        name: username,
        email,
        password
      }

      const user = await userService.createUser(newUser);
      res.status(201).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear el usuario" });
    }
  } else {
    res.status(405).json({ message: "Método HTTP no permitido" });
  }
}
