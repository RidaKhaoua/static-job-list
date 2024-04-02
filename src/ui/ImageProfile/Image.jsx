/* eslint-disable react/prop-types */
import "./Image.css"
function Image({url, alt}) {
  return (
    <img className="image" src={url} alt={alt}/>
  )
}

export default Image