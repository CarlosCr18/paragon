import Link from "next/link";
import Image from "next/image";

const NavBar = ({ NavBarData }) => {
  return (
    <div className="NavBarContainer">
      <div className="NavBarInfoContainer">
        <div className="NavBarInfo">
          <i className="fa fa-map-marker"></i>
          <p>{NavBarData.location || "Lorem ipsum"}</p>
        </div>
        <a href={`tel:` + NavBarData?.phoneNumber} className="NavBarInfo">
          <i className="fa fa-phone"></i>
          <p>{NavBarData?.phoneNumber || "Lorem ipsum"}</p>
        </a>
      </div>
      <div className="NavBarLinks">
        <div className="logo">
            <Image
              alt="Paragon logo"
              src={NavBarData.logo || "/logo.png"}
              width={150}
              height={50}
            ></Image>
        </div>
        <div className="links">
          {NavBarData.links ? (
            NavBarData.links.map((link) => {
              return (
                <a className="linkAnchor" key={"link_" + link.text} href={"#" + link.location}>
                  <span >{link.text.toUpperCase()}</span>
                </a>
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
