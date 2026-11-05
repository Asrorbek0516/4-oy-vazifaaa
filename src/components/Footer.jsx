function Footer() {
  return (
    <footer className="footer">
      <div className="footer-col">
        <div className="logo">Bag.</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor.
        </p>
      </div>
      <div className="footer-col">
        <h4>Special Categories</h4>
        <ul>
          <li><a href="#products">Water Resistant</a></li>
          <li><a href="#products">Charging System</a></li>
          <li><a href="#products">Artificial Leather</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Contact Us</h4>
        <ul>
          <li>+998 90 123 45 67</li>
          <li>bag@example.com</li>
          <li>www.bagstore.uz</li>
        </ul>
      </div>
      
      <div className="footer-col">
        <h4>News Letter</h4>
        <input type="email" placeholder="Email address" />
        <button className="buy-btn">Subscribe</button>
      </div>
    </footer>
  );
}

export default Footer;