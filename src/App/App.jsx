import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { NavBar } from '../components/NavBar/NavBar';
import { Header } from '../components/Header/Header';
import { CommentsPage } from '../components/CommentsPage/CommentsPage';
import { TopicPage } from '../components/TopicPage/TopicPage';
import '../App.scss';

export default function App() {
  
  return (
    <Router>
      <body>
        <Header />
        <NavBar />  
        <Routes>
          <Route path="/" element={<Navigate to={`/popular`} />} />
          <Route path="/:topic" element= {<TopicPage />}/>
          <Route path="/:subreddit/:id" element= {<CommentsPage />}/>
        </Routes>
      </body>
    </Router> 
  );
}
