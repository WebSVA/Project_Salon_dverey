import Location from '../components/Location';
import ShadowSlider from '../components/ShadowSlider'
import PreferencesContainer from '../components/PreferencesContainer';
import AboutUsSection from '../components/AboutUsSection'

function HomePage(){
    return(
        <>
        <ShadowSlider/>
        <PreferencesContainer/>
        <AboutUsSection/>
        <Location/>
        </>
    );
}

export default HomePage;