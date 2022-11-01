const Hero = ({heroData}) => {
  return (
    <div className={"heroContainer " + heroData.class?.heroContainer}>
      <div className={"heroPresentation " + heroData.class?.heroPresentation}>
        <div className={"heroDescription " + heroData.class?.heroDescription}>
          <div className={"heroTitle " + heroData.class?.heroTitle}>
            {heroData.heroTitle}
          </div>
          <div className={"heroSubText " + heroData.class?.heroSubText}>
            {heroData.heroSubText}
          </div>
        </div>
        <div className={"heroText " + heroData.class?.heroText}>
          {heroData.heroText && heroData.heroText.map((text)=>{
            return (<p key={text}>{text}</p>)
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
