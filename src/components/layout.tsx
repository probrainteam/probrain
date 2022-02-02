import React, { ReactNode } from 'react';
import './layout.scss';
import Header from 'components/organisms/header';
import Footer from 'components/organisms/footer';
import Seo from 'components/atoms/seo';

interface LayoutProps {
  url?: string;
  title?: string;
  image?: string;
  description?: string;
  children: ReactNode;
}

const Layout = ({ url, title, description, image, children }: LayoutProps) => {
  return (
    <div className="container">
      <Header />
      <Seo url={url} title={title} description={description} image={image} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
