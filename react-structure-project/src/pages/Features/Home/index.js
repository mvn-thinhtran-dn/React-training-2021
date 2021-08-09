import React, { useState, useEffect } from 'react';
import {FaHeart} from 'react-icons/fa'
import HeroBanner from '../../../components/HeroBanner'
import { useDispatch } from 'react-redux'
import {toggle} from '../../../store/favSlice'

const Home = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://reqres.in/api/products`).then(e => e.json())
    .then(
      e => {
        setProducts(e.data)
      }
    )
  }, []);

  const changeColorHeart = (e, id) => {
    e.preventDefault();
    const newProds = products.map(e => {
      if(e.id === id) {
        e.favs = !e.favs;
      }
      return e
    })
    console.log(e.favs);
    setProducts(newProds);
    dispatch(toggle(id));
  }

  return (
    <>
        <HeroBanner/>
        <section className="section-product">
          <div className="container">
            <h2>Product Lastest</h2>
            <ul className="product-list row">
              {
                products.map(e => (
                  <li className="product-item col-medium-3" key={e.id}>
                    <a className="product-img" href="/">
                      <img src="https://picsum.photos/seed/picsum/300/300" alt="img" />
                      <span className={`heart-icon ${e.favs ? 'active' : ''}`} onClick={(event) => changeColorHeart(event, e.id)}><FaHeart /></span>
                    </a>
                    <h4 className="product-name">{e.name}</h4>
                    <p className="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna</p>
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

export default Home;