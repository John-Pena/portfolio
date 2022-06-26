import React from 'react';
import coverImage from '../../assets/cover/Lombard-Street.jpg'

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
      <div className="my-2">
        <p>
          
        </p>
      </div>
    </section>
  )
}

export default About;