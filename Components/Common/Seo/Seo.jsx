/* -------------------------------------------------------------------------- */
/*                                dependencies                                */
/* -------------------------------------------------------------------------- */
import React from "react";
import Head from "next/head";
/* -------------------------------------------------------------------------- */
/*                                Seo component                               */
/* -------------------------------------------------------------------------- */
const Seo = () => {
  /* ******************************** rendering ******************************* */
  return (
    <Head>
      <title></title>
      <link rel="icon" href="/Group.png" />
      <link rel="canonical" href={"url canonique"} />
      <meta name="description" content={"description "} />
      <meta property="og:title" content={""} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={"url canonique"} />
      <meta property="og:image" itemProp="image" content={"url image"} />
      <meta property="og:description" content={"description "} />
      <link rel="Alternate" hrefLang={"fr-FR"} href={"url canonique"} />
      <meta
        property="og:site_name"
        content="Poséidon SPA : acheter un SPA au meilleur prix"
      />
      {/* TWITTER */}
      <meta property="twitter:title" content={""} />
      <meta property="twitter:image" content={"url image"} />
      <meta property="twitter:image:alt" content={"description "} />
      <meta property="twitter:description" content={"description "} />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    </Head>
  );
};

export default Seo;
