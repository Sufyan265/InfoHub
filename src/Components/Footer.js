import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className="footer-content">
                        <h3>InfoHub - News</h3>
                        <p>Stay informed with our News app – your go-to source for breaking headlines and in-depth coverage. Download now for the latest updates on global events, tailored to your interests.</p>
                        <ul className="socials">
                            <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
                            <li><a href="/"><i className="fa fa-youtube"></i></a></li>
                            <li><a href="/"><i className="fa fa-linkedin-square"></i></a></li>
                        </ul>
                    </div>
                    <div className="footer-bottom">
                        <p>copyright &copy; <a href="/">InfoHub - News</a>  </p>
                        <div className="footer-menu">
                            <ul className="f-menu">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Contact</a></li>
                                <li><a href="/">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                </footer>
            </>
        )
    }
}

export default Footer
