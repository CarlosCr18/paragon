import Image from "next/image";
import React from "react";

const Footer = ({ footerData }) => {
  return (
    <footer id="Contact" className={"footerContainer " + footerData?.className?.footer}>
      <div className={"companyInfo "}>
        <p className={"companyName "}>{footerData?.companyName}</p>
        <hr className="customHR"></hr>
        <p className={"companyAddress"}>
          {footerData?.companyAddress &&
            footerData.companyAddress.map((element) => {
              return (
                <React.Fragment key={element}>
                <span className="companyAddressEl" >
                  {element}
                </span><br></br>
                </React.Fragment>
              );
            })}
        </p>
        <hr className="customHR"></hr>
        {footerData?.socialLinks &&
          footerData?.socialLinks.map((link) => {
            return (
              <div key={link.src}>
                <a className="linkAnchor" href={link.href} alt={link.alt}>
                  {link.image ? (
                    <Image
                      src={link.src}
                      alt={link.alt}
                      width={50}
                      height={50}
                    ></Image>
                  ) : (
                    <p className="linkText"> {link.text}</p>
                  )}
                </a>
              </div>
            );
          })}
      </div>
      <div >
        <div className={"footerConctactInfoContainer"}>
          <i className="fa fa-phone"></i>
          <div className="footerConctactInfo">
            <p className="infoTitle">Phone number</p>
            <a href={`tel:` + footerData?.phoneNumber}>
              {footerData?.phoneNumber}
            </a>
          </div>
        </div>
        <div className={"footerConctactInfoContainer"}>
          <i className="fa fa-envelope"></i>
          <div className="footerConctactInfo">
            <p className="infoTitle">Email</p>
            <a href={`mailto:` + footerData?.email}>
              {footerData?.email || "paragon@drywall.ca"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
