/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react';
//import LiveChat from 'react-livechat'
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Content, {HTMLContent} from '../components/Content';

export const AboutPageTemplate = ({title, content, contentComponent}) => {
    const PageContent = contentComponent || Content

    if ((typeof window != "undefined")) {

        const LiveChat = require("react-livechat");
    
        return (
             <LiveChat license={9773880} />
        );
      } else {
        return null;
      }
    return (
        <div>
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
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                            <div className="card article">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-center">
                                        <img src="http://www.radfaces.com/images/avatars/daria-morgendorffer.jpg" className="author-image" alt="Placeholder image"/>
                                        </div>
                                        <div className="media-content has-text-centered">
                                            <p className="title article-title">Haruna Salim</p>
                                            <p className="subtitle is-6">ASP.Net Developer</p>
                                        </div>
                                    </div>
                                    <div className="content article-body">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quam, nisi reprehenderit facere maxime maiores illo consequatur, ullam delectus reiciendis doloribus, quae ut praesentium? 
                                        Ab inventore sapiente labore qui at. Dignissimos.
                                    </div>
                                </div>
                            </div>


                            <div className="card article">
                                <div className="card-content">
                                    <div className="media">
                                        
                                        <div className="media-center">
                                        <img src="http://www.radfaces.com/images/avatars/topanga-lawrence.jpg" className="author-image" alt="Placeholder image"/>
                                        </div>
                                        <div className="media-content has-text-centered">
                                        <p className="title article-title">Asalu Tolulope</p>
                                            <p className="subtitle is-6">Xamarin Developer</p>
                                        </div>
                                    </div>
                                    <div className="content article-body">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quam, nisi reprehenderit facere maxime maiores illo consequatur, ullam delectus reiciendis doloribus, quae ut praesentium? 
                                        Ab inventore sapiente labore qui at. Dignissimos.
                                    </div>
                                </div>
                            </div>

                            
                                {/* <PageContent className="content is-size-5" content={content}/> */}
                               
                             
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const AboutPage = ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <div>
            <Helmet>
                <title>{post.frontmatter.meta_title}</title>
                <meta name="description" content={post.frontmatter.meta_description}/>
            </Helmet>
            <AboutPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </div>
    )
};

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_title
        meta_description
      }
    }
  }
`;