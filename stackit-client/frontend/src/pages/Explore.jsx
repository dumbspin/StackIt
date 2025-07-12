import styles from './Explore.module.css';
import QuestionCard from '../components/QuestionCard';

const mockQuestions = [
{
id: 1,
title: 'How to implement authentication in React?',
body: 'I’m trying to build a login system using JWT tokens. How should I structure the components and handle refresh tokens?',
tags: ['react', 'auth', 'jwt'],
author: 'dev_user01',
votes: 12,
answers: 4,
createdAt: '2025-07-10',
},
{
id: 2,
title: 'Best way to style large React apps?',
body: 'I’ve been using styled-components, but I’m unsure if it scales well. Should I switch to Tailwind or CSS Modules?',
tags: ['css', 'react', 'tailwind'],
author: 'frontend_guru',
votes: 8,
answers: 3,
createdAt: '2025-07-09',
},
];

export default function Explore() {
return (
<div className={styles.container}>
<h1 className={styles.heading}>Explore Questions</h1>
<div className={styles.grid}>
{mockQuestions.map((question) => (
<QuestionCard key={question.id} question={question} />
))}
</div>
</div>
);
}