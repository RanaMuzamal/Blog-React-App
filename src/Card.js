import React, { Component } from 'react'
import {Route,Link, Routes} from 'react-router-dom'

export default class Card extends Component {
    render() {
        return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                    <div className="card p-0 overflow-hidden h-100 shadow" >
                        <img src={this.props.img} className="card-img-top"  />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
        
                            <a className="btn btn-primary">Details</a>
                        
                            
                           
                        </div>
                    </div>
                </div>
        )
    }
}
