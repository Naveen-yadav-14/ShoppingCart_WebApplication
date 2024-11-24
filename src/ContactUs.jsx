import React from 'react';

function ContactUs() {
  return (
    <div className="container my-5 p-4 border rounded shadow">
      <div className="row text-center mb-4">
        <div className="col">
          <h2 className="display-4 text-primary">Contact Us</h2>
          <p className="lead text-muted">
            Have questions or need assistance? Feel free to reach out! Our team is here to help.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h4 className="h3 text-dark">Contact Information</h4>
          <p className="h5 mb-3"><strong>Address:</strong> 123 Veg&Nonveg Hub Street, Food City, FC 12345</p>
          <p className="h5 mb-3"><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p className="h5 mb-3"><strong>Email:</strong> support@vegandnonveghub.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
