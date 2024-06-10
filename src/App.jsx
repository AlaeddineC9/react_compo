import { useState } from "react";
import Navigation from "./components/Navigation";
import myLogo from "./assets/react.svg";
import Hero from './components/Hero';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {


  const ctaData = {
    title: "Join Us Today",
    description: "Sign up now to get exclusive offers and updates.",
    buttonText: "Sign Up",
    buttonLink: "/signup",
    backgroundImage: "http://placehold.it/1200x800"
  };
  const handleSearch = (query) => {
    console.log('Search query:', query);

  };
  const articles = [
    {
      title: "Article 1",
      description: "Description de l'article 1",
      image: "http://placehold.it/400x250",
      onClick: () => console.log('Article 1 clicked!')
    },
    {
      title: "Article 2",
      description: "Description de l'article 2",
      image: "http://placehold.it/400x250",
      onClick: () => console.log('Article 2 clicked!')
    },
    {
      title: "Article 3",
      description: "Description de l'article 3",
      image: "http://placehold.it/400x250",
      onClick: () => console.log('Article 3 clicked!')
    }
  ];


  const [menu, setMenu] = useState([
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Support",
      link: "/support",
      target: "_blank",
      button: true,
    },
  ]);
  const heroData = {
    title: "Welcome to Our Website",
    subtitle: "We are glad to have you here.",
    image: "http://placehold.it/1200x800",
    cta: {
      text: "Get Started",
      link: "#get-started",
      target: "_self"
    }
  }
  /**
   * Pour mettre à jour le logo,
   * modifiez la valeur ci-dessous
   */
  const [logo, setLogo] = useState(myLogo);
  const footerSections = [
    {
        title: "Company",
        links: [
            { text: "About Us", url: "/about" },
            { text: "Careers", url: "/careers" },
            { text: "Contact", url: "/contact" }
        ]
    },
    {
        title: "Support",
        links: [
            { text: "Help Center", url: "/help" },
            { text: "FAQ", url: "/faq" },
            { text: "Privacy Policy", url: "/privacy" }
        ]
    },
    {
        title: "Services",
        links: [
            { text: "Web Development", url: "/services/web-development" },
            { text: "SEO", url: "/services/seo" },
            { text: "Marketing", url: "/services/marketing" }
        ]
    },
    {
        title: "Follow Us",
        links: [
            { text: "Facebook", url: "https://facebook.com" },
            { text: "Twitter", url: "https://twitter.com" },
            { text: "LinkedIn", url: "https://linkedin.com" }
        ]
    }
];

  return (
    <>
      <Navigation menu={menu} logo={logo} />
      <SearchBar
        placeholder="Search for something..."
        onSearch={handleSearch}
      />
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        image={heroData.image}
        cta={heroData.cta}
      />

      <Card
        articles={articles}
      />
      <CallToAction
        title={ctaData.title}
        description={ctaData.description}
        buttonText={ctaData.buttonText}
        buttonLink={ctaData.buttonLink}
        backgroundImage={ctaData.backgroundImage}
      />
      <Footer sections={footerSections} />
    </>
  );
}

export default App;