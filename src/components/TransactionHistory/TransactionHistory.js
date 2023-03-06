import PropTypes from 'prop-types';
import { Table, TableTitle, TableText } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>
      {items.map(item => {
        return (
          <tbody key={item.id}>
            <tr>
              <TableText>{item.type}</TableText>
              <TableText>{item.amount}</TableText>
              <TableText>{item.currency}</TableText>
            </tr>
          </tbody>
        );
      })}
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
