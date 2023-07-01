import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [searchText, setSearchText] = useState("");


  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setListings(data));
  }, [])

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(r => r.json())
    .then(setListings(listings.filter(listing => listing.id !== id)))
  }

  // function handleSearch(searchText) {
  //   setListings(listings.filter(listing => listing.description.toLowerCase().includes(searchText)))
  // }

  return (
    <div className="app">
      <Header onSearch={setSearchText} searchText={searchText} />
      <ListingsContainer listings={listings} onDelete={handleDelete} searchText={searchText} />
    </div>
  );
}

export default App;
