import React, { useEffect, useState } from 'react';
import './Card.css'

function ArtCard() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    fetch("https://furniture-website-data.onrender.com/furniture")
      .then(response => response.json())
      .then(data => setArts(data))
      .catch(error => alert('Error fetching arts:', error));
  }, []);


  

  if (!arts.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="art-card-container" >
      {arts.map(art => (
        <div key={art.id} className="art-card">
          <div className="art-card-image">
            <img src ={art.img} alt={art.name} />
          </div>
          <div className="art-card-details">
            <h2>{art.name}</h2>
            <p>{art.Description}</p>
            <h4>Price: {art.price} KSH</h4>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ArtCard;