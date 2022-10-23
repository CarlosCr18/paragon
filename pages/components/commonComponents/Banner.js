import Image from "next/image";

const Banner = ({bannerData}) => {
  return (
    <div className={"banner " + bannerData.class.banner}>
      <Image
        src={bannerData.src}
        alt="Banner"
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="cover"
      ></Image>
      <div className={`textContainer ` + bannerData.class.textContainer}>
        <div className={`titleClass ` + bannerData.class.title}>{bannerData.title}</div>
        <div className={`subTitleClass ` + bannerData.class.subTitle}>{bannerData.subTitle}</div>
      </div>
    </div>
  );
};

export default Banner;
