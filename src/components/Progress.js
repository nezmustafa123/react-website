import React from "react";
import LineIcon from "react-lineicons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Progress(props){
  const Icon = props.icon;
  return (
    <div className="mi-progress">
      <h6 className="mi-progress-title">{props.title}</h6>
      {Icon ? <FontAwesomeIcon icon={Icon} />
 : null}
    </div>
   
  );
}





export default Progress;
