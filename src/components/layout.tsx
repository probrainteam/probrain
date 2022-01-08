import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import 'components/layout.scss';
import Header from 'components/organisms/header';
import Footer from 'components/organisms/footer';
import Seo from 'components/atoms/seo';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Seo />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
