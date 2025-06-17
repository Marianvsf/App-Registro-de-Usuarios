import React, { useState } from 'react';
import '../../styles/registrationForm.css';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsSuccess(false);

    if (!formData.name) {
      setMessage('El campo Nombre y Apellido es obligatorio.');
      return;
    }
    if (!formData.email) {
      setMessage('Por favor, especifique un correo electrónico.');
      return;
    }
    if (!formData.password) {
      setMessage('Por favor, especifique su contraseña.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/registration_form', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.msg || 'Registro exitoso.');
        setIsSuccess(true);
        setFormData({
          name: '',
          lastName: '',
          email: '',
          password: '',
        });
      } else {
        setMessage(data.msg || 'Ocurrió un error al registrar el usuario.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMessage('Hubo un problema de conexión. Inténtalo de nuevo más tarde.');
      setIsSuccess(false);
    }
  };

  return (
    <div className="registration-container">
      <h2 className="registration-heading">Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Nombre y Apellido:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Apellido (Opcional):</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <button type="submit" className="form-button">Registrarse</button>
      </form>
      {message && (
        <p className={isSuccess ? 'success-message' : 'error-message'}>
          {message}
        </p>
      )}
    </div>
  );
}

export default RegistrationForm;
