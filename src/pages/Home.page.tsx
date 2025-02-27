import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { HeroBackground } from '@/components/Hero/HeroBackground';
import { ProjectsCards } from '@/components/Projects/ProjectsCards';
import { Contact } from '@/components/Contact/Contact';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Flex } from '@mantine/core';

export function HomePage() {
  return (
    <>
      <Flex direction="column" align="center" justify="center"  mih="100vh"> 
        <HeaderSimple />
        <HeroBackground />
        <AboutMe />
        <ProjectsCards />
        <Contact />  
      </Flex>

    </>
  );
}
