import React from 'react';
//import './Reviews.css';

class Reviews extends React.Component {
    render() {
        const testimonials = [
            {
                name: 'Tom Leakar',
                location: 'london, UK',
                image: 'assets/images/clients/c1.png',
                comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.'
            },
            {
                name: 'monirul islam',
                location: 'london, UK',
                image: 'assets/images/clients/c2.png',
                comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.'
            },
            {
                name: 'Shohrab Hossain',
                location: 'london, UK',
                image: 'assets/images/clients/c3.png',
                comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.'
            },
            {
                name: 'Tom Leakar',
                location: 'london, UK',
                image: 'assets/images/clients/c4.png',
                comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis eaque.'
            }
        ];

        return (
            <section id="reviews" className="reviews">
                <div className="section-header">
                    <h2>clients reviews</h2>
                    <p>What our client say about us</p>
                </div>
                <div className="reviews-content">
                    <div className="testimonial-carousel" style={{display:'flex',marginLeft:'30px'}}>
                        {testimonials.map((testimonial, index) => (
                            <div className="single-testimonial-box" key={index}>
                                <div className="testimonial-description">
                                    <div className="testimonial-info">
                                        <div className="testimonial-img">
                                            <img src={testimonial.image} alt="clients" />
                                        </div>
                                        <div className="testimonial-person">
                                            <h2>{testimonial.name}</h2>
                                            <h4>{testimonial.location}</h4>
                                            <div className="testimonial-person-star">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-comment">
                                        <p>{testimonial.comment}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Reviews;
