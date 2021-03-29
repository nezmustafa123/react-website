import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import * as Icon from 'react-feather';
import Slider from 'react-slick';

const ProtfolioDetails = (props) => {
  const [portfolio, setPortfoios] = useState([]);
  const [details, setDetails] = useState([]);
  const {
    match: {
      params: { id },
    },
  } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  useEffect(() => {
    let mounted = true;
    axios.get('/api/portfolios').then((response) => {
      if (mounted) {
        setPortfoios(response.data);
      }
    });
    return () => (mounted = false);
  }, [portfolio]);

  useEffect(() => {
    setDetails(
      portfolio && portfolio.filter((item) => item.id === parseInt(id))[0]
    );
  }, [portfolio,id]);

  return (
    <Layout>
      <div className='mi-blog-details mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <div class='row'>
            <div class='col-md-7'>
              {' '}
              <h3>{details?.title}</h3>
              <p className='mt-5'>{details?.description}</p>
            </div>
            <div class='col-md-5'>
              <div className='screen-shot'>
                <Slider {...settings}>
                  {details?.largeImageUrl &&
                    details?.largeImageUrl.map((items) => (
                      <img src={items} alt='screenshot' className='img-fluid' />
                    ))}
                </Slider>
              </div>
              <div className='technologies'>
                <h6>Technologies Used</h6>
                <ul className='list-unstyled d-flex flex-wrap'>
                  {details?.technologies &&
                    details?.technologies.map((items) => (
                      <li className='mr-3'>{items},</li>
                    ))}
                </ul>
              </div>
              <ul className='list-unstyled d-flex flex-wrap'>
                <li className='mr-4'>
                  <a href={details?.liveProject}>
                    <Icon.Eye />
                  </a>
                </li>
                <li>
                  <a href={details?.github}>
                    <Icon.Code />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withRouter(ProtfolioDetails);
