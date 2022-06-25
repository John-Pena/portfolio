import React from 'react';

function Nav() {
  const categories = [
    {
      name: "Portfolio",
      description:
        "photo of my group projects that I did with my other classmates"
    },
    {
      name: "Resume",
      description: "the resume used describing all my skills"
    }
  ]

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return (
    <header>
      <h2>
        <a href="/">
        <span role="img" aria-label=""></span>John Pena
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About Me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className="mx-1"
              key={category.name}
            >
              <span onClick={categorySelected} >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;