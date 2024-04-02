/* eslint-disable react/prop-types */
import { useDataUserContext } from "../../context/dataContext";
import { useActiveState } from "../../context/Statescontext";
import Image from "../../ui/ImageProfile/Image";
import Tags from "../../ui/Tags/Tags";
import Title from "../../ui/Title/Title";
import { v4 as uuidv4 } from "uuid";
import { animated, useSpring } from "react-spring";
import { useEffect, useRef } from "react";

const  Card = ({ data, delay  }) => {
  const cardRef = useRef(null);
  const { handelShowActiveStates } = useActiveState();
  const {dataUserFiltred, handelFillter, handelClear, handelAddState } = useDataUserContext();
  const allInfo = [...data.languages, ...data.tools, data.role, data.level];
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
    delay,
  });

  useEffect(() => {
    
    if(dataUserFiltred.length > 0) {
      props.opacity.set(0);
    }
    

  },[props, dataUserFiltred.length])
  
  const displayAllInfo = allInfo.map((lang) => {
    return (
      <Tags
        key={uuidv4()}
        tageName={lang}
        style={{ borderRadius: "6px" }}
        handelAddState={handelAddState}
        handelShowActiveStates={handelShowActiveStates}
        handelFillter={handelFillter}
        handelClear={handelClear}
      />
    );
  });

  return (
    <animated.div ref={cardRef}  style={props}>
      <div  className={`card ${data.new && data.featured ? "border-left" : ""}`}>
        <div className="card__infos">
          <Image url={data.logo} alt="logo" />
          <div className="card__info">
            <div className="card__company-name">
              <p>{data.company}</p>
              {data.new && (
                <Tags
                  tageName="NEW!"
                  style={{
                    borderRadius: "50px",
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                    height: "27px",
                    padding: "0px 10px",
                  }}
                />
              )}
              {data.featured && (
                <Tags
                  tageName="FEATURED"
                  style={{
                    borderRadius: "50px",
                    backgroundColor: "var(--color-very-dark-grayish)",
                    color: "white",
                    height: "27px",
                    padding: "0px 10px",
                  }}
                />
              )}
            </div>
            <div className="card__position">
              <Title title={data.position} />
            </div>
            <div className="card__timing">
              <span>{data.postedAt}</span>
              <span className="dot"></span>
              <span>{data.contract}</span>
              <span className="dot"></span>
              <span>{data.location}</span>
            </div>
          </div>
        </div>
        <hr />
        <div className="card__tags">{displayAllInfo}</div>
      </div>
    </animated.div>
  );
}

export default Card;
