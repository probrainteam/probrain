import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import './logo.scss';

interface LogoDataType {
  logo: {
    publicURL: string;
  };
}

const Logo = () => {
  const { logo } = useStaticQuery<LogoDataType>(graphql`
    query {
      logo: file(name: { eq: "logo" }) {
        publicURL
      }
    }
  `);

  return (
    <Link to="/">
      <img src={logo.publicURL} className="logo" alt="logo" />
    </Link>
  );
};

export default Logo;
