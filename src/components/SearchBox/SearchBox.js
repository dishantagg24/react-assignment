import React from "react"
import "./SearchBox.css"

export const SearchBox = ({ placeholder, handleChange }) => {
    return <div className="text-center">
        <input className="search" type="search" placeholder={placeholder} onChange={handleChange}></input>
    </div>
}
