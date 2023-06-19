import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Bienvenue a notre boutique en ligne',
  description: 'Nous vendons les meilleurs produits',
  keywords: 'electroniques, telephones, moins chers',
};

export default Meta;
