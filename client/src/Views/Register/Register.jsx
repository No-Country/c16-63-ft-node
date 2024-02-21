import { useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import './Register.css';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailError("El correo electrónico no es válido.");
            return;
        }

        // Validación de contraseña
        if (password.length < 8 || password.length > 20) {
            setPasswordError("La contraseña debe tener entre 8 y 20 caracteres.");
            return;
        }

        if (!(/[a-zA-Z]/.test(password) && /\d/.test(password))) {
            setPasswordError("La contraseña debe contener al menos una letra y un número.");
            return;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError("Las contraseñas no coinciden.");
            return;
        }

        // Si todas las validaciones pasan, puedes continuar con la redirección manualmente
        window.location.href = "/"; // Redirige a la página principal
    };

    return (
        <div className='RegisterAll'>
            <NavBar />
            <div className='Register'>
                <h6 className='GuideRegister'>Mail</h6>
                <input type='text' className='InputRegister' value={email} onChange={handleEmailChange} />
                {emailError && <span className="error">{emailError}</span>}
                <h6 className='GuideRegister'>Password</h6>
                <input type='password' className='InputRegister' value={password} onChange={handlePasswordChange} />
                {passwordError && <span className="error">{passwordError}</span>}
                <h6 className='GuideRegister'>Repeat Password</h6>
                <input type='password' className='InputRegister' value={confirmPassword} onChange={handleConfirmPasswordChange} />
                {confirmPasswordError && <span className="error">{confirmPasswordError}</span>}
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}