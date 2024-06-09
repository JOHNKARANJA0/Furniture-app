import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ContactForm from "./ContactForm"
import ImageCarousel from "./imageCurosel";

export default function About() {
    const [eachimage, setimage] = useState('')
    useEffect(()=> {
      fetch('https://furniture-website-data.onrender.com/furniture')
      .then(response => response.json())
      .then(data => setimage(data.map((each) => each['img'])))
    }, [])
    
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div>
          <div>
            <h2>Company Name: LANDO FURNITURE</h2>
            <h2>Established: @2024</h2>
            <h2>Location: Kahawa Sukari, Kiambu</h2>
            <h3>Our Mission</h3>
            <p>
            At LANDO FURNITURE, we are dedicated to providing high-quality, stylish, and sustainable furniture solutions that enhance the beauty and functionality of every home. Our mission is to inspire creativity, comfort, and sustainability through innovative design and exceptional craftsmanship.
            </p>
            <h3>Our Products</h3>
            <p>
            Explore our exquisite collection of furniture designed to elevate your living spaces:
            </p>
            <ul>
              <li>Living Room Furniture</li>
              <li>Dining Room Furniture</li>
              <li>Bedroom Furniture</li>
              <li>Home Office Furniture</li>
              <li>Outdoor Furniture</li> 
            </ul>
            <ImageCarousel images={eachimage}/>
          </div>
        </div>
        <ContactForm/>
      </main>
    </>
  );
}
