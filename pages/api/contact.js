// pages/api/contact.js
import transporter from '../../lib/nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: email,
      to: 'imdamian.dev@gmail.com',
      subject: `Mensaje de ${name} (${email})`,
      text: message,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log(`Correo enviado: ${info.messageId}`);
      res.status(200).json({ message: 'Correo enviado correctamente.' });
    } catch (error) {
      console.error(`Error al enviar correo: ${error}`);
      res.status(500).json({ message: 'Error al enviar correo.' });
    }
  } else {
    res.status(404).json({ message: 'Página no encontrada.' });
  }
};