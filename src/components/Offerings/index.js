/**
 * Created by vaibhav on 1/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'

const Offerings = ({ gridItems }) => (
    <div className="columns is-multiline">
        {gridItems.map(item => (
            <div key={item.image} className="column is-6" style={{borderRadius: '5px'}}>
                <section className="section">
                    <p className="has-text-centered">
                    <span className="icon has-text-primary">
                    <i className="fas fa-archive"></i>
                    </span>
                    </p>
                    <p>{item.text}</p>
                </section>
            </div>
        ))}
    </div>
);

Offerings.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            text: PropTypes.string,
        })
    ),
};

export default Offerings;
