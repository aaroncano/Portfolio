import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { HeroBackground } from '@/components/Hero/HeroBackground';
import { ProjectsCards } from '@/components/Projects/ProjectsCards';
import { Contact } from '@/components/Contact/Contact';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Flex } from '@mantine/core';
// eslint-disable-next-line no-duplicate-imports
import { useMantineTheme } from '@mantine/core';

export function HomePage() {
  const theme = useMantineTheme();
  return (
    <>
      <Flex direction="column" align="center" justify="center"  mih="100vh" style={{ backgroundColor: theme.colors.dark[8] }}> 
        <HeaderSimple />
        <HeroBackground />
        <AboutMe />
        <ProjectsCards />
        <Contact />  
      </Flex>

    </>
  );
}
