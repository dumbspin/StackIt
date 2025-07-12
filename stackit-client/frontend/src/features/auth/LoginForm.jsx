import { useState } from 'react';
import styles from './AuthForm.module.css';

export default function LoginForm() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleLogin = (e) => {
e.preventDefault();
console.log('Logging in with:', { email, password });
// TODO: Connect to backend API
};

return (
<form onSubmit={handleLogin} className={styles.form}>
<input
type="email"
placeholder="Email"
className={styles.input}
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<input
type="password"
placeholder="Password"
className={styles.input}
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
<button type="submit" className={styles.button}>Login</button>
</form>
);
}