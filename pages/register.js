import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import styles from 'styles/RegisterPage.module.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  if (status === 'authenticated') {
    router.push('/');
    return null;
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      // Verificar que las contraseñas coincidan
      if (password !== confirmPassword) {
        toast.error('Las contraseñas no coinciden');
        return;
      }

      // Verificar longitud mínima de contraseña
      if (password.length < 8) {
        toast.error('La contraseña debe tener al menos 8 caracteres');
        return;
      }

      // Verificar formato de correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        toast.error('El correo electrónico no tiene un formato válido');
        return;
      }

      // Enviar los datos de registro al servidor
      const response = await axios.post('/api/register', {
        username,
        email,
        password,
      });

      // Restablecer los campos del formulario
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      console.log('Registro exitoso:', response.data);
      // Redirigir al usuario a la página de inicio de sesión u otra página deseada
      router.push('/login');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Registro de Usuario</h1>
      <form onSubmit={handleRegister} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label>Confirmar Contraseña:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;