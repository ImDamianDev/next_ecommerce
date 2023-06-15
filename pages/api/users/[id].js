import dbConnect from 'config/db';
import userService from 'services/userService';

dbConnect();

export default async function handler(req, res) {
  const {
    query: { id },
    method,
    body,
  } = req;

  switch (method) {
    // Obtener un usuario por su ID
    case 'GET':
      try {
        const user = await userService.getUserById(id);
        if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el usuario' });
      }
      break;

    // Obtener un usuario por su correo electrónico
    case 'POST':
      try {
        const { email } = body;
        const user = await userService.getUserByEmail(email);
        if (!user) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el usuario' });
      }
      break;

    // Actualizar un usuario
    case 'PUT':
      try {
        const updatedUser = await userService.updateUser(id, body);
        if (!updatedUser) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(updatedUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el usuario' });
      }
      break;

    default:
      res.status(405).json({ message: 'Método HTTP no permitido' });
      break;
  }
}