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
  const [categorys, setCategorys] = useState(null);

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

  useEffect(() => {
    let [...categorys] = new Set([...portfolio.map((items) => items.category)]);
    setCategorys(categorys);
  }, [portfolio]);

  return (
    <Layout>
      <div className='mi-about mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Portfolio' />
          <ul className='d-flex list-unstyled mb-5 flex-wrap'>
            <li className='mb-2'>
              <button
                onClick={() => setCategory('all')}
                className={`${category === 'all' && ' active'} text-capitalize`}
              >
                All
              </button>
            </li>
            {categorys &&
              categorys.map((items,i) => (
                <li className='mx-1' key={i}>
                  <button
                    onClick={() => setCategory(items)}
                    className={`${
                      category === items && 'active'
                    } text-capitalize`}
                  >
                    {items}
                  </button>
                </li>
              ))}
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
