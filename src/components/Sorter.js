import React from "react";

function Sorter({ onSortChange }) {

    return (
        <div className="Sorter">
            <label>Sort By: </label>
            <select onChange={onSortChange}>
                <option value="no-sort">No Sort</option>
                <option value="location">Location</option>
            </select>
        </div>
    );
}
export default Sorter;