import React, { useState } from "react";

function NewItem({ onNewListing }) {

    const [formData, setFormData] = useState({
        description: "",
        image: "",
        location: "",
    });

    function handleChange(e) {
        const key = e.target.id
        setFormData({
            ...formData,
            [key]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r => r.json())
        .then(newListing => onNewListing(newListing))
        setFormData({
            description: "",
            image: "",
            location: "",
        })
    }
 
    return (
        <div className="item-form" style={{textAlign: "center"}}>
            <h2>New Item Form</h2><br />
            <p>List a free item below!</p><br />
            <form onSubmit={handleSubmit}>
                <label htmlFor="description"></label>
                    <input 
                        type="text"
                        id="description"
                        placeholder="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                <label htmlFor="image"></label>
                    <input 
                        type="text"
                        id="image"
                        placeholder="image"
                        value={formData.image}
                        onChange={handleChange}
                    />
                <label htmlFor="location"></label>
                    <input 
                        type="text"
                        id="location"
                        placeholder="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                  <br /><br />
                  <button type="submit">Add Listing</button>  
            </form>
            <br />
        </div>
    );
}

export default NewItem;