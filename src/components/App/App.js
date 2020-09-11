import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Chat from '../Chat/Chat';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
