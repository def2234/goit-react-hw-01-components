import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Section = styled.section`
  margin-left: 50px;
`;

export const TextTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: #828181;
  text-align: center;
`;

export const ListData = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 30px;
  display: flex;
`;

export const ListItem = styled.li`
  list-style: none;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 10px;
  background-color: ${getRandomHexColor};
`;

export const SpanPercentage = styled.span`
  font-size: 25px;
`;

export const SpanLabel = styled.span`
  margin-bottom: 10px;
`;
