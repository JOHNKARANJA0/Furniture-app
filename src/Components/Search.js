import React, {useState, useEffect}from 'react'
import './Card.css'


export default function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [arts, setArts] = useState([]);

  const filteredArts = arts.filter((art) =>
    art.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  useEffect(() => {
    fetch("https://furniture-website-data.onrender.com/furniture")
      .then(response => response.json())
      .then(data => setArts(data))
      .catch(error => alert('Error fetching arts:', error));
  }, []);
  console.log(filteredArts)
  if (!arts.length) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search arts..."
      />
      <div className="art-card-container" >
      
      {filteredArts.map(art => (
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
    </div>
  );
}
