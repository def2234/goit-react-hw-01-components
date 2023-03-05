import PropTypes from 'prop-types';
import {
  Section,
  TextTitle,
  ListItem,
  ListData,
  SpanPercentage,
  SpanLabel,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title ? <TextTitle>{title}</TextTitle> : null}

      <ListData>
        {stats.map(stat => {
          return (
            <ListItem key={stat.id}>
              <SpanLabel>{stat.label}</SpanLabel>
              <SpanPercentage>{stat.percentage}%</SpanPercentage>
            </ListItem>
          );
        })}
      </ListData>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
