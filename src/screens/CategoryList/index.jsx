import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ErrorState,
  Loader,
  Text,
  Card
} from 'components';
import { endpoints } from 'constant';

import { customApiRequest } from 'utils';

import { CategoryListStyle } from './style';

const CategoryListPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dataCategories, setDataCategories] = useState([]);

  useEffect(() => {
    customApiRequest(
      endpoints.getFoodCategories(),
      null,
      () => setLoading(true),
      () => setLoading(false),
      response => {
        setDataCategories(response.data.categories);
      },
      error => setError(JSON.stringify(error))
    );
  }, []);

  const onClickCategory = categoryName => {
    navigate(`/categories/${ categoryName }`);
  };

  const renderPage = () => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorState />;
    }

    return (
      <CategoryListStyle>
        <Text
          type='h1'
          size='l'
          align='center'
          weight={ 700 }
        >Category</Text>

        <div className='category-list'>
          { dataCategories.map((category, index) => (
            <Card
              key={ index }
              className='category-card'
              onClick={ () => onClickCategory(category.strCategory) }
            >
              <img
                alt={ category.strCategory }
                src={ category.strCategoryThumb }
                className='image-thumbnail'
              />

              <Text>{ category.strCategory }</Text>
              <Text>{ category.strCategoryDescription }</Text>
            </Card>
          )) }
        </div>
      </CategoryListStyle>
    );
  };

  return renderPage();
};

export default CategoryListPage;
