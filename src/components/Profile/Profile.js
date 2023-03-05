import PropTypes from 'prop-types';
import {
  Img,
  ContainerAvatar,
  Name,
  AvatarDescription,
  MainContainer,
  StatsList,
  StatsListItem,
  StatsItemText,
  StatsItemValue,
} from './Profile.styled.js';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <MainContainer>
      <ContainerAvatar>
        <Img src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <AvatarDescription>@{tag}</AvatarDescription>
        <AvatarDescription>{location}</AvatarDescription>
      </ContainerAvatar>

      <StatsList>
        <StatsListItem>
          <StatsItemText>Followers</StatsItemText>
          <StatsItemValue>{stats.followers}</StatsItemValue>
        </StatsListItem>
        <StatsListItem>
          <StatsItemText>Views</StatsItemText>
          <StatsItemValue>{stats.views}</StatsItemValue>
        </StatsListItem>
        <StatsListItem>
          <StatsItemText>Likes</StatsItemText>
          <StatsItemValue>{stats.likes}</StatsItemValue>
        </StatsListItem>
      </StatsList>
    </MainContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
