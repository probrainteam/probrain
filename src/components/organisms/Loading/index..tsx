import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import './loading.scss';

interface LoadingQueryType {
  logo: {
    publicURL: string;
  };
}

const Loading = () => {
  const { logo } = useStaticQuery<LoadingQueryType>(graphql`
    query {
      logo: file(name: { eq: "logo-white" }) {
        publicURL
      }
    }
  `);

  return (
    <div className="loading">
      <div className="loading-img">
        <img src={logo.publicURL} alt="loading-logo" />
      </div>
    </div>
  );
};

export default Loading;
