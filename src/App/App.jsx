import { useState } from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { SearchBar } from '../components/SearchBar/SearchBar';

import '../App.scss';

import { TopicGrid } from '../components/TopicGrid/TopicGrid';

function App() {
  const [ topic, setTopic ] = useState(null);
  
  const onChangeTopic = topic => {
    setTopic(topic);
  }
  
  return (
    <section id = "page">
       <header>
          <ul>
              <SearchBar 
                  onChangeTopic = { onChangeTopic }
              />
          </ul>
      </header>
      <NavBar />
      <TopicGrid 
        topic = {topic}
      />

    </section>

    
  );
}

export default App;
