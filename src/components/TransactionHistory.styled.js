import styled from 'styled-components';

export const Table = styled.table`
  margin-left: 50px;
`;

export const TableTitle = styled.th`
  font-size: 20px;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

export const TableText = styled.td`
  font-size: 15px;
  text-align: center;
  padding: 5px 0;
`;
