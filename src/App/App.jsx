import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CommentsPage } from '../components/CommentsPage/CommentsPage';
import { NavBar } from '../components/NavBar/NavBar';
import { TopicPage } from '../components/TopicPage/TopicPage';
import { Header } from '../components/Header/Header';
import { NotFound } from '../components/NotFound/NotFound';
import '../App.scss';

export default function App() {
  const [ topic, setTopic ] = useState('popular');

  const onChangeTopic = newTopic => {
    setTopic(newTopic);
  }
  
  return (
    <Router>
      <div id = "page">
        <Header 
          onChangeTopic = { onChangeTopic }
        />
        <NavBar 
          onChangeTopic = { onChangeTopic }
        />

        <Routes>
            
            <Route 
              path="/:subreddit/:id"
              element= {<CommentsPage />}
            />

            <Route 
              path="/:topic" 
              element= {<TopicPage />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />
        </Routes>
        
        
      </div>
    </Router>
  );
}
