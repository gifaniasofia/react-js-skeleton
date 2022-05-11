import Styled from 'styled-components';

export const FoodListStyle = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  .food-list {
    display: grid;
    gap: 40px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 50px;
  }

  .food-card {
    display: flex;
    gap: 20px;
  }

  .image-thumbnail {
    width: 100px;
    height: 100px;
  }
`;