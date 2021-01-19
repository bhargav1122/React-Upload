import React from 'react'

export default function LeftFilter(props) {
    return (
        <>
            <div className="left-filter">
                <div className="filter-size">
                    {" "}Sizes:{" "}
                    <select value={props.size} onChange={props.filterProducts}>
                        <option value=""> All</option>
                        <option value="XS"> XS</option>
                        <option value="S"> S</option>
                        <option value="M"> M</option>
                        <option value="L"> L</option>
                        <option value="XL"> XL</option>
                        <option value="XXL"> XXL</option>
                    </select>
                </div>
            </div>
            
        </>
    )
}
