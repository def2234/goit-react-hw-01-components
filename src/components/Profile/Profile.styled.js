import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 300px;

  box-shadow: 0px 0px 2px 1px rgb(0 0 0 / 20%);
`;

export const ContainerAvatar = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  display: inline-block;
  border-radius: 100%;
  margin-top: 30px;

  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  margin: 0;
  color: black;
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;
`;

export const AvatarDescription = styled.p`
  margin: 0;
  margin-top: 10px;
  color: #757575;
  font-size: 17px;
  font-weight: 500;
`;

export const StatsList = styled.ul`
  height: 80px;
  margin: 0;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  background-color: #f2eded;
  border-top: 1px solid #ded7d7;
`;

export const StatsListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100px;
  &:not(:last-child) {
    border-right: 1px solid #ded7d7;
  }
`;

export const StatsItemText = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #757575;
`;

export const StatsItemValue = styled.span`
  font-size: 15px;
  font-weight: 500;
`;
