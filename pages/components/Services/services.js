
import Banner from '../commonComponents/Banner'
import Hero from '../commonComponents/hero/hero'
import Grid from '../commonComponents/grid/grid'

const Services = ({Data}) => {
    return(
        <>
        <Banner bannerData={Data.services.bannerData}></Banner>
        <Hero heroData={Data.services.heroData}></Hero>
        <Grid gridData={Data.services.gridData}></Grid>
        </>
    )
}

export default Services;