import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
// You can add these later
// import AskQuestion from '../features/questions/AskQuestion';
// import Login from '../features/auth/Login';

export default function AppRoutes() {
return (
<Routes>
<Route path="/" element={<Home />} />
{/* <Route path="/ask" element={<AskQuestion />} /> /}
{/ <Route path="/login" element={<Login />} /> */}
</Routes>
);
}
import AskQuestion from '../features/questions/AskQuestion';

<Route path="/ask" element={<AskQuestion />} />
import AuthPage from '../features/auth/AuthPage';

<Route path="/login" element={<AuthPage />} />

 import Explore from '../pages/Explore';

<Route path="/" element={<Explore />} />
<Route path="/questions/:id" element={<QuestionDetail />} />

 