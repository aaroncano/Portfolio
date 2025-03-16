import { useState } from 'react';
import { Burger, Container, Group, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '#hello', label: 'Hello' },
  { link: '#about', label: 'About' },
  { link: '#projects', label: 'Projects' },
  { link: '#contact', label: 'Contact' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const scrollToSection = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    toggle();
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        scrollToSection(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
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