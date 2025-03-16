import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { HeroBackground } from '@/components/Hero/HeroBackground';
import { ProjectsCards } from '@/components/Projects/ProjectsCards';
import { Footer } from '@/components/Footer/Footer';
import { Contact } from '@/components/Contact/Contact';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Flex } from '@mantine/core';
// eslint-disable-next-line no-duplicate-imports
import { useMantineTheme } from '@mantine/core';

export function HomePage() {
  const theme = useMantineTheme();
  return (
    <>
      <Flex direction="column" align="center" justify="center"  mih="100vh" style={{ backgroundColor: theme.colors.dark[8] }} bg={{base: theme.colors.dark[8]}} > 
        <header>
          <HeaderSimple />
        </header>
        <main>

          <section id="hello">
            <HeroBackground />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="projects">
            <ProjectsCards />
          </section>
          <section id="contact">
            <Contact />
          </section>

        </main>


        <footer>
          <Footer />
        </footer> 
      </Flex>

    </>
  );
}
