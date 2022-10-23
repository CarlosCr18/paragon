
import Banner from '../commonComponents/Banner'
import Hero from '../commonComponents/hero/hero'
import Grid from '../commonComponents/grid/grid.jsx'
import React from 'react'

const Services = ({Data}) => {
    return(
        <div id="Services">
        <Banner bannerData={Data.services.bannerData}></Banner>
        <Grid gridData={Data.services.gridData}></Grid>
        <Hero heroData={Data.services.heroData}></Hero>
        </div>
    )
}

export default Services;