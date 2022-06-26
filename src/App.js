import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Section from './components/Section';

function App() {
  const [categories] = useState([
    {
      name: "Portfolio",
      description:
        "photos of applications I have created"
    },
    {
      name: "Resume",
      description: "the resume used describing all my skills"
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Section></Section>
        <About></About>
      </main>
    </div>
  );
}

export default App;
