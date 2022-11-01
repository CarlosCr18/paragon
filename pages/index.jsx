import Head from "next/head";
import NavBar from "../components/navbar/navbar"
import About from "../components/About/About";
import Services from "../components/Services/services";
import Footer from "../components/footer/footer";
import 'font-awesome/css/font-awesome.min.css';
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { useRef, useEffect } from "react";

const Data = {
  services: {
    gridData: {
      animate:true,
      card:[
      {
        image: "/1.jpg",
        title: "Steel stud framing",
        text: `Constructed of galvanized steel for incredible durability `,
      },
      {
        image: "/2.jpg",
        title: "Insulation",
        text: `Protect home from cold, heat and humidity. Save on power bills.`,
      },
      {
        image: "/3.jpg",
        title: "Floor systems",
        text: `Our company has the experience and knowledge to help you choose and install the right commercial flooring.`,
      },
      {
        image: "/4.jpg",
        title: "Drywall",
        text: `Whether you're finishing an add-on to your home or refinishing a basement, adding drywall is an essential step.`,
      },
      {
        image: "/5.jpg",
        title: "Plastering",
        text: `Cemented In Quality. Built On Trust.`,
      },
      {
        image: "/6.jpg",
        title: "Acoustical",
        text: `Acoustical ceiling, panels and walls`,
      },
    ]},
    heroData: {
      heroTitle: "Entrust us with your next project!",
      heroSubText: `Paragon is committed to providing quiet quality and integrity in all your
      commercial interior projects.`,
      class: {
        heroContainer:'margin-block-rem servicesHero',
        heroPresentation: "",
        heroDescription: "",
        heroTitle: "",
        heroSubText:"",
        heroText:"AboutText"
      }
    },

    bannerData: {
      src: "/banner.jpg",
      title: "SERVICES",
      subTitle: `WE BUILD YOUR DREAMS`,
      class:{
        banner: "bannerServices",
        textContainer: "bannerText bannerTextServices",
        title: "services servicesTitle",
        subTitle: "dreams servicesSubtitle",
      }
    },
  },
  about: {
    gridData: {
      
      className:{
        gridContainer: `gridContainerAbout`,
      },
      card:[
      {
        title: "Vision",
        text: `Paragon is committed to providing quiet quality and integrity in all your
        commercial projects.`,
      },
      {
        title: "Mission",
        text: `Unique experience and outstanding quality`,
      },
      
    ],
  },
    heroData: {
      heroTitle: "Paragon",
      heroSubText: "About Us",
      heroText: [`Our corporation has been created with honest and dedicated Lather (Interior
        System Mechanic) Red seal Employees. We decided to create PARAGON DRYWALL
        SYSTEMS with quite experience to prove to our customers that we stand by our
        name (Paragon) a model-of-excellence.`,` 
        Building history as employees by begin
        part of important projects across Western Canada; for instance, the International
        Calgary Airport, SHNB Saskatchewan Hospital North Battleford and CVL Cedar
        village Lodge in Kitimat BC.`,` We are ready for your next project!`],
        class: {
          heroContainer: "",
          heroPresentation: "",
          heroDescription: "AboutDescription",
          heroTitle: "",
          heroSubText:"",
          heroText:"AboutText"
        }
    },
    bannerData: {
      src: "/0.jpg",
      title: "",
      subTitle: `providing quiet quality and integrity in all your
      commercial interior projects`,
      class:{
        banner: "bannerAbout",
        textContainer: "bannerText bannerTextAbout",
        title: "services",
        subTitle: "dreams aboutSubtitle",
      }
    },
  },
  NavBarData: {
    location: `31 Applemead Close SE 12A 756, Calgary, Alberta`,
    phoneNumber: `+1 403 603 0275`,
    logo: "/logo.png",
    links: [
      { location: "top", text: "About us" },
      { location: "Services", text: "Our Services" },
      { location: "Contact", text: "Contact us" },
    ],
  },
  footerData:{
    companyName:`Paragon Drywall Systems`,
    companyAddress: [`31 Applemead Close SE 12A 756`,`Calgary, Alberta`],
    phoneNumber: `+1 403 603 0275`,
    email: `Info@paragondrywallsystems.ca`
  }
};

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    gsap.fromTo(
      element.querySelector(".bannerTextAbout"),{
        opacity:0,
        y:120
      },{opacity: 1,y:0, duration: 0.8}
    )
    gsap.fromTo(
      element.querySelector(".bannerAbout"),{
        opacity:0,
        y:120
      },{opacity: 1,y:0, duration: 0.75}
    )
    gsap.fromTo(
      element.querySelector(".AboutDescription"),{
        opacity:0,
        y:200
      },{opacity: 1,y:0, duration: 0.9}
    )
    gsap.fromTo(
      element.querySelector(".AboutText"),{
        opacity:0,
        y:200
      },{opacity: 1,y:0, duration: 1.1}
    )

    // Vision mission animation
    gsap.fromTo(
      element.querySelector(".gridContainerAbout"),
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".gridContainerAbout"),
          start: "25% bottom+=150",
          end: "center center",
          
        },
      }
    );
    // services banner animation
    gsap.fromTo(
      element.querySelector(".bannerServices"),
      {
        opacity: 0,
        y: 250,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: element.querySelector(".bannerServices"),
          start: "25% bottom+=100",
          end: "center center",
          
        },
      }
    );
    // services banner title animation
    gsap.fromTo(
      element.querySelector(".servicesTitle"),
      {
        opacity: 0,
        y: 300,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        scrollTrigger: {
          trigger: element.querySelector(".bannerServices"),
          start: "25% bottom+=100",
          end: "center center",
          
        },
      }
    );
    // services banner subtitle animation
    gsap.fromTo(
      element.querySelector(".servicesSubtitle"),
      {
        opacity: 0,
        y: 300,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: element.querySelector(".bannerServices"),
          start: "25% bottom+=100",
          end: "center center",
          
        },
      }
    );
    // services hero animation
    gsap.fromTo(
      element.querySelector(".servicesHero"),
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".servicesHero"),
          start: "25% bottom+=200",
          end: "center center",
          
        },
      }
    );
    // footer animation
    gsap.fromTo(
      element.querySelector(".footerContainer"),
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".servicesHero"),
          start: "25% bottom",
          end: "center center",
          scrub:true,
          
        },
      }
    );



  }, []);
  return (
    <div ref={ref}>
      <Head>
        <title>Paragon drywall systems</title>
        <meta name="description" content="Paragon drywall systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <NavBar NavBarData={Data.NavBarData}></NavBar>
        <About Data={Data}> </About>
        <Services Data={Data}></Services>
      </main>
      <Footer footerData={Data.footerData}/>
    </div>
  );
}
