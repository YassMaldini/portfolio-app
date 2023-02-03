import { Trans, useTranslation } from 'react-i18next';
import Box from '../../../../designSystem/Box/Box';
import { SvgIcon } from '../../../../designSystem/SvgIcon/SvgIcon';
import Text from '../../../../designSystem/Text/Text';
import { HomeSkillCardProps } from './HomeSkillCard.types';

const HomeSkillCard = ({ i18nKey, icon }: HomeSkillCardProps) => {
  const { t } = useTranslation('home', { keyPrefix: 'skills' });

  return (
    <Box paddingHorizontal="m" marginBottom="m">
      <Box flexDirection="row" marginBottom="s">
        <Box
          backgroundColor="actionPrimary"
          borderRadius="xxl"
          justifyContent="center"
          alignItems="center"
          padding="s">
          <SvgIcon {...{ icon }} color="white" />
        </Box>
      </Box>
      <Text fontSize={22} fontFamily="Roboto-Medium" marginBottom="s">
        <Trans components={[<Text key="title" fontFamily="Roboto-Medium" color="textHighlight" />]}>
          {t(`${i18nKey}.title`)}
        </Trans>
      </Text>
      <Text color="textSubdued">{t(`${i18nKey}.description`)}</Text>
    </Box>
  );
};

export default HomeSkillCard;
