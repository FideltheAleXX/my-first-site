const Menu = () => {
  return (
    <div className="navigation">
      <div className="title-name">
        <a href="index.html" className="menu-link">
          Oleksandr Dzygansky
        </a>
      </div>

      {/* Desktop menu */}
      <div className="menu">
        <div className="nav-link active">
          <a href="#home" className="menu-link">
            Home
          </a>
        </div>

        <div className="nav-link active">
          <a href="#about" className="menu-link">
            About
          </a>
        </div>

        <div className="nav-link active">
          <a href="#projects" className="menu-link">
            Projects
          </a>
        </div>

        <div className="nav-link active">
          <a href="#achievements" className="menu-link">
            Achievements
          </a>
        </div>

        <div className="nav-link active">
          <a href="#contact" className="menu-link">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
