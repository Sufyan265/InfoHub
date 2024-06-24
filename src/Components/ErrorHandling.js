import React, { Component } from 'react'
import ErrorImg from "./Images/Error handling SVG.svg"
export class ErrorHandling extends Component {
    render() {
        let { Error } = this.props;
        return (
            <>
                <div className="statusBox mt-4">
                    <div className="imgBox">
                        <img src={ErrorImg} alt="Error" />
                        <p className="status">ERROR</p>
                    </div>
                    <div className="message">
                        <h4>{Error === "TypeError: Failed to fetch" ? "Check internet connection" : Error}</h4>
                        <p>{Error === "TypeError: Failed to fetch" ? "Sorry, it seems that your internet connection is not working." : "OOPS! - Page not found"}</p>
                        <p className='ErrorTip'>{Error === "TypeError: Failed to fetch" ? "Please check your internet connection and try again." : "Wait few minutes then try again:)"}</p>
                    </div>
                    <button type="button" onClick={() => window.location.reload()} className="btn btn-primary rounded-pill reloadBtn">Reload</button>
                </div>
            </>
        )
    }
}

export default ErrorHandling
