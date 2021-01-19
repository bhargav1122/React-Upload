import React, { Component } from 'react'

export default class TopFilter extends Component {
    render() {
        return (
            <div className="top-filter">
                <div className='filter-results'>{this.props.count} Product(s) found</div>
                <div className='filter-sort'>{" "}Order by{" "} 
                <select value={this.props.sort} onChange={this.props.sortProducts}>
                <option value="">Latest</option>
                    <option value="lowest">Lowest to highest</option>
                    <option value="highest">Highest to lowest</option>
                </select></div>
            </div>
        )
    }
}
 