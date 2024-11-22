import Location from '../components/Location';
import ShadowSlider from '../components/ShadowSlider'
import PreferencesContainer from '../components/PreferencesContainer';
import AboutUsSection from '../components/AboutUsSection'
import Parallax from '../components/Parallax';

function HomePage(){
    return(
        <>
        <ShadowSlider/>
        <PreferencesContainer/>
        <AboutUsSection/>
        <Parallax/>
        <Location/>
        </>
    );
}

export default HomePage;