import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  margin-left: 50px;
`;

export const TextName = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
`;

export const SpanOnline = styled.span`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const ListItem = styled.li`
  min-height: 40px;
  padding: 15px;
  width: 250px;

  display: flex;
  list-style: none;
  align-items: center;

  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
