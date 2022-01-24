import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from '../image';

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
      <Image src={logo.publicURL} className="logo" />
    </Link>
  );
};

export default Logo;
