import './App.css';
import './Components/style.css';
import './Components/footer.css';
// import "./Components/sidebar.css";

import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import NavBar from './Components/NavBar';
import News from './Components/News';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
// import SearchBar from './Components/SearchBar';
// import Fazul from './Fazul';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from './Components/SearchBar';
// import TrendingTags from './Components/TrendingTags';

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  constructor() {
    super();
    const savedSourceId = localStorage.getItem('sourceId');
    const savedSearchQuery = localStorage.getItem('searchQuery');
    const savedSourceName = localStorage.getItem('sourceName');
    this.state = {
      findText: "",
      newsHeading: "Latest News",
      searchQuerySubmit: savedSearchQuery ? JSON.parse(savedSearchQuery) : "",
      trendingSourceId: savedSourceId ? JSON.parse(savedSourceId) : "",
      sourceName: savedSourceName ? JSON.parse(savedSourceName) : "",
      progress: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Save the state to localStorage whenever it changes
    if (prevState.trendingSourceId !== this.state.trendingSourceId) {
      localStorage.setItem('sourceId', JSON.stringify(this.state.trendingSourceId));
    }

    if (prevState.searchQuerySubmit !== this.state.searchQuerySubmit) {
      localStorage.setItem('searchQuery', JSON.stringify(this.state.searchQuerySubmit));
    }

    if (prevState.sourceName !== this.state.sourceName) {
      localStorage.setItem('sourceName', JSON.stringify(this.state.sourceName));
    }
  }

  handleSearchSubmit = (searchQuery) => {
    if (searchQuery) {
      this.setState({ searchQuerySubmit: searchQuery.trim() });
      // console.log(this.state.searchQuerySubmit)
    }
  };

  handleFind = (event) => {
    this.setState({ findText: event.target.value });
  };

  handleHeadingText = (newText) => {
    this.setState({ newsHeading: newText })
    document.title = `InfoHub - ${newText}`
  }

  setProgress = (value) => {
    this.setState({ progress: value })
  }

  capitalizer = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  handleTagText = (sourceId, sourceNameValue) => {
    // const tagText = this.capitalizer(sourceId)
    this.setState({ trendingSourceId: sourceId })
    this.setState({ sourceName: sourceNameValue })
    this.handleHeadingText(`News from "${sourceNameValue}"`)
    // console.log(tagText)
  }
  // name = "Sufyan";
  render() {
    const { findText, newsHeading, searchQuerySubmit, trendingSourceId, sourceName, } = this.state;
    return (
      <>
        <Router basename='/InfoHub'>
          <NavBar findText={findText} handleFind={this.handleFind} handleHeadingText={this.handleHeadingText} />
          {/* LoadingBar with NPM package ↓ */}
          <LoadingBar color='#f11946' progress={this.state.progress} />
          <div className="d-flex" id="wrapper">
            <Sidebar handleHeadingText={this.handleHeadingText} searchQuerySubmit={searchQuerySubmit} newsHeading={newsHeading} sourceName={sourceName} />

            <div className="container" id="page-content-wrapper">
              <SearchBar handleSearchSubmit={this.handleSearchSubmit} />

              {/* <News findText={findText} newsType="" /> */}
              {/* <Fazul /> */}
              {/* <TrendingTags/> */}
              <Routes>
                <Route exact path="/" element={
                  <News key="latest" setProgress={this.setProgress} newsHeading={newsHeading} apiKey={this.apiKey} findText={findText} newsType="news/latest" />
                } />
                <Route path={`/search/${searchQuerySubmit}`} element={
                  <News key={`search/${searchQuerySubmit}`} setProgress={this.setProgress} newsHeading={newsHeading} apiKey={this.apiKey} findText={findText} newsType={`search?q=${searchQuerySubmit}`} />
                } />
                <Route path={`/sources`} element={
                  <News key={`sources`} handleTagText={this.handleTagText} trendingSourceId={trendingSourceId} setProgress={this.setProgress} newsHeading={newsHeading} apiKey={this.apiKey} findText={findText} newsType={`sources`} />
                } />
                <Route path={`/news/source/${trendingSourceId}`} element={
                  <News key={`source/${trendingSourceId}`} trendingSourceId={trendingSourceId} setProgress={this.setProgress} newsHeading={newsHeading} apiKey={this.apiKey} findText={findText} newsType={`news/source/${trendingSourceId}`} />
                } />

              </Routes>

            </div>
          </div>


          {/* "This.name" use kr k hm name variable ko is me use kr skty he ↓ */}
          {/* <p>It's my name {this.name}</p> */}
          <Footer />
        </Router>
      </>
    )
  }
}
