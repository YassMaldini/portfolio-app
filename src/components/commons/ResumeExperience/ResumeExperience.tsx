import { Fragment } from 'react';
import Box from '../../designSystem/Box/Box';
import Text from '../../designSystem/Text/Text';
import { ResumeExperienceProps } from './ResumeExperience.types';

const ResumeExperience = ({ title, date, place, stack, features }: ResumeExperienceProps) => {
  return (
    <Box marginBottom="m">
      {date && (
        <Text color="textSubdued">
          {date.begin} - {date.end}
        </Text>
      )}
      <Text fontSize={20} fontFamily="Roboto-Medium">
        {title}
      </Text>
      {Boolean(place) && <Text color="textSubdued">{place}</Text>}
      <Text marginBottom="s">
        Stack:{' '}
        {stack.map((item, index) => (
          <Fragment key={`stack#${index}`}>
            <Text fontFamily="Roboto-Medium" color="textHighlight">
              {item}
            </Text>
            {index < stack.length - 1 && ' / '}
          </Fragment>
        ))}
      </Text>
      {features.map((item, index) => (
        <Text key={`feature#${index}`} fontSize={15}>
          • {item}
        </Text>
      ))}
    </Box>
  );
};

export default ResumeExperience;
