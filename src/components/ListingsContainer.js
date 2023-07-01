import React, { useState } from "react";
import ListingCard from "./ListingCard";
import Sorter from "./Sorter";

function ListingsContainer({ listings, onDelete, search }) {

  const [sort, setSort] = useState("");

  const filteredListings = listings
  .filter(listing => (
    listing.description.toLowerCase().includes(search)
  ))

  const listingsToDisplay = sort === "location" ? filteredListings.toSorted((a, b) => {
      const locationA = a.location.toLowerCase();
      const locationB = b.location.toLowerCase();
      if (locationA < locationB) return -1
      if (locationA > locationB) return 1
      return 0
    })
    : filteredListings


  

  return (
    <main>
      <Sorter onSortChange={(e) => setSort(e.target.value)} />
      <ul className="cards">
        {listingsToDisplay.map(listing => (
          <ListingCard key={listing.id} onDelete={onDelete} listing={listing} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
