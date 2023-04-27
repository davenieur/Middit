import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CommentsPage } from '../components/pages/CommentsPage/CommentsPage';
import { NavBar } from '../components/NavBar/NavBar';
import { TopicPage } from '../components/TopicPage/TopicPage';
import { Header } from '../components/Header/Header';
import { NotFound } from '../components/pages/NotFound/NotFound';
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
            <Route path="/">
              <Route path="notfound" element={<NotFound />}/>
              <Route path=":topic" element= {<TopicPage />}/>
              <Route path=":subreddit/:id" element= {<CommentsPage />}/>
            </Route>
        </Routes>
        
        
      </div>
    </Router>
  );
}
