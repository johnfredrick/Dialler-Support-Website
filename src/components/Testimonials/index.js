/**
 * Created by vaibhav on 1/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({testimonials}) => (
    <div>
        {testimonials.map((testimonial, id) => (
            <article className="card article" key={id}>
                <div className="card-content">
                    <div className="media">
                        <div className="media-center">
                        <img src="http://www.radfaces.com/images/avatars/topanga-lawrence.jpg" className="author-image-float" alt="Placeholder image"/>
                        
                        </div>
                        

                    </div>

                    <div className="content is-italic">
                    {testimonial.quote}
                    <br/>
                    <cite className="is-uppercase"> – {testimonial.author}</cite>
                    </div>
                   
                    
                </div>
            </article>
        ))}
    </div>
);

Testimonials.propTypes = {
    testimonials: PropTypes.arrayOf(
        PropTypes.shape({
            quote: PropTypes.string,
            author: PropTypes.string,
        })
    ),
};

export default Testimonials;