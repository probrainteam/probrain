import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './loading.scss';
interface IndexQueryType {
  logo: {
    publicURL: string;
  };
}
const Loading = () => {
  const { logo } = useStaticQuery<IndexQueryType>(graphql`
    query {
      logo: file(name: { eq: "logo-white" }) {
        publicURL
      }
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  console.log('Loading');
  return (
    <div className="loading">
      <div className="loading-img">
        <img src={logo.publicURL} alt="" />
      </div>
    </div>
  );
};

export default Loading;
