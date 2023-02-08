import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentLanguage, setDarkMode } from '../../../store/main/mainActions/mainActions';
import { darkModeSelector } from '../../../store/main/mainReducerSelectors';
import i18n from '../../../utils/i18n/i18n';
import { SupportedLanguages } from '../../../utils/i18n/i18n.types';
import BottomModal from '../../commons/BottomModal/BottomModal';
import Box from '../../designSystem/Box/Box';
import Pressable from '../../designSystem/Pressable/Pressable';
import Text from '../../designSystem/Text/Text';
import SettingsLanguageItem from './SettingsItem/SettingsLanguageItem/SettingsLanguageItem';
import SettingsSwitchItem from './SettingsItem/SettingsSwitchItem/SettingsSwitchItem';

const SettingsScreen = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const isDarkMode = useSelector(darkModeSelector);
  const darkModeSwitch = useCallback(
    () => setDarkMode(!isDarkMode)(dispatch),
    [isDarkMode, dispatch]
  );

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const changeLanguage = (language: SupportedLanguages) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language)(dispatch);
    bottomSheetModalRef.current?.dismiss();
  };

  return (
    <Box testID="settingsScreen" flex={1} paddingVertical="sToM">
      <SettingsSwitchItem
        label={t('list.darkMode', { ns: 'settings' })}
        toggleSwitch={darkModeSwitch}
        isEnabled={isDarkMode}
      />
      <SettingsLanguageItem
        label={t('list.language', { ns: 'settings' })}
        value={t(`languages.${i18n.language}`, { ns: 'commons' })}
        onPress={() => bottomSheetModalRef.current?.present()}
      />
      <BottomModal ref={bottomSheetModalRef} snapPoints={['50%', '100%']} title="Account">
        {Object.values(SupportedLanguages).map((language, index) => {
          // We can also highlight the current selected language
          // const isCurrentLanguage = language === i18n.language
          return (
            <Pressable
              key={index}
              accessibilityLabel={`bottomModalLanguageItem#${language}`}
              padding="sToM"
              onPress={() => changeLanguage(language)}
              // {...(isCurrentLanguage && {
              //   backgroundColor: 'selectedItem'
              // })}
            >
              <Text textAlign="center" fontSize={16}>
                {t(`languages.${language}`, { ns: 'commons' })}
              </Text>
            </Pressable>
          );
        })}
      </BottomModal>
    </Box>
  );
};

export default SettingsScreen;
