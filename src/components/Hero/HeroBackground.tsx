import cx from 'clsx';
import { Button, Mark, Text, Title } from '@mantine/core';
import classes from './HeroBackground.module.css';

export function HeroBackground() {
  return (
    <div className={classes.wrapper}>

      <div className={classes.inner}>
        <Title className={classes.title}>
          <Mark color="red">I'm Aaron Cano</Mark>
        </Title>
        <Text component="span" c="white" className={classes.subtitle}>
          Full Stack Developer
        </Text>

        <Text size="lg" className={classes.description}>
        I craft web applications with seamless functionality and attention to detail.
        </Text>

        <div className={classes.controls}>
          <Button className={classes.control} variant="subtle" size="lg" color="green">  
            Contact
          </Button>
          <Button className={cx(classes.control)} size="lg" color="green" variant="light">
            Projects
          </Button>
        </div>
      </div>
    </div>
  );
}