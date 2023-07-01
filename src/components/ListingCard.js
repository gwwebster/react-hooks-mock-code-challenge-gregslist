import React, { useState } from "react";

function ListingCard({ listing, onDelete }) {

  const {id, description, image, location} = listing;
  const [liked, setLiked] = useState(false);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <span className="likeButton" onClick={() => setLiked(liked => !liked)}>
          {liked ? (
            <button className="emoji-button favorite active">★</button>
          ) : (
            <button className="emoji-button favorite">☆</button>
          )}
        </span>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => onDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
