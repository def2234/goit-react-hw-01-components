import { Profile } from '../components/Profile';
import user from '../user.json';
import { Statistics } from '../components/Statistics';
import data from '../data.json';
import { FriendList } from '../components/FriendList';
import friends from '../friends.json';
import { TransactionHistory } from '../components/TransactionHistory';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
