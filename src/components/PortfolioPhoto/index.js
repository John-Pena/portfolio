import React, { useState } from 'react';

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

  return(
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}

export default PortfolioPhoto;