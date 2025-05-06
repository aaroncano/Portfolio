import { useState } from 'react';
import { Burger, Container, Group, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';

import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const links = [
  { link: '#hello', labelKey: 'header.hello' },
  { link: '#projects', labelKey: 'header.projects' },
  { link: '#about', labelKey: 'header.about' },
  { link: '#contact', labelKey: 'header.contact' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const { t } = useTranslation('translation');

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggle();
  };

  const items = links.map((link) => (
    <a
      key={link.link}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        scrollToSection(link.link);
      }}
    >
      {t(link.labelKey)}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
          <Group justify='space-between' w="100%">
            <Group gap={5} visibleFrom="xs">
              {items}
            </Group>
            <LanguageSwitcher />
          </Group>
          
        
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        
        <Transition transition="slide-right" duration={300} mounted={opened}>
          {(styles) => (
            <Paper
              className={classes.mobileMenu}
              style={styles}
              hiddenFrom="xs"
              pt="xl"
            >
              {items}
            </Paper>
          )}
        </Transition>
      </Container>
    </header>
  );
}