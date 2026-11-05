import Navbar from './Navbar';

function Header() {
  return (
    <header className="header" id="home">
      <Navbar />

      <div className="hero">
        <div className="hero-text">
          <span className="hero-tag">CREATE A STYLISH STORE</span>
          <h1>
            Look Stylish <br /> Be <span className="accent">Stylish.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt.
          </p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="hero-img">
          <img src="/01image.png" alt="Girl with yellow backpack" />
        </div>
      </div>
    </header>
  );
}

export default Header;