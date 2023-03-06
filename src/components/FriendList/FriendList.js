import PropTypes from 'prop-types';
import { ListItem, TextName, SpanOnline, List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </List>
  );
};

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <SpanOnline isOnline={isOnline}></SpanOnline>
      <img src={avatar} alt={name} width="48" height="48" />
      <TextName>{name}</TextName>
    </ListItem>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
