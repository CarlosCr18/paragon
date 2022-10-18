import Image from "next/image";

const Grid = ({gridData}) => {
  return (
    <div className="gridContainer">
      {gridData && gridData.map((element) => {
        return (
          <div key={element.image} className="gridCard">
            <div className="gridCardImage">
            <Image
              src={element.image}
              alt="image"
              width="100%"
              height="50%"
              layout="responsive"
              objectFit="cover"
            ></Image>
            </div>

            <div className="gridCardInfo">
              <div className="gridCardTitle">{element.title.toUpperCase()}</div>
              <div className="gridCardText">{element.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
