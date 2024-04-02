/* eslint-disable react/prop-types */
import "./Container.css";

function Container({children}) {
  return (
    <div className="container">{children}</div>
  )
}

export default Container