import './App.css';
import { PublicLayout } from './Layout/PublicLayout';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Favicon
    const faviconLink1 = document.createElement('link');
    faviconLink1.rel = 'icon';
    faviconLink1.type = 'image/vnd.microsoft.icon';
    faviconLink1.href = '/img/favicon.ico?1611064619';
    document.head.appendChild(faviconLink1);

    const faviconLink2 = document.createElement('link');
    faviconLink2.rel = 'shortcut icon';
    faviconLink2.type = 'image/x-icon';
    faviconLink2.href = '/img/favicon.ico?1611064619';
    document.head.appendChild(faviconLink2);

    // Stylesheets
    const stylesheets = [
      "https://www.tunisianet.com.tn/themes/electrive/assets/css/theme.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/blockreassurance/views/css/front.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbblocksearch/views/css/wbsearch.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbfeature//views/css/front.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbthemeconfigurator/views/css/frontend/font-awesome.min.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbthemeconfigurator/views/css/frontend/owl.carousel.min.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbthemeconfigurator/views/css/frontend/owl.theme.default.min.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbthemeconfigurator/views/css/frontend/lightbox.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbthemeconfigurator/views/css/frontend/animate.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbthemeconfigurator/views/css/frontend/nivo-slider.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbthemeconfigurator/views/css/frontend/bootstrap-select.min.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbmegamenu/views/css/wbmegamenu.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/hit_shipping_map//views/css/front.css?version=1.4",
      "https://www.tunisianet.com.tn/js/jquery/ui/themes/base/minified/jquery-ui.min.css?version=1.4",
      "https://www.tunisianet.com.tn/js/jquery/ui/themes/base/minified/jquery.ui.theme.min.css?version=1.4",
      "https://www.tunisianet.com.tn/js/jquery/plugins/autocomplete/jquery.autocomplete.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/ps_imageslider/css/homeslider.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/ps_imagegrid/css/homegrid.css?version=1.4",
      "https://www.tunisianet.com.tn/themes/electrive/assets/css/custom.css?version=1.4",
      "https://www.tunisianet.com.tn/modules/wbthemecustomizer/views/css/front/configCss-1.css?version=1.4"
    ];

    stylesheets.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      document.head.appendChild(link);
    });

    // Nettoyage au démontage du composant
    return () => {
      // Suppression des balises ajoutées
      document.head.removeChild(faviconLink1);
      document.head.removeChild(faviconLink2);
      stylesheets.forEach(url => {
        const linkToRemove = document.querySelector(`link[href="${url}"]`);
        if (linkToRemove) document.head.removeChild(linkToRemove);
      });
    };
  }, []);

  return (
    <>
      <PublicLayout />
    </>
  );
}

export default App;
