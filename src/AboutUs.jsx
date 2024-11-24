import React from 'react';

function AboutUs() {
  return (
    <div className="container my-5">
      <div className="row text-center mb-4">
        <div className="col">
          <h2>About Us</h2>
          <p>
            Welcome to Veg&Nonveg Hub! We are passionate about bringing you
            a variety of high-quality veg and non-veg items that cater to diverse tastes
            and preferences. Whether you’re a vegetarian, meat lover, or exploring
            both, we have something for everyone.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h4>Our Mission</h4>
              <p>
                Our mission is to deliver fresh, flavorful, and responsibly sourced ingredients
                to our customers. We believe in the power of choice and strive to provide a
                wide range of options for both veg and non-veg enthusiasts.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h4>Quality & Freshness</h4>
              <p>
                Quality and freshness are our top priorities. Each item is carefully selected
                and prepared to ensure the highest standards, providing you with meals that
                are not only delicious but also safe and healthy.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-3">
            <div className="card-body">
              <h4>Why Choose Us?</h4>
              <p>
                At Veg&Nonveg Hub, we go the extra mile to offer exceptional customer service,
                a wide selection, and convenient options for ordering and delivery. We are committed
                to making your culinary journey delightful and satisfying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
