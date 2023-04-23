import { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { NavBar } from '../components/NavBar/NavBar';
import { TopicGrid } from '../components/TopicGrid/TopicGrid';
import { Header } from '../components/Header/Header';

import '../App.scss';

export default function App() {
  const [ topic, setTopic ] = useState('popular');

  const onChangeTopic = newTopic => {
    setTopic(newTopic);
  }
  
  return (
    <div id = "page">
      <Header 
        onChangeTopic = { onChangeTopic }
      />
      <NavBar 
        onChangeTopic = { onChangeTopic }
      />
      <TopicGrid 
        topic = {topic}
      />

    </div>

    
  );
}
