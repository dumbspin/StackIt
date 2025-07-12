import { useState } from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import AnswerCard from '../components/AnswerCard';
import styles from './QuestionDetail.module.css';

const mockQuestion = {
id: 1,
title: 'How to implement authentication in React?',
body: '<p>I’m trying to build a login system using JWT tokens. How should I structure the components and handle refresh tokens?</p>',
tags: ['react', 'auth', 'jwt'],
author: 'dev_user01',
votes: 12,
createdAt: '2025-07-10',
answers: [
{
id: 101,
body: '<p>You can use react-router for protected routes, and localStorage to store your access token. Refresh tokens should be handled with httpOnly cookies.</p>',
author: 'authmaster',
createdAt: '2025-07-11',
votes: 5,
},
],
};

export default function QuestionDetail() {
const { id } = useParams();
const [answer, setAnswer] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
console.log('Answer submitted:', answer);
setAnswer('');
};

return (
<div className={styles.container}>
<h1 className={styles.title}>{mockQuestion.title}</h1>
<div className={styles.meta}>
<span>{mockQuestion.votes} votes</span>
<span>Asked by {mockQuestion.author} on {mockQuestion.createdAt}</span>
</div>
<div
className={styles.body}
dangerouslySetInnerHTML={{ __html: mockQuestion.body }}
></div>

php-template
Copy
Edit
  <div className={styles.tags}>
    {mockQuestion.tags.map((tag) => (
      <span key={tag} className={styles.tag}>{tag}</span>
    ))}
  </div>

  <h2 className={styles.subheading}>Answers ({mockQuestion.answers.length})</h2>
  {mockQuestion.answers.map((ans) => (
    <AnswerCard key={ans.id} answer={ans} />
  ))}

  <form onSubmit={handleSubmit} className={styles.answerForm}>
    <h3 className={styles.subheading}>Your Answer</h3>
    <ReactQuill
      value={answer}
      onChange={setAnswer}
      className={styles.editor}
      theme="snow"
    />
    <button type="submit" className={styles.submitButton}>Post Answer</button>
  </form>
</div>
);
}
// top: add state
const [questionVotes, setQuestionVotes] = useState(mockQuestion.votes);
const [questionVoteStatus, setQuestionVoteStatus] = useState(null); // 'up' | 'down' | null

const handleQuestionVote = (type) => {
if (questionVoteStatus === type) {
setQuestionVoteStatus(null);
setQuestionVotes(prev => prev + (type === 'up' ? -1 : 1));
} else {
const delta = type === 'up' ? 1 : -1;
const undo = questionVoteStatus === 'up' ? -1 : questionVoteStatus === 'down' ? 1 : 0;
setQuestionVoteStatus(type);
setQuestionVotes(prev => prev + delta + undo);
}
};

Then inside return(), replace this part:

<div className={styles.meta}> <span>{mockQuestion.votes} votes</span> <span>Asked by {mockQuestion.author} on {mockQuestion.createdAt}</span> </div>
With this:

<div className={styles.meta}> <div className={styles.voteBox}> <button className={`${styles.voteBtn} ${questionVoteStatus === 'up' ? styles.active : ''}`} onClick={() => handleQuestionVote('up')} > ▲ </button> <span className={styles.voteCount}>{questionVotes}</span> <button className={`${styles.voteBtn} ${questionVoteStatus === 'down' ? styles.active : ''}`} onClick={() => handleQuestionVote('down')} > ▼ </button> </div> <span>Asked by {mockQuestion.author} on {mockQuestion.createdAt}</span> </div>
 