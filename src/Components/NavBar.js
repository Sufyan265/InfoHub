import React from 'react'
import logoImg from "./Images/ms-icon-310x310.png"
import { Link, useLocation } from 'react-router-dom';

const NavBar = (props) => {
    const { findText, handleFind } = props;
    const location = useLocation();

    // const handleClick = (value) => {
    //     setState({ activeClass: value });
    //     // console.log(change)
    // };

    const handleTrendingClick = () => {
        // handleClick("Trending-tags");
        props.handleHeadingText("Trending tags");
    };

    const handleHomeClick = () => {
        // handleClick("home");
        props.handleHeadingText("Latest News");
    };
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg" data-bs-theme="dark" style={{ backgroundColor: "#003049" }} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logoImg} alt="" width="30" height="30" className="d-inline-block align-text-top" style={{ marginRight: "3px" }} />
                        InfoHub
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => handleHomeClick()} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className={`nav-link ${location.pathname === '/about' ? 'active' : ''} disabled`} onClick={() => handleTrendingClick()} >About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle disabled`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorize
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className={`dropdown-item ${location.pathname === '/' ? 'active' : ''} disabled`} to="/" >Action</Link></li>
                                    <li><Link className={`dropdown-item ${location.pathname === '/' ? 'active' : ''} disabled`} to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className={`dropdown-item ${location.pathname === '/' ? 'active' : ''} disabled`} to="/">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to='/' className={`nav-link ${location.pathname === '/' ? 'active' : ''}} disabled`} aria-disabled="true">Contact</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className="form-group">
                                <input type="text" id="name" className="form-control findNews" value={findText} onChange={handleFind} required />
                                <label className="form-control-placeholder" htmlFor="name">Find news</label>
                            </div>

                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar