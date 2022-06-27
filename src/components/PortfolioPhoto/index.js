import React, { useState } from 'react';
import Modal from '../Modal';

function PortfolioPhoto({ category }) {
  const [photos] = useState([
    {
      name: "InsertDisc",
      category: "Portfolio",
      description: "",
    },
    {
      name: "Star Wars Weekly Scheduler",
      category: "Portfolio",
      description: "",
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const toggleModal = (image, i) => {
    
  }

  return(
    <div>
      <Modal />
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioPhoto;