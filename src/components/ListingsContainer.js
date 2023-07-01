import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete, search }) {

  const listingsToDisplay = listings
  .filter(listing => (
    listing.description.toLowerCase().includes(search)
  ))
  .map(listing => (
    <ListingCard key={listing.id} onDelete={onDelete} listing={listing} />
  ));

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
