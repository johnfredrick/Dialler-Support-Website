import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export const TocPageTemplate = ({
    title,
    meta_title,
    meta_description,
   toc,
}) => (
<div>
        <Helmet>
            <title>{meta_title}</title>
            <meta name="description" content={meta_description}/>
        </Helmet>
        <section className="hero is-primary">
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
                                
                                <p className="is-size-5">{toc.description}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
TocPageTemplate.propTypes = {
    title: PropTypes.string,
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
    toc: PropTypes.shape({
        
        description: PropTypes.string
        
    }),
};

const TocPage = ({data}) => {
    const {frontmatter} = data.markdownRemark;

    return (
        <TocPageTemplate
            title={frontmatter.title}
            meta_title={frontmatter.meta_title}
            meta_description={frontmatter.meta_description}
            toc={frontmatter.toc}
        />
    )
};

TocPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};


export default TocPage;

export const tocPageQuery = graphql`
  query TocPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        toc {
          
          description
          
        }
      }
    }
  }
`;