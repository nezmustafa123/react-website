import React, { useState } from 'react';
import * as Icon from 'react-feather';
import FsLightbox from 'fslightbox-react';
import { Link } from 'react-router-dom';

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const { title, subtitle, imageUrl, largeImageUrl, id } = props.content;

  const handleToggler = (value) => {
    setToggler(value);
  };

  return (
    <div
      className={
        props.isVisible ? 'mi-portfolio mi-portfolio-visible' : 'mi-portfolio'
      }
    >
      <div className='mi-portfolio-image'>
        <img src={imageUrl} alt={title} />
        <ul>
          {!largeImageUrl ? null : (
            <li>
              <button onClick={() => handleToggler(!toggler)}>
                <Icon.ZoomIn />
              </button>
            </li>
          )}
        </ul>
      </div>
        <h5>
          <Link to={`/Protfolio-details/${id}`}>{title}</Link>
        </h5>
      {subtitle ? <h6>{subtitle}</h6> : null}
      {!largeImageUrl ? null : (
        <FsLightbox toggler={toggler} sources={largeImageUrl} />
      )}
    </div>
  );
}

export default Portfolio;
