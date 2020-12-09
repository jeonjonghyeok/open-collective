// HOME PAGE
// DESC:        Landing page

// REACT IMPORTS
// import React, { Component } from 'react';
import React, { useEffect, useState, Component } from 'react';
import HttpClient from '../../utils/HttpClient';
import banner from '../../assets/img/bg-pc-main-landing-01.png';
import banner2x from '../../assets/img/bg-pc-main-landing-01@2x.png';
import banner3x from '../../assets/img/bg-pc-main-landing-01@3x.png';
import bannerimg from '../../assets/img/img-pc-main-landing-01.png';
import bannerimg2x from '../../assets/img/img-pc-main-landing-01@2x.png';
import bannerimg3x from '../../assets/img/img-pc-main-landing-01@3x.png';
import logo from '../../assets/img/img-pc-main-logo.png';
// STYLESHEET
import './HomePage.css';
// // CUSTOM COMPONENT IMPORTS
// import ServiceProvider from '../../components/ServiceProvider/ServiceProvider';
// import RelatedNews from '../../components/Home/RelatedNews';
// import Participants from '../../components/Home/Participants';
// import Cooperation from '../../components/Home/Cooperation';
// import Footer from '../../components/Footer/Footer';
// function useCalendars() {
//     const [calendars, setCalendar] = useState([]);

//     useEffect(() => {
//       HttpClient
//         .get('/rest/calendars')
//         .then((calendars) => {
//           setCalendar(calendars);
//         });
//     }, []);

//     return [calendars, setCalendar];
//   }
function useSolar() {
    const [solars, setSolar] = useState([]);

    useEffect(() => {
        HttpClient
            .get('/rest/energy/solar')
            .then((solars) => {
                setSolar(solars);
            });
    }, []);

    return [solars, setSolar];
}
function HomePage() {
    // const [calendars] = useCalendars();
    const [solars] = useSolar();
    return (
        <div className='mainDiv'>
            <div className='Rectangle-2'>
            <img src={logo}
     class="img_pc_main_logo">
         </img>
            </div>
            {/* <div className="bannerDiv">
            <div className='bannerInDiv'>
                </div>
            <img src={bannerimg}
                srcset={`${bannerimg2x} 2x,
                ${bannerimg3x} 3x`}
                class="img_pc_main_landing_01">
                    
                </img>
                </div> */}
                {/* <div className="-e--">다양한 e-모빌리티를 활용한</div> */}

                        {/* {solars.cumulative_power_generation} */}
                        {/* <div className='Rectangle-10'></div>  */}
        </div>
    );
}

export default HomePage;