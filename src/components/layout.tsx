import React, { ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './layout.scss';
import Header from 'components/organisms/header';
import Footer from 'components/organisms/footer';
import Seo from 'components/atoms/seo';

interface LayoutProps {
  children: ReactNode;
}

interface SiteMetaType {
  site: {
    siteMetadata: {
      title?: string;
      description?: string;
      author: string;
    };
  };
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<SiteMetaType>(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <Header />
      <Seo />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
