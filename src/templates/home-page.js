/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Offerings from '../components/Offerings';
import Testimonials from '../components/Testimonials';
import Link from 'gatsby-link'

const titleArray = [
    "About Us","Blog","Terms&Conditions","Contact Us",
]
const contentArray =
[
    "Find out more about the ICE Dialler Mobile Application and the team behind it on our about page Read the case study on what challenges the ICE Dialler solves","Our blog will keep you informed on all the information that pertains to the ICE Dialler mobile App such as when updates will be rolled out, guides on how to do certain things in the mobile App." 
]
export const HomePageTemplate = ({
                                     title,
                                     heading,
                                     description,
                                     offerings,
                                     meta_title,
                                     meta_description,
                                     testimonials,
                                 }) => (
    <div>
        <Helmet>
            <title>{meta_title}</title>
            <meta name="description" content={meta_description}/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.11/css/all.css" integrity="sha384-p2jx59pefphTFIpeqCcISO9MdVfIm4pNnsL08A6v5vaQc4owkQqxMV8kg4Yvhaw/" crossorigin="anonymous"/>
        </Helmet>
        <section className="hero is-primary ">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                                <h1 className="title">
                                    {title}
                                </h1>
                               
                                <h3 className="subtitle">{description}</h3>
                                <Link
                                    className="button is-link is-outlined"
                                    to='/contact'>
                                    {/* Links to the mobile app playstore url */}
                                    Download the mobile app
                                    
                                   </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section section--gradient">
            <div className="container">

                <div className="section">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            
                        
                              
                                  
                               
                               
                               
                              
                              
                               
                                {/* <Offerings gridItems={offerings.blurbs}/> */}
                                <h2 className="has-text-weight-semibold is-size-2">Testimonials</h2>
                                <Testimonials testimonials={testimonials}/>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="section">
            <div className="container">
                
          </div>
        </section>

    </div>
);

HomePageTemplate.propTypes = {
    title: PropTypes.string,
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    offerings: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
    testimonials: PropTypes.array,
    titleArray:PropTypes.array
};

const HomePage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (
        <HomePageTemplate
            title={frontmatter.title}
            meta_title={frontmatter.meta_title}
            meta_description={frontmatter.meta_description}
            heading={frontmatter.heading}
            description={frontmatter.description}
            offerings={frontmatter.offerings}
            testimonials={frontmatter.testimonials}
        />
    )
};

HomePage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        description
         offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`;