import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.headerPrimary};
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
  padding: 0px 50px;
  .pizza-icon {
    width: 100px;
  }
  .food-icon {
    width: 50px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.headerIconBorder};
  }
  svg {
    fill: ${(props) => props.theme.headerIconBorder};
  }
  @media (max-width: 900px) {
    flex-direction: column;
    h1 {
      font-size: 22px;
    }
    .points-wrapper {
      position: relative;
      top: -42px;
    }
    .header-content-wrapper {
      align-items: center;
    }
  }
`;
export const HeaderContentWrapper = styled.div`
  display: inline-flex;
`;
export const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 40px;
  font-weight: bold;
`;
export const HeaderSubtitle = styled.h3`
  font-size: ${({ size }) => size || '20px'};
  color: ${(props) => props.theme.headerTitle};
  font-weight: bold;
`;
export const HeaderPointsWrapper = styled.div`
  display: flex;
`;
export const HeaderPointsTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;
export const HeaderPoints = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const HeaderPointsValue = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.white};
  margin-right: 5px;
`;
