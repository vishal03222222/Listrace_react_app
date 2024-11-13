import React, { Component } from 'react';

class ExploreSection extends Component {
  render() {
    return (
      <section id="explore" className="explore">
        <div className="container">
          <div className="section-header">
            <h2>explore</h2>
            <p>Explore New place, food, culture around the world and many more</p>
          </div>
          <div className="explore-content">
            <div className="row">   

              <div className="col-md-4 col-sm-6">
                <div className="single-explore-item">
                  <div className="single-explore-img">
                    <img src="assets/   
images/explore/e1.jpg" alt="explore image" />
                    <div className="single-explore-img-info">
                      <button onClick={() => window.location.href = '#'}>best rated</button>
                      <div className="single-explore-image-icon-box">
                        <ul>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-arrows-alt"></i>   

                            </div>
                          </li>
                          <li>
                            <div className="single-explore-image-icon">
                              <i className="fa fa-bookmark-o"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-explore-txt bg-theme-1">   

                    <h2><a href="#">tommy helfinger bar</a></h2>
                    <p className="explore-rating-price">
                      <span className="explore-rating">5.0</span>
                      <a href="#"> 10 ratings</a>   
 
                      <span className="explore-price-box">
                        form
                        <span className="explore-price">5$-300$</span>
                      </span>
                      <a href="#">resturent</a>
                    </p>
                    <div className="explore-person">
                      <div className="row">
                        <div className="col-sm-2">
                          <div className="explore-person-img">
                            <a href="#">   

                              <img src="assets/images/explore/person.png" alt="explore person" />
                            </a>
                          </div>
                        </div>
                        <div className="col-sm-10">   

                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....   
 
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="explore-open-close-part">
                      <div className="row">
                        <div className="col-sm-5">
                          <button className="close-btn" onClick={() => window.location.href = '#'}>close now</button>
                        </div>
                        <div className="col-sm-7">
                          <div className="explore-map-icon">
                            <a href="#"><i data-feather="map-pin"></i></a>
                            <a href="#"><i data-feather="upload"></i></a>
                            <a href="#"><i data-feather="heart"></i></a>   

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   

              {/* ... other explore items ... */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ExploreSection;