import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sectiontitle from '../components/Sectiontitle';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import PortfoliosView from '../components/PortfoliosView';

function Portfolios() {
  const [portfolio, setPortfoios] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [portfoliosPerPage] = useState(12);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    let mounted = true;
    axios.get('/api/portfolios').then((response) => {
      if (mounted) {
        setPortfoios(response.data);
      }
    });
    return () => (mounted = false);
  }, [portfolio]);

  let portfolios = portfolio.filter(
    (data) => category === 'all' || data.category.includes(category)
  );
  const indexOfLastPortfolios = currentPage * portfoliosPerPage;
  const indexOfFirstPortfolios = indexOfLastPortfolios - portfoliosPerPage;
  const currentPortfolios = portfolios.slice(
    indexOfFirstPortfolios,
    indexOfLastPortfolios
  );

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };
  console.log('protfolio data ', portfolios);

  return (
    <Layout>
      <div className='mi-about mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Portfolio' />
          <ul className='d-flex list-unstyled'>
            <li>
              <button onClick={() => setCategory('all')}>All</button>
            </li>
            <li>
              <button onClick={() => setCategory('website')}>Website</button>
            </li>
            <li>
              <button onClick={() => setCategory('javascript')}>
                Javascript
              </button>
            </li>
            <li>
              <button onClick={() => setCategory('python')}>Python</button>
            </li>
            <li>
              <button onClick={() => setCategory('datta-viz')}>
                Datta-viz
              </button>
            </li>
          </ul>
          {<PortfoliosView portfolios={currentPortfolios} />}
          {!(portfolios.length > portfoliosPerPage) ? null : (
            <Pagination
              className='mt-50'
              itemsPerPage={portfoliosPerPage}
              totalItems={portfolios.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Portfolios;
