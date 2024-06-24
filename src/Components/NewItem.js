import React, { Component } from 'react'

export class NewItem extends Component {
  render() {
    // Class base components me "props" use krny ka treeka ↓ 
    let { title, description, newsUrl, imgUrl, faviconUrl, domain, createdDate } = this.props;
    let cardStyle = {
      width: "20rem",
    }
    return (
      <>
        <div id='newsItems' className="card m-2" style={cardStyle}>
          <div className="faviconImg">
            <a href={`https://www.${domain}`} target='_blank' rel="noreferrer">
              <img src={faviconUrl} alt="" />
            </a>
          </div>
          <img src={imgUrl} className="card-img-top" alt="loading..." />
          <div className="card-body">
           <p className='card-date'>— {createdDate}</p>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target='_blank' rel="noopener noreferrer" style={{backgroundColor: "#003049", color: "white"}} className="btn">Read more</a>
          </div>
        </div>
      </>
    )
  }
}

export default NewItem
