import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            activeClass: "",
            searchQuery: "",
        }
    }
    handleSearchValue = (event) => {
        this.setState({ searchQuery: event.target.value });
    };

    // handleSubmit = (e, searchQuery) => {
    //     if (e.key === 'Enter' || e.type === 'click') {
    //         // e.preventDefault();
    //         this.props.handleSearchSubmit(searchQuery)
    //     }
    // };


    componentDidMount() {
        const handleClass = () => {
            if (window.innerWidth < 768) {
                this.setState({ activeClass: "" });
            }
            else {
                this.setState({ activeClass: "active" });
            }
            // window.innerWidth < 768 ? this.setState({ activeClass: "" }) : this.setState({ activeClass: "active" });
        }
        window.addEventListener("resize", handleClass)
        window.addEventListener("load", handleClass)
    }
    render() {
        const { searchQuery } = this.state;
        const { handleSearchSubmit } = this.props;
        const handleSubmit = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        };
        return (
            <>
                <div className="searchBar-section">
                    <svg id="sidebarToggle" className={`ham hamRotate ham1 ${this.state.activeClass}`} viewBox="0 0 100 100" width="60" onClick={() => document.querySelector('.ham').classList.toggle('active')}>
                        <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                        <path className="line middle" d="m 30,50 h 40" />
                        <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                    </svg>

                    <div className="searchBar">
                        <form action="">
                            <div className="p-1 bgStyle rounded rounded-pill shadow-sm mt-2">
                                <div className="input-group">
                                    <input value={searchQuery} onChange={this.handleSearchValue} onKeyDown={handleSubmit} type="search" id='searchInput' className="form-control rounded-pill border-0 bgStyle" placeholder="What're you searching for?" aria-describedby="button-addon1" />
                                    <div className="input-group-append">
                                        {searchQuery ? (
                                            <Link to={`/search/${searchQuery}`}>
                                                <button onClick={() => handleSearchSubmit(searchQuery)} id="button-addon1" type="button" className="btn text-primary"><i className="fa fa-search"></i></button>
                                            </Link>

                                        ) : (
                                            <button id="button-addon1" type="button" className="btn text-primary" disabled><i className="fa fa-search"></i></button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>

            </>
        )
    }
}

export default SearchBar
