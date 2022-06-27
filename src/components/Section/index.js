import React from 'react';
import PortfolioPhoto from '../PortfolioPhoto';

function Section ({ currentCategory }) {
  const { name, description } = currentCategory;

  return(
    <section>
      <h1 data-testid="h1tag">{name}</h1>
      <p>{description}</p>
      <PortfolioPhoto category={currentCategory.name} />
    </section>
  );
}

export default Section;