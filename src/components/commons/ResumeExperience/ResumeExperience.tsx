import { Fragment, useMemo } from 'react';
import Box from '../../designSystem/Box/Box';
import Text from '../../designSystem/Text/Text';
import { ResumeExperienceProps } from './ResumeExperience.types';

const ResumeExperience = ({ title, date, place, stack, description, features }: ResumeExperienceProps) => {

  const hasSameBeginAndEnd = useMemo(() => date?.begin === date?.end, [date])

  return (
    <Box marginBottom="m">
      {date && (
        <Text color="textSubdued">
          {date.begin} {!hasSameBeginAndEnd && `- ${date.end}`}
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
      {description && 
        <Text fontSize={15} marginBottom="s">
          {description}
        </Text>
      }
      {features.map((item, index) => (
        <Text key={`feature#${index}`} fontSize={15}>
          • {item}
        </Text>
      ))}
    </Box>
  );
};

export default ResumeExperience;
