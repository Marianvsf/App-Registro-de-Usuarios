import React, { useEffect, useState } from 'react';
import '../../styles/userList.css'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function UsersList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${BACKEND_URL}/users`)
            .then(res => res.json())
            .then(data => { 
                setUsers(data.users);
                setLoading(false);
            })
            .catch(err => {
                setError('Error al cargar los usuarios');
                setLoading(false);
            });
    }, []);

    return (
    <div className="container container-fluid">
        <div className= 'containerh2 ms-5 fixed-top'>
        <h2>Usuarios Registrados</h2>
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {loading ? (
            <div className="d-flex justify-content-center my-4">
                <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        ) : (
            users.length > 0 ? (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre y Apellido</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.name} {user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div>No hay usuarios registrados.</div>
            )
        )}
    </div>
);
}

export default UsersList;