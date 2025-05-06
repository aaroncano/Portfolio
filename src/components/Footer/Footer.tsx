import { Button, Flex, Stack, Text } from '@mantine/core';
import { IconArrowBigUp } from '@tabler/icons-react';
import classes from './Footer.module.css';

export function Footer() {
  const scrollToTop = () => {
    const helloSection = document.querySelector('#hello');
    if (helloSection) {
      helloSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Stack align="center" className={classes.wrapper}>
      <Flex className={classes.inner} mb="xl">
        <Button 
          variant='subtle' 
          mb="md" 
          color='green'
          onClick={scrollToTop}
        >
          <Text mr="xs" size='xl'>🚀</Text>
          <IconArrowBigUp size={24}/>
        </Button>
        <Text className={classes.text}>
          © 2025 aaroncano.com
        </Text>
      </Flex>
    </Stack> 
  );
}