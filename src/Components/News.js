import React, { Component } from 'react'
import PropTypes from 'prop-types';
import faviconImg from "./Images/8815177.png"
import alternativeImgUrl from "./Images/Alternative Image.jpg"
import noResultImgUrl from "./Images/No results found.png"
import ErrorHandling from './ErrorHandling';

import NewItem from './NewItem'
import Carousel from './Carousel'
import Placeholder from './Placeholder';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export class News extends Component {
  static defaultProps = {
    newsType: "",
  }

  static propTypes = {
    newsType: PropTypes.string,
  }
  // constructor() sb sy pahly run hoga (without call) ↓ 
  constructor(props) {
    super(props);
    this.state = {
      // result: this.results,
      // result: this.tagsData,
      result: [],
      // tagsResult: this.tagsData,
      APIError: false,
      loading: false,
      currentPage: 1,
    }
    // this.props.handleApiResults(this.state.result, this.state.loading, this.state.APIError);
    // console.log(this.state.result);
  }
  results = [
    {
      "body": "Social Security Payment June 2024: When Is Your Money Coming?\nThe last Social Security check for June is going out in a few days. Here's when to expect it.\nKatie TeagueWriter II\nKatie is a writer covering all things how-to at CNET, with a focus on Social Security and notable events. When she's not\u2026",
      "domain": "cnet.com",
      "img": {
        "s": "https://cdn.biztoc.com/ad28e1d913f73bf6_s.webp",
        "sq": "https://cdn.biztoc.com/ad28e1d913f73bf6_sq.webp"
      },
      "published": "Sun, 23 Jun 2024 07:38:34 GMT",
      "title": "Social Security Payment June 2024: When Is Your Money Coming?",
      "uid": "ad28e1d913f73bf6",
      "url": "https://www.cnet.com/personal-finance/social-security-payment-june-2024-when-is-your-money-coming/?ref=biztoc.com"
    },
    {
      "body": "The Federal Reserve may cut interest rates in July to prevent a recession.\nWeakening labor- and housing-market data top the list of concerns over tight financial conditions.\nMarkets are only pricing in a 10% chance of an interest-rate cut in July, per CME FedWatch Tool.\nMarkets may think it's a\u2026",
      "domain": "finance.yahoo.com",
      "img": {
        "s": "https://cdn.biztoc.com/d0f1135859cc532f_s.webp",
        "sq": "https://cdn.biztoc.com/d0f1135859cc532f_sq.webp"
      },
      "published": "Sun, 23 Jun 2024 07:38:27 GMT",
      "title": "The Fed's first rate cut of 2024 could come next month if the labor market slows",
      "uid": "d0f1135859cc532f",
      "url": "https://finance.yahoo.com/news/feds-first-rate-cut-could-232005372.html?ref=biztoc.com"
    },
    {
      "body": "This layering of vegetables, torn pitta, pomegranate seeds and yoghurt is inspired by the Middle Eastern dish fatteh, said Mark Diacono. You can use shop-bought crispy onions, but to make your own, thinly slice a couple of onions, dredge them in a little cornflour (corn starch) and deep-fry for\u2026",
      "domain": "theweek.com",
      "img": {
        "s": "https://cdn.biztoc.com/327d080f3e400f1d_s.webp",
        "sq": "https://cdn.biztoc.com/327d080f3e400f1d_sq.webp"
      },
      "published": "Sun, 23 Jun 2024 07:30:26 GMT",
      "title": "Freekeh with squash, beetroot and pomegranate recipe",
      "uid": "327d080f3e400f1d",
      "url": "https://theweek.com/culture-life/food-drink/freekeh-with-squash-beetroot-and-pomegranate-recipe?ref=biztoc.com"
    },
    {
      "body": "The English village of Holmes Chapel has begun offering pop pilgrims walking tours that cover the early years of its most famous son.",
      "domain": "nbcnews.com",
      "img": {
        "s": "https://cdn.biztoc.com/436d984d70234815_s.webp",
        "sq": "https://cdn.biztoc.com/436d984d70234815_sq.webp"
      },
      "published": "Sun, 23 Jun 2024 07:30:02 GMT",
      "title": "As he was: Harry Styles superfans flock to his tiny hometown's walking tour",
      "uid": "436d984d70234815",
      "url": "https://www.nbcnews.com/news/world/harry-styles-superfans-flock-hometowns-walking-tour-rcna157998?ref=biztoc.com"
    },
    {
      "body": "Gallup found that having best friends at work leads to increased employee engagement and job success (as well as better business outcomes).",
      "domain": "inc.com",
      "img": {
        "s": "https://cdn.biztoc.com/7aeac8ac52ce6eda_s.webp",
        "sq": "https://cdn.biztoc.com/7aeac8ac52ce6eda_sq.webp"
      },
      "published": "Sun, 23 Jun 2024 07:29:00 GMT",
      "title": "Hate Your Job? Here Are 5 Ways to Fall Back in Love With It",
      "uid": "7aeac8ac52ce6eda",
      "url": "https://www.inc.com/peter-economy/hate-your-job-fall-in-love.html?ref=biztoc.com"
    },
    {
      "body": "Dozens of Tesla Cybertrucks were vandalized in Fort Lauderdale, Florida, this week.\n- The Cybertrucks were spray painted with a message attacking Tesla CEO Elon Musk.\n- Cybertrucks have become a symbol of ire for Elon Musk's many critics.\nTesla Cybertrucks have become symbolic. But probably not in\u2026",
      "domain": "businessinsider.com",
      "img": {
        "s": "https://cdn.biztoc.com/6c70af8e148d97c7_s.webp",
        "sq": "https://cdn.biztoc.com/6c70af8e148d97c7_sq.webp"
      },
      "published": "Sun, 23 Jun 2024 07:16:38 GMT",
      "title": "Tesla Cybertrucks vandalized with choice messages attacking Elon Musk",
      "uid": "6c70af8e148d97c7",
      "url": "https://www.businessinsider.com/tesla-cybertruck-vandalized-attacking-elon-musk-florida-2024-6?ref=biztoc.com"
    },
  ]
  tagsData = [
    {
      "id": "tfswallst",
      "title": "24/7 Wall Street",
      "web": "https://247wallst.com/"
    },
    {
      "id": "abc",
      "title": "ABC News",
      "web": "https://abcnews.go.com"
    },
    {
      "id": "aol",
      "title": "AOL Finance",
      "web": "https://www.aol.com/finance/"
    },
    {
      "id": "apnews",
      "title": "AP News",
      "web": "https://apnews.com"
    },
    {
      "id": "abnormalreturns",
      "title": "Abnormal Returns",
      "web": "https://abnormalreturns.com/"
    },
    {
      "id": "asiafinancial",
      "title": "Asia Financial",
      "web": "https://www.asiafinancial.com"
    },
    {
      "id": "axios",
      "title": "Axios",
      "web": "https://www.axios.com"
    },
    {
      "id": "bbc",
      "title": "BBC",
      "web": "https://www.bbc.com"
    },
    {
      "id": "barchart",
      "title": "Barchart",
      "web": "https://www.barchart.com/"
    },
  ]

  scrollToTop = () => {
    // Smooth scrolling to the top in 0.5 seconds
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    this.scrollToTop();
  };

  handleNoResults(result) {
    if (result) {
      return (
        <>
          <div className="noResultContainer">
            <img className='noResultImg' src={noResultImgUrl} alt="" />
            <p>Sorry, but nothing matched your search terms.</p>
          </div>
        </>
      )
    }
  }

  //  "componentDidMount()" baad me chly ga render k ↓ 
  async componentDidMount() {
    const { newsType, setProgress } = this.props;
    setProgress(0)
    const url = 'https://biztoc.p.rapidapi.com';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': this.props.apiKey,
        'X-RapidAPI-Host': 'biztoc.p.rapidapi.com'
      }
    };
    try {
      setProgress(10)
      this.setState({ loading: true })
      let response = await fetch(`${url}/${newsType}`, options);
      setProgress(30)
      if (!response.ok) {
        throw new Error(response.status)
      }
      let data = await response.json();
      setProgress(70)
      // console.log(data);
      this.setState({ result: data, loading: false })
      setProgress(100)
    } catch (error) {
      console.log(error)
      this.setState({
        APIError: true,
        result: `${error}`,
        loading: false
      })
      setProgress(100)
      console.log(`There was a problem fetching the data: HTTP error! status: ${error}`)
    }
  }
  render() {
    const { loading, APIError, result, currentPage } = this.state;
    const { findText, newsHeading, newsType, handleTagText, trendingSourceId } = this.props;

    if (loading) {
      return <>
        <div className="row">
          {[...Array(6)].map((_, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
              <Placeholder />
            </div>
          ))}
        </div>
      </>
    } else if (APIError) {
      return (
        <>
          <ErrorHandling Error={result} />
        </>
      )
    }
    else if (newsType.includes("news/latest") || newsType.includes(`/source/${trendingSourceId}`) || newsType.includes(`search?q=`)) {
      if (!result || result.length === 0 || Object.keys(result).length === 0) {
        // console.log("Empety array or object")
        return this.handleNoResults(result)
      }
      result.map((element) => {
        return element.title = element.title ? element.title : "....."
      })
      // For search cards i make this "filteredCards" variable. If there is no text in input field I set it to "cards". ↓
      const filteredCards = result.filter((card) => card.title.toLowerCase().startsWith(findText.toLowerCase().trim()));
      if (filteredCards.length === 0) {
        return this.handleNoResults(filteredCards.length)
      }

      const itemsPerPage = 18;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

      const handleNextPage = () => {
        if (currentPage < totalPages) {
          this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }));
          this.scrollToTop();
        }
      };
      const handlePrevPage = () => {
        if (currentPage > 1) {
          this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }));
          this.scrollToTop();
        }
      };
      const generateUniqueKey = () => {
        return uuidv4(); // Generate a unique UUID
      }

      let cardFixedImg;
      return (
        <>
          {/* This is new Component ↓ */}
          <Carousel
            data={this.state.result.slice(3, 8)}
            alternativeImgUrl={alternativeImgUrl}
            isVisible={findText.trim() === ''}
          />

          <h2 className='heading-style mt-4'>{newsHeading}</h2>

          <div className="row">
            {filteredCards.slice(startIndex, endIndex).map((element) => {
              const availableImg = ['o', 'og', 'ogs', 's', 'sq', 't', 'w'].find(prop => element.img && element.img[prop]);
              cardFixedImg = availableImg ? element.img[availableImg] : alternativeImgUrl;
              return (
                <div key={element.uid || element.id || generateUniqueKey()} className="col-lg-4 col-md-6 col-sm-12 alignCards">
                  <NewItem
                    createdDate={element.published ? element.published.slice(0, 16) : "----------"}
                    title={element.title.length > 80 ? element.title.slice(0, 80) + "..." : element.title}
                    description={element.body ? element.body.slice(0, 180) + "..." : "....."}
                    imgUrl={cardFixedImg}
                    faviconUrl={element.favicon ? element.favicon : faviconImg}
                    newsUrl={element.url}
                    domain={element.domain}
                  />
                </div>
              )
            })}

          </div>
          <Pagination data={result} totalPages={totalPages} currentPage={currentPage} handlePageChange={this.handlePageChange} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
        </>
      )
    }
    else if (newsType.includes("sources")) {
      if (!result || result.length === 0 || Object.keys(result).length === 0) {
        // console.log("Empety array or object")
        return this.handleNoResults(result)
      }
      // console.log(result)
      // console.log(result)
      const filteredCards = result.filter((item) => item.title.toLowerCase().startsWith(findText.toLowerCase().trim()));
      if (filteredCards.length === 0) {
        return this.handleNoResults(filteredCards.length)
      }

      return (
        <>
          <h2 className='heading-style mt-4'>{newsHeading}</h2>

          <div className="row">
            {filteredCards.map((element, index) => {
              return (
                <div key={index} className="col-lg-2 col-md-4 col-sm-4 alignCards">
                  <Link to={`/news/source/${element.id}`} className='linkStyle'>
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
export default News
