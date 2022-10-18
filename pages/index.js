import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "./components/navbar/navbar";
import Services from "./components/Services/services";
const Data = {
  services: {
    gridData: [
      {
        image: "/1.jpg",
        title: "title",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
   Qui dicta minus molestiae vel beatae natus eveniet 
   ratione temporibus aperiam harum alias officiis assumenda 
   officia quibusdam deleniti eos cupiditate dolore doloribus`,
      },
      {
        image: "/2.jpg",
        title: "title",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
   Qui dicta minus molestiae vel beatae natus eveniet 
   ratione temporibus aperiam harum alias officiis assumenda 
   officia quibusdam deleniti eos cupiditate dolore doloribus`,
      },
      {
        image: "/3.jpg",
        title: "title",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
   Qui dicta minus molestiae vel beatae natus eveniet 
   ratione temporibus aperiam harum alias officiis assumenda 
   officia quibusdam deleniti eos cupiditate dolore doloribus`,
      },
      {
        image: "/4.jpg",
        title: "title",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
   Qui dicta minus molestiae vel beatae natus eveniet 
   ratione temporibus aperiam harum alias officiis assumenda 
   officia quibusdam deleniti eos cupiditate dolore doloribus`,
      },
      {
        image: "/5.jpg",
        title: "title",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
   Qui dicta minus molestiae vel beatae natus eveniet 
   ratione temporibus aperiam harum alias officiis assumenda 
   officia quibusdam deleniti eos cupiditate dolore doloribus`,
      },
      {
        image: "/6.jpg",
        title: "title",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
   Qui dicta minus molestiae vel beatae natus eveniet 
   ratione temporibus aperiam harum alias officiis assumenda 
   officia quibusdam deleniti eos cupiditate dolore doloribus`,
      },
    ],
    heroData: {
      heroTitle: "MORE SERVICES",
      heroSubText: "WE ARE THE LEADERS IN THE CONSTRUCTION INDUSTRY",
      heroText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
 minus molestiae vel beatae natus eveniet ratione temporibus aperiam
 harum alias officiis assumenda officia quibusdam deleniti eos
 cupiditate dolore doloribus`,
    },

    bannerData: {
      src: "/banner.jpg",
      textClass: "bannerText",
      titleClass: "services",
      subTitleClass: "dreams",
      title: "SERVICES",
      subTitle: "WE BUILD YOUR DREAMS",
    },
  },
  NavBarData: {
    location: "Lorem ipsum",
    phone: "Lorem ipsum",
    logo: "/logo.png",
    links: [
      { location: "About", text: "About us" },
      { location: "services", text: "Our Services" },
      { location: "Contact", text: "Contact us" },
    ],
  },
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paragon drywall systems</title>
        <meta name="description" content="Paragon drywall systems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar NavBarData={Data.NavBarData}></NavBar>
        <Services Data={Data}></Services>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
