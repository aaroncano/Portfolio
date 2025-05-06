import React from 'react';
import { Switch } from '@mantine/core';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  const isEnglish = i18n.language === 'en';

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLang = event.currentTarget.checked ? 'en' : 'es';
    i18n.changeLanguage(newLang); 
  };



  return (
    <Switch
        checked={isEnglish}
        onChange={handleLanguageChange}
        size="md"
        radius="md"
        labelPosition="left"
        styles={{
            label: { fontSize: '22px' },
          }}
        label={isEnglish ? '🇺🇸' : '🇲🇽'}
        onLabel="EN"
        offLabel="ES"
        color="rgba(85, 173, 83, 0.41)"
        aria-label={t('changeLanguage', 'Cambiar idioma')}
    />
  );
}

export default LanguageSwitcher;