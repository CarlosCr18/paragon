const Hero = ({heroData}) => {
  return (
    <div className="heroContainer">
      <div className="heroPresentation">
        <div className="heroDescription">
          <div className="heroTitle">
            {heroData.heroTitle}
          </div>
          <div className="heroSubText">
            {heroData.heroSubText}
          </div>
        </div>
        <div className="heroText">
          {heroData.heroText}
        </div>
      </div>
    </div>
  );
};

export default Hero;
