import PropTypes from 'prop-types';
import { ListItem, TextName, SpanOnline, List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <ListItem key={friend.id}>
            <SpanOnline isOnline={friend.isOnline}></SpanOnline>
            <img src={friend.avatar} alt={friend.name} width="48" height="48" />
            <TextName>{friend.name}</TextName>
          </ListItem>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};
