import dbConnect from 'config/db';
import userService from 'services/userService';

// Establecer la conexión con la base de datos
dbConnect();

export default async function handler(req, res) {
  switch (req.method) {
    // Obtener todos los usuarios
    case 'GET':
      try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los usuarios' });
      }
      break;

    default:
      res.status(405).json({ message: 'Método HTTP no permitido' });
      break;
  }
}