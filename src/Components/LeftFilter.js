import React,{useState} from 'react'

export default function LeftFilter(props) {
    
   
    return (

        <>
            <div style={{margin:"1rem"}}>Sizes: </div>
            <div className="sizes-container">
                
                {props.filterSizes.map((size) => {
                    return (
                        <div className="size-checkbox">
                        <label>
                            <input type="checkbox" value={size} onClick={() => {props.onClickfiltersize(size)}} 
                            checked={props.filtersChecked.includes(size) ? "true" : ""}/>
                            <span > {size}</span>
                        </label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
