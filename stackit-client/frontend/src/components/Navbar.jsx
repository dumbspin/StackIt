import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
return (
<nav className={styles.nav}>
<Link to="/" className={styles.logo}>
Stack<span className={styles.highlight}>It</span>
</Link>
<div className={styles.links}>
<Link to="/ask" className={styles.link}>Ask Question</Link>
<Link to="/login" className={styles.loginBtn}>Login</Link>
</div>
</nav>
);
}