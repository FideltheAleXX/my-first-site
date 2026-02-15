const Hero = () => {
  return (
    <section id="home" className="md:pt-48">
      <div>
        <h1 className="hero-title">Hello, I'm Oleksandr Dzygansky</h1>
        <p>Front-end Developer</p>
        <p>I like to create beautiful and functional SPA</p>
        <p>with a focus on user-centered design and accessibility.</p>
      </div>
      <div>
        <img
          src="src/front-end-dev-photo.jpg"
          alt="Oleksandr Dzyhanskyi"
          className="image"
        />
      </div>
    </section>
  );
};

export default Hero;
