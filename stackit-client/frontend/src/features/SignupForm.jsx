import { useState } from 'react';
import styles from './AuthForm.module.css';

export default function SignupForm() {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSignup = (e) => {
e.preventDefault();
console.log('Signing up with:', { username, email, password });
// TODO: Connect to backend API
};

return (
<form onSubmit={handleSignup} className={styles.form}>
<input
type="text"
placeholder="Username"
className={styles.input}
value={username}
onChange={(e) => setUsername(e.target.value)}
required
/>
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
<button type="submit" className={styles.button}>Sign Up</button>
</form>
);
}