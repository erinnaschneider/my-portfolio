// import photo from '../assets/about-me-photo.png';

function About() {
  // return JSX with my photo and short bio
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-container">
        <img src={photo} alt="Picture of Erinn Schneider"></img>
        <p>
          Hello! My name is Erinn Schneider, and I am a full stack developer based out of the RDU area of North Carolina. I specialize in the MERN tech stack.
          
          <br />
          <br />
          I'm an avid traveler that was lucky enough to spend 3 years teaching English in Tokyo, Japan. In my free time, I love to vegetable garden, read, and scream along to my favorite sports teams. It's always a good day to be a Tar Heel, and I am 100% Bills Mafia!

          I'm pleased to meet you!
          
        </p>
      </div>
    </section>
  )
}

export default About;