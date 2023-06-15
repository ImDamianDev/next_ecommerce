import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "config/db";
import { getUserByEmail, createUser } from "services/userService";

// Establecer la conexión con la base de datos
dbConnect();

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      if (session && session.user && session.user.email) {
        const email = session.user.email;
        try {
          // Obtener el usuario por correo electrónico
          let fetchedUser = await getUserByEmail(email);
          if (!fetchedUser) {
            // Si el usuario no existe, crearlo
            fetchedUser = await createUser({ email });
          }
          // Agregar el userId al objeto de sesión
          session.user.id = fetchedUser._id.toString();
        } catch (error) {
          // Manejar el error de manera adecuada, como mostrar un mensaje de error o realizar acciones alternativas
          console.error("Failed to fetch user by email:", error);
        }
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
