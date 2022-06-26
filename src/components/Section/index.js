import React from 'react';
import photo from '../../assets/small/projects/InsertDisc.png'

function Section (props) {
  const currentCategory = {
    name: "Portfolio",
    description: 
      "photos of applications I have created"
  };

  return(
    <section>
      <h1>{currentCategory.name}</h1>
      <p>{currentCategory.name}</p>
      <div className="flex-row">
        <img
          src={photo}
          alt="InsertDisc"
          className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}

export default Section;