import styles from './Home.module.css';

export default function Home() {
return (
<div className={styles.container}>
<h1 className={styles.heading}>Top Questions</h1>
<p className={styles.subtext}>Explore trending developer queries from the community.</p>
</div>
);
}