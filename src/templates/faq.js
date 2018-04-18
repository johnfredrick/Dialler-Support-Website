import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export const FaqPageTemplate = ({
    title,
    meta_title,
    meta_description,
   faq,
}) => (
<div>
        <Helmet>
            <title>{meta_title}</title>
            <meta name="description" content={meta_description}/>
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
                            <div className="content">
                                
                                <p className="is-size-5">{faq.description}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

FaqPageTemplate.propTypes = {
    title: PropTypes.string,
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
    toc: PropTypes.shape({
        
        description: PropTypes.string
        
    }),
};

const FaqPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (
        <FaqPageTemplate
            title={frontmatter.title}
            meta_title={frontmatter.meta_title}
            meta_description={frontmatter.meta_description}
            faq={frontmatter.faq}
        />
    )
};


FaqPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default FaqPage;

export const faqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        faq {
          
          description
          
        }
      }
    }
  }
`;