import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({ NavBarData }) => {
  return (
    <div className="NavBarContainer">
      <div className="NavBarInfoContainer">
        <div className="NavBarInfo">
          <FontAwesomeIcon icon="fa-solid fa-location-pin" />
          <p>{NavBarData.location || "Lorem ipsum"}</p>
        </div>
        <div className="NavBarInfo">
          <FontAwesomeIcon icon="fa-sharp fa-solid fa-phone" />
          <p>{NavBarData.phone || "Lorem ipsum"}</p>
        </div>
      </div>
      <div className="NavBarLinks">
        <div className="logo">
          <Link href="#">
            <Image
              alt="Paragon logo"
              src={NavBarData.logo || "/logo.png"}
              width={150}
              height={50}
            ></Image>
          </Link>
        </div>
        <div className="links">
          {NavBarData.links ? (
            NavBarData.links.map((link) => {
              return (
                <Link key={"link_" + link.text} href={"#" + link.location}>
                  <a className="link">{link.text.toUpperCase()}</a>
                </Link>
              );
            })
          ) : (
            <>
              <div>Failed to get links</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
