import { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //  lógica de inicio de sesión, como enviar los datos al servidor

        //  redirigir al usuario a otra página, 
        window.location.href = "/"; // Cambia esto según la ruta que desees
    };

    return (
        <div className='LoginAll'>
            <NavBar />
            <div className='Login'>
                <h6>Mail</h6>
                <input type='text' value={email} onChange={handleEmailChange} />
                <h6>Password</h6>
                <input type='password' value={password} onChange={handlePasswordChange} />
                <button type='submit' onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
}