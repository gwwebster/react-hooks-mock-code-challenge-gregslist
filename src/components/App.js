import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewItem from "./NewItem";

function App() {

  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

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
    .then(setListings(listings.filter(listing => listing.id !== id)));
  }

  function handleNewListing(newListing) {
    setListings([...listings, newListing]);
  }

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer listings={listings} onDelete={handleDelete} search={search} />
      <NewItem onNewListing={handleNewListing} />
    </div>
  );
}

export default App;
