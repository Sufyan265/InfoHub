import React, { Component } from 'react'
import loadingImg from "./Images/Loading-image.png"

export class Placeholder extends Component {
    render() {
        let cardStyle = {
            width: "20rem",
        }
        return (
            <>
                <div className="card mt-4 mb-4" style={cardStyle} aria-hidden="true">
                    <img src={loadingImg} className="card-img-top placeholderImg" alt="Loading..." />
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                        <button className="btn btn-primary disabled placeholder col-6" style={{backgroundColor: "#003049"}}></button>
                    </div>
                </div>
            </>
        )
    }
}

export default Placeholder
