import Location from '../components/Location';
import ShadowSlider from '../components/ShadowSlider'
import PreferencesContainer from '../components/PreferencesContainer';
import AboutUsSection from '../components/AboutUsSection'

function HomePage(){
    return(
        <>
        {/* <ContactHeader/> */}
        <ShadowSlider/>
        <PreferencesContainer/>
        <AboutUsSection/>
        <Location/>
        {/* <Footer/> */}
        </>
    );
}

export default HomePage;