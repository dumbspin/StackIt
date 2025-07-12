import { useState } from 'react';
import ReactQuill from 'react-quill';
import styles from './AskQuestion.module.css';

export default function AskQuestion() {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [tagInput, setTagInput] = useState('');
const [tags, setTags] = useState([]);

const handleAddTag = () => {
const newTag = tagInput.trim();
if (newTag && !tags.includes(newTag)) {
setTags([...tags, newTag]);
}
setTagInput('');
};

const handleRemoveTag = (tagToRemove) => {
setTags(tags.filter(tag => tag !== tagToRemove));
};

const handleSubmit = (e) => {
e.preventDefault();
const questionData = { title, body, tags };
console.log("Submitted question:", questionData);
// TODO: Send to backend API
};

return (
<div className={styles.container}>
<h2 className={styles.heading}>Ask a Question</h2>
<form onSubmit={handleSubmit} className={styles.form}>
<label className={styles.label}>Title</label>
<input
type="text"
className={styles.input}
placeholder="What do you want to ask?"
value={title}
onChange={(e) => setTitle(e.target.value)}
required
/>

php-template
Copy
Edit
    <label className={styles.label}>Description</label>
    <ReactQuill
      value={body}
      onChange={setBody}
      className={styles.editor}
      theme="snow"
    />

    <label className={styles.label}>Tags</label>
    <div className={styles.tagInputWrapper}>
      <input
        type="text"
        className={styles.input}
        placeholder="Add a tag and press Enter"
        value={tagInput}
        onChange={(e) => setTagInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
      />
      <div className={styles.tagList}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>
            {tag}
            <button type="button" onClick={() => handleRemoveTag(tag)}>×</button>
          </span>
        ))}
      </div>
    </div>

    <button type="submit" className={styles.submitButton}>Submit Question</button>
  </form>
</div>
);
}