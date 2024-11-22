import Location from '../components/Location';
import ShadowSlider from '../components/ShadowSlider'
import PreferencesContainer from '../components/PreferencesContainer';
import AboutUsSection from '../components/AboutUsSection'
import Parallax from '../components/Parallax';

function HomePage(){
    return(
        <>
        {/* <ContactHeader/> */}
        <ShadowSlider/>
        <PreferencesContainer/>
        <AboutUsSection/>
        <Parallax/>
        <Location/>
        {/* <Footer/> */}
        </>
    );
}

export default HomePage;