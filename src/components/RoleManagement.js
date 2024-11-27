import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RoleManagement = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => {
        // Fetch roles from the API (replace with your API endpoint)
        axios.get('/api/roles')
            .then(response => setRoles(response.data))
            .catch(error => console.error('Error fetching roles:', error));
    }, []);

    return (
        <div>
            <h2>Role Management</h2>
            <table>
                <thead>
                    <tr>
                        <th>Role</th>
                        <th>Permissions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {roles.map(role => (
                        <tr key={role.id}>
                            <td>{role.name}</td>
                            <td>{role.permissions.join(', ')}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button>Add Role</button>
        </div>
    );
};

export default RoleManagement;
