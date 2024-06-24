import React, { Component } from 'react'

export class Carousel extends Component {
    render() {
        let { data, alternativeImgUrl, isVisible } = this.props;
        // console.log(data)

        const description = (index) => { return data[index].body ? data[index].body.slice(0, 100) + "..." : "....."; }

        let cardFixedImg;
        return (
            <>
                <div id="carouselExampleInterval" style={{ display: isVisible ? 'block' : 'none' }} className="carousel slide mt-3" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {data.map((item, index) => {
                            const availableImg = ['o', 'og', 'ogs', 's', 't', 'w'].find(prop => item.img && item.img[prop]);
                            cardFixedImg = availableImg ? item.img[availableImg] : alternativeImgUrl;
                            return (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="5000">
                                    <img src={cardFixedImg} className="d-block w-100 carousel-img" alt="..." />
                                    <div className="carousel-caption d-none d-md-block txtStyle" onClick={() => { window.open(item.url, "_blank") }}>
                                        <h5>{item.title}</h5>
                                        <p>{description(index)}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div >
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div >
            </>
        )
    }
}

export default Carousel
