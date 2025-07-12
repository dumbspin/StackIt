import styles from './AnswerCard.module.css';

export default function AnswerCard({ answer }) {
const { body, author, createdAt, votes } = answer;

return (
<div className={styles.card}>
<div className={styles.votes}>{votes} votes</div>
<div className={styles.body} dangerouslySetInnerHTML={{ __html: body }}></div>
<div className={styles.meta}>
Answered by <strong>{author}</strong> on {createdAt}
</div>
</div>
);
}
import { useState } from 'react';
import styles from './AnswerCard.module.css';

export default function AnswerCard({ answer }) {
const { body, author, createdAt, votes } = answer;

const [voteCount, setVoteCount] = useState(votes);
const [voteStatus, setVoteStatus] = useState(null);

const handleVote = (type) => {
if (voteStatus === type) {
setVoteStatus(null);
setVoteCount(prev => prev + (type === 'up' ? -1 : 1));
} else {
const delta = type === 'up' ? 1 : -1;
const undo = voteStatus === 'up' ? -1 : voteStatus === 'down' ? 1 : 0;
setVoteStatus(type);
setVoteCount(prev => prev + delta + undo);
}
};

return (
<div className={styles.card}>
<div className={styles.voteBox}>
<button
className={${styles.voteBtn} ${voteStatus === 'up' ? styles.active : ''}}
onClick={() => handleVote('up')}
>
▲
</button>
<span className={styles.voteCount}>{voteCount}</span>
<button
className={${styles.voteBtn} ${voteStatus === 'down' ? styles.active : ''}}
onClick={() => handleVote('down')}
>
▼
</button>
</div>

php-template
Copy
Edit
  <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }}></div>
  <div className={styles.meta}>
    Answered by <strong>{author}</strong> on {createdAt}
  </div>
</div>
);
}