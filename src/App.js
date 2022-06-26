import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Section from './components/Section';

function App() {
  
  return (
    <div>
      <Nav></Nav>
      <main>
        <Section></Section>
        <About></About>
      </main>
    </div>
  );
}

export default App;
