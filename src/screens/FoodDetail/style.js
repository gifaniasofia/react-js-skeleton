import Styled from 'styled-components';

export const FoodDetailStyle = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 50px;
  }

  .spacer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .list-disc {
    list-style-type: disc;
    margin-left: 18px;
  }

  .list-decimal {
    list-style-type: decimal;
    margin-left: 18px;
  }

  .wrapper-image {
    display: flex;
    gap: 40px;
    justify-content: center;
    margin-top: 50px;
  }

  .food-image {
    width: 250px;
    height: 250px;
    border-radius: 10px;
  }
`;