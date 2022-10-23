
import Banner from '../commonComponents/Banner'
import Hero from '../commonComponents/hero/hero'
import Grid from '../commonComponents/grid/grid.jsx'

const About = ({Data}) => {
    return(
    <>
    <Banner bannerData={Data.about.bannerData}></Banner>
    <Hero heroData={Data.about.heroData}></Hero>
    <Grid gridData={Data.about.gridData}></Grid>
    </>)
}

export default About;