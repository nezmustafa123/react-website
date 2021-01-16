import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faWordpress,
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faNodeJs,
  faSass
} from '@fortawesome/free-brands-svg-icons';

import d3Icon from '../d3.js-icon.svg'

library.add(faWordpress);
library.add(faHtml5);
library.add(faCss3);
library.add(faJs);
library.add(faReact);
library.add(faNodeJs);
library.add(faSass);

function Progress(props){
  const Icon = props.icon;
  const Title = props.title;

  return (
    <div className="mi-progress">
      <h6 className="mi-progress-title">{props.title}</h6>
      {Title == "D3.js" ? <img src={d3Icon} width="18px" className="d3js-icon" /> : <FontAwesomeIcon icon={["fab", Icon]} />}
    </div>
   
  );
}





export default Progress;
