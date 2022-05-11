import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  ErrorState,
  Loader,
  Text
} from 'components';
import { endpoints } from 'constant';

import { customApiRequest } from 'utils';

import { FoodDetailStyle } from './style';

const FoodDetailPage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dataFoodDetail, setDataFoodDetail] = useState(null);

  useEffect(() => {
    customApiRequest(
      endpoints.getFoodDetail(),
      { i: id },
      () => setLoading(true),
      () => setLoading(false),
      response => {
        const mealDetail = response.data.meals && response.data.meals.length
          ? response.data.meals[0]
          : null;

        if (mealDetail) {
          const arrInstructions = mealDetail.strInstructions.split('\r\n').filter(item => {
            // eslint-disable-next-line
            return !(parseInt(item) == item) && String(item).trim();
          });

          let arrIngred = [];
          for (let i = 1; i <= 20; i++) {
            if (mealDetail[`strIngredient${ i }`]) {
              arrIngred.push(mealDetail[`strIngredient${ i }`]);
            }
          }

          setDataFoodDetail({
            ...mealDetail,
            arrInstructions,
            arrIngred
          });
        } else {
          setDataFoodDetail(null);
        }
      },
      error => setError(JSON.stringify(error))
    );
  }, []);

  const renderContent = () => {
    if (dataFoodDetail) {
      return (
        <>
          <Text
            type='h1'
            size='l'
            align='center'
            weight={ 700 }
          >{ dataFoodDetail?.strMeal }</Text>

          <div className='wrapper-image'>
            <img
              alt={ dataFoodDetail?.strMeal }
              src={ dataFoodDetail?.strMealThumb }
              className='food-image'
            />

            <div className='spacer'>
              <Text weight={ 600 }>Ingredients</Text>

              <ul className='list-disc'>
                { dataFoodDetail.arrIngred.map((ingred, index) => (
                  <li key={ index }>
                    <Text>{ ingred }</Text>
                  </li>
                )) }
              </ul>
            </div>
          </div>

          <div className='content'>
            <div className='spacer'>
              <Text weight={ 600 }>Instructions</Text>

              <ul className='list-decimal'>
                { dataFoodDetail.arrInstructions.map((instruction, index) => (
                  <li key={ index }>
                    <Text>{ instruction }</Text>
                  </li>
                )) }
              </ul>
            </div>
          </div>
        </>
      );
    }

    return null;
  };

  if (loading) return <Loader />;

  if (error) return <ErrorState />;

  return (
    <FoodDetailStyle>
      { renderContent() }
    </FoodDetailStyle>
  );
};

export default FoodDetailPage;
