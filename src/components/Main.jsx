function Main() {
  return (
    <main>

      <section className="tabs-section">
        <div className="tabs">
          <button className="tab">Water Resistant</button>
          <button className="tab active">Charging System</button>
          <button className="tab">Artificial Leather</button>
          <button className="tab">Modern Clothes</button>
        </div>

        <div className="tab-cards">
          <div className="tab-card">
            <img src="/bag1.png" alt="bag" />
          </div>
          <div className="tab-card">
            <img src="/bag2.png" alt="bag" />
          </div>
          <div className="tab-card">
            <img src="/bag3.png" alt="bag" />
          </div>
          <div className="tab-card">
            <img src="/bag4.png" alt="bag" />
          </div>
        </div>
      </section>

      <section className="feature" id="about">
        <img className="feature-img" src="/bag5.png" alt="bags" />
        <div className="feature-text">
          <span className="hero-tag">CREATIVE BAG CREATOR 2.0</span>
          <h2>Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore.
          </p>
          <button className="buy-btn">Buy Now</button>
        </div>
      </section>

      <section className="products" id="products">
        <h2>Our Available Product</h2>
        <p className="products-sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="products-grid">
          <div className="product-card" style={{ backgroundColor: '#fde8ee' }}>
            <img src="/bag6.png" alt="product" />
          </div>
          <div className="product-card" style={{ backgroundColor: '#fde8e8' }}>
            <img src="/bag7.png" alt="product" />
          </div>
          <div className="product-card" style={{ backgroundColor: '#efe8fd' }}>
            <img src="/bag8.png" alt="product" />
          </div>
          <div className="product-card" style={{ backgroundColor: '#fde8f3' }}>
            <img src="/bagg8.png" alt="product" />
          </div>
          <div className="product-card" style={{ backgroundColor: '#e8eefd' }}>
            <img src="/bag9.png" alt="product" />
          </div>
          <div className="product-card" style={{ backgroundColor: '#fde8e8' }}>
            <img src="/bagg9.png" alt="product" />
          </div>
          <div className="product-card" style={{ backgroundColor: '#e8eefd' }}>
            <img src="/bag10.png" alt="product" />
          </div>
          <div className="product-card" style={{ backgroundColor: '#eefde8' }}>
            <img src="/bag11.png" alt="product" />
          </div>
        </div>

        <button className="more-btn">More Product →</button>
      </section>
      <section className="contact" id="contact">
        <div className="contact-img">
          <img src="/bag12.png" alt="bag" />
        </div>

        <div className="contact-form">
          <h3>Lorem Ipsum Dolor Sit Amet Adipiscing Elit.</h3>

          <div className="form-row">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone" />
          </div>

          <input type="text" placeholder="Address" className="full" />

          <p className="form-note">
            By clicking you agree to our terms and conditions.
          </p>

          <button className="buy-btn">Buy Now</button>
        </div>
      </section>

      <section className="brands">
        <span>SnowSurf</span>
        <span>Titleist</span>
        <span>TaylorMade</span>
        <span>snake</span>
      </section>
    </main>
  );
}

export default Main;