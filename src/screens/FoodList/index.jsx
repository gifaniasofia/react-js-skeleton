import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  Button,
  Card,
  ErrorState,
  Loader,
  Text
} from 'components';
import { endpoints } from 'constant';

import { customApiRequest } from 'utils';

import { FoodListStyle } from './style';

const FoodListPage = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dataFoodList, setDataFoodList] = useState([]);

  useEffect(() => {
    customApiRequest(
      endpoints.getFoodsByCategory(),
      { c: categoryName },
      () => setLoading(true),
      () => setLoading(false),
      response => {
        setDataFoodList(response.data.meals);
      },
      error => setError(JSON.stringify(error))
    );
  }, []);

  const onClickToFoodDetail = idMeal => {
    navigate(`/foods/${ idMeal }`);
  };

  const renderPage = () => {
    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <ErrorState />;
    }

    return (
      <FoodListStyle>
        <Text
          type='h1'
          size='l'
          align='center'
          weight={ 700 }
        >{ categoryName }</Text>

        <div className='food-list'>
          { dataFoodList.map((meal, index) => (
            <Card key={ index } className='food-card'>
              <img
                alt={ meal.strMeal }
                src={ meal.strMealThumb }
                className='image-thumbnail'
              />

              <Text>{ meal.strMeal }</Text>

              <Button onClick={ () => onClickToFoodDetail(meal.idMeal) }>Lihat Detail</Button>
            </Card>
          )) }
        </div>
      </FoodListStyle>
    );
  };

  return renderPage();
};

export default FoodListPage;
