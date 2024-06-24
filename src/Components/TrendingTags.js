import React, { Component } from 'react'
import ErrorHandling from './ErrorHandling';
import { Link } from 'react-router-dom';

export class TrendingTags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tagsResult: this.tagsData,
      // result: [],
      APIError: false,
      loading: false,
    }
    document.title = `InfoHub - ${props.newsHeading}`
  }
  // tagsData = [
  //   {
  //     "tag": "nvidia"
  //   },
  //   {
  //     "tag": "google"
  //   },
  //   {
  //     "tag": "trump"
  //   },
  //   {
  //     "tag": "donaldtrump"
  //   },
  //   {
  //     "tag": "federalreserve"
  //   },
  //   {
  //     "tag": "russian"
  //   },
  //   {
  //     "tag": "ukraine"
  //   },
  //   {
  //     "tag": "amazon"
  //   },
  //   {
  //     "tag": "amazon"
  //   },
  //   {
  //     "tag": "amazon"
  //   },
  //   {
  //     "tag": "amazon"
  //   },
  //   {
  //     "tag": "amazon"
  //   },
  //   {
  //     "tag": "amazon"
  //   },
  // ]

  // async componentDidMount() {
  //   const { newsType, setProgress } = await this.props;
  //   setProgress(0)
  //   const url = 'https://biztoc.p.rapidapi.com';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': this.props.apiKey,
  //       'X-RapidAPI-Host': 'biztoc.p.rapidapi.com'
  //     }
  //   };
  //   try {
  //     setProgress(10)
  //     this.setState({ loading: true })
  //     let response = await fetch(`${url}/${newsType}`, options);
  //     setProgress(30)
  //     if (!response.ok) {
  //       throw new Error(response.status)
  //     }
  //     let data = await response.json();
  //     setProgress(70)
  //     // console.log(data);
  //     await this.setState({ result: data, loading: false })
  //     setProgress(100)
  //   } catch (error) {
  //     this.setState({
  //       APIError: true,
  //       result: `${error}`,
  //       loading: false
  //     })
  //     setProgress(100)
  //     console.log(`There was a problem fetching the data: HTTP error! status: ${error}`)
  //   }
  // }

  render() {
    const { result, loading, APIError, } = this.state;
    const { findText, handleTagText, newsHeading } = this.props;
    // console.log(result)
    const filteredCards = result.filter((card) => card.tag.toLowerCase().startsWith(findText.toLowerCase().trim()));

    if (loading) {
      return <>
        <h2 className='heading-style mt-4'>{newsHeading}</h2>
        <div className="d-flex justify-content-center">
          <Link to={`/trending-tags/main`}><button type="button" className={`btn btn-primary rounded-pill mx-1`}>Main</button></Link>
          <Link to={`/trending-tags/media`}><button type="button" className={`btn btn-primary rounded-pill mx-1`}>Media</button></Link>
        </div>
        <div className="d-flex justify-content-center my-4">
          <div className="spinner-border" style={{ color: "#002f49" }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    } else if (APIError) {
      return (
        <>
          <ErrorHandling Error={result} />
        </>
      )
    }
    else {
      // const { selectedItem } = this.state;
      if (!result || result.length === 0 || Object.keys(result).length === 0) {
        // console.log("Empety array or object")
        return <ErrorHandling Error={result} />
      }
      return (
        <>
          <h2 className='heading-style mt-4'>{newsHeading}</h2>
          
          <div className="d-flex justify-content-center">
            <Link to={`/trending-tags/main`}><button type="button" className={`btn btn-primary rounded-pill mx-1`}>Main</button></Link>
            <Link to={`/trending-tags/media`}><button type="button" className={`btn btn-primary rounded-pill mx-1`}>Media</button></Link>
          </div>
          <div className="row">
            {filteredCards.map((element, index) => {
              return (
                <div key={index} className="col-lg-2 col-md-4 col-sm-4 alignCards">
                  <Link to={`/trending-tag/${element.id}`} className='linkStyle'>
                    <div onClick={() => handleTagText(element.id, element.title)} className="trendingTagStyle my-3">
                      {/* <span className="tooltip">Go to "{element.title}"</span> */}
                      <p>{element.title}</p>
                    </div>
                  </Link>
                </div>

              )
            })}
          </div>
        </>
      )
    }
  }
}

export default TrendingTags
