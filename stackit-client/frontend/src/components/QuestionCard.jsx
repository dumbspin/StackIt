import styles from './QuestionCard.module.css';
import { Link } from 'react-router-dom';

export default function QuestionCard({ question }) {
const { id, title, body, tags, author, votes, answers, createdAt } = question;

return (
<div className={styles.card}>
<div className={styles.meta}>
<span>{votes} votes</span>
<span>{answers} answers</span>
</div>

php-template
Copy
Edit
  <div className={styles.content}>
    <Link to={`/questions/${id}`} className={styles.title}>
      {title}
    </Link>
    <p className={styles.excerpt}>
      {body.length > 140 ? body.slice(0, 140) + '...' : body}
    </p>
    <div className={styles.footer}>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className={styles.author}>
        by <strong>{author}</strong> on {createdAt}
      </div>
    </div>
  </div>
</div>
);
}