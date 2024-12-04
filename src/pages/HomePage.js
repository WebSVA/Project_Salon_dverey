import Location from '../components/Location';
import ShadowSlider from '../components/ShadowSlider'
import PreferencesContainer from '../components/PreferencesContainer';
import AboutUsSection from '../components/AboutUsSection'
import Parallax from '../components/Parallax';
import UpCatalogSection from '../components/CatalogSection';


function HomePage(){
    return(
        <>
        <ShadowSlider/>
        <PreferencesContainer/>
        <UpCatalogSection/>
        <AboutUsSection/>
        <Parallax/>
        <Location/>
        </>
    );
}

export default HomePage;