import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer
    className="site-footer text-white py-5"
    style={{
      backgroundImage: "url('/e43777c2de88ee3bf00f7978929669c7.jpg')", // Path to your image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div> 
    <div className="container relative z-10">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <h4>TastyBud Kitchen</h4>
        </div>
        {/* Location Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <h6>Locations</h6>
          <ul className="list-unstyled">
            <li>
              <p>New York, USA</p>
              <a
                href="https://goo.gl/maps/wZVGLA7q64uC1s886"
                className="btn btn-light mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </li>
            <li>
              <p>Lagos, Nigeria</p>
              <a
                href="https://maps.app.goo.gl/3gMXRTNSDxBa67Tb9"
                className="btn btn-light mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </li>
            <li>
              <p>Abuja, Nigeria</p>
              <a
                href="https://maps.app.goo.gl/6yZgtaUaxR2aRgt49"
                className="btn btn-light mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </li>
            <li>
              <p>Berlin, Germany</p>
              <a
                href="https://maps.app.goo.gl/XcpFYQxSgQ67rxyD8"
                className="btn btn-light mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Google Maps
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Hours Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <h6>Opening Hours</h6>
          <p className="mb-2">Monday - Friday</p>
          <p>10:00 AM - 08:00 PM</p>
          <p>Tel: <a href="tel:010-02-0340">010-02-0340</a></p>
        </div>

        {/* Social Media Section */}
        <div className="col-lg-3 col-md-6 mb-4">
          <h6>Follow Us</h6>
          <ul className="social-icon list-unstyled flex space-x-4">
            <li>
              <a href="#" className="text-white text-xl">
                <FaFacebook className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-xl">
                <FaInstagram className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-xl">
                <FaTwitter className="h-6 w-6" />
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-xl">
                <FaYoutube className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Copyright Section */}
    <div className="text-center py-4 mt-4 bg-opacity-75 bg-black">
      <p className="mb-0">&copy; 2025 TastyBud Kitchen. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
