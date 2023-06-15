import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.status === 200) {
      setName("");
      setEmail("");
      setMessage("");
      setStatus("¡Mensaje enviado correctamente!");
    } else {
      setStatus("¡Error al enviar el mensaje! Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center my-4">Contacto</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="form-group">
          <label htmlFor="name">
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-control"
            id="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-control"
            id="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="form-control"
            id="message"
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary w-100 w-md-25 d-block mt-3">
          Enviar
        </button>
      </form>
      <p>{status}</p>
    </div>
  );
}
