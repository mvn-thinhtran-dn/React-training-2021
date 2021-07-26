import React from 'react';
// import HeroBanner from '../../../components/HeroBanner';

const AboutUs = () => {
  const prods = [1,2,3,4,5,6,7,8];
  return (
    <>
        {/* <HeroBanner/> */}
        <section className="section-product">
          <div className="container">
            <h2>About Us</h2>
            <ul className="product-list row">
              {
                prods.map(e => (
                  <li className="product-item col-medium-3">
                  <a className="product-img" href="/">
                    <img src="https://picsum.photos/seed/picsum/300/300" alt="img" />
                  </a>
                  <h4 className="product-name">product {e}</h4>
                  <p className="product-desc">Lorgedasdasdsadsad</p>
                  <button className="product-action">Add to cart</button>
                </li>
                ))
              }
            </ul>
          </div>
        </section>
    </>
  );
};

export default AboutUs;