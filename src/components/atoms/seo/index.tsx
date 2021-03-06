import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
  url?: string;
  description?: string;
  image?: string;
  title?: string;
}

function Seo({ url, title, description, image }: SeoProps) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={title} />

      <meta
        name="google-site-verification"
        content="S9Myi5pYs9AGTgFfHPTz_EN5CYONAq_d_phuEjQR3Z8"
      />

      <html lang="ko" />
    </Helmet>
  );
}

export default Seo;
