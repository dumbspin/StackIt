import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import styles from './AuthPage.module.css';

export default function AuthPage() {
const [isLogin, setIsLogin] = useState(true);

return (
<div className={styles.container}>
<div className={styles.card}>
<div className={styles.tabs}>
<button
onClick={() => setIsLogin(true)}
className={${styles.tab} ${isLogin ? styles.active : ''}}
>
Login
</button>
<button
onClick={() => setIsLogin(false)}
className={${styles.tab} ${!isLogin ? styles.active : ''}}
>
Sign Up
</button>
</div>
{isLogin ? <LoginForm /> : <SignupForm />}
</div>
</div>
);
}