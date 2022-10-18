import Image from "next/image";

const Banner = ({bannerData}) => {
  console.log(bannerData)
  return (
    <div className="banner">
      <Image
        src={bannerData.src}
        alt="Banner"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
      ></Image>
      <div className={bannerData.textClass}>
        <div className={bannerData.titleClass}>{bannerData.title}</div>
        <div className={bannerData.subTitleClass}>{bannerData.subTitle}</div>
      </div>
    </div>
  );
};

export default Banner;
