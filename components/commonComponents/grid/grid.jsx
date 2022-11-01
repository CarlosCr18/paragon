import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap.js";


const Grid = ({gridData}) => {
  const itemsRef = useRef([]);
  itemsRef.current = [];

  useEffect(()=>{

    if(!gridData.animate)return;

    //gridCardInfo animation

    itemsRef.current.map((item, index) => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 70%",
          end: "top 100%",
        }
      });
      tl.fromTo(
        item,
        {
          autoAlpha: 0,
          clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
        },
        {
          autoAlpha: 1,
          ease: "power2",
          duration: 0.35,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }
      );
      tl.fromTo(
        item.querySelectorAll(".gridCard"),
        { x: 100, autoAlpha: 0 },
        {
          x: 0,
          ease: "power4",
          autoAlpha: 1,
          duration: 0.35,
        }
      );
    });
  },[JSON.stringify(itemsRef.current)])

  const addToRefs = (item) => {
    if (item) {
      itemsRef.current.push(item);
    }
  };
  return (
    <div className={"gridContainer "+ gridData.className?.gridContainer}>
      {gridData.card && gridData.card.map((element,index) => {
        return (
          <div key={element.text+index} className={"gridCard "+ gridData.className?.gridCard} ref={addToRefs}>
            {element?.image && <div className="gridCardImage">
            <Image
              src={element.image}
              alt="image"
              width="100%"
              height="50%"
              layout="responsive"
              objectFit="cover"
            ></Image>
            </div>}

            <div className={"gridCardInfo "+ gridData.className?.gridCardInfo}>
              <div className={"gridCardTitle "+ gridData.className?.gridCardTitle}>{element.title.toUpperCase()}</div>
              {element.text && <div className={"gridCardText "+ gridData.className?.gridCardText}>{element.text}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
