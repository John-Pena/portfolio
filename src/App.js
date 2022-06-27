import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Section from './components/Section';
import ContactForm from './components/Contact';

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

  const [contactSelected, setContactSelected] = useState(false);
  
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Section currentCategory={currentCategory}></Section>
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
