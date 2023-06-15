import { signIn } from 'next-auth/react';

import styles from '@/styles/login/loginForm.module.css';

const LoginForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    signIn('credentials', {
      redirect: false,
      email: email.value,
      password: password.value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Correo electrónico
        </label>
        <input type="email" className="form-control" id="email" name="email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input type="password" className="form-control" id="password" name="password" required />
      </div>
      <button type="submit" className={`btn w-100 ${styles.button}`}>
        Iniciar sesión
      </button>
    </form>
  );
};

export default LoginForm;
