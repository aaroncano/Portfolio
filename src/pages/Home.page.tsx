import { HeaderSimple } from '@/components/Header/HeaderSimple';
import { HeroBackground } from '@/components/Hero/HeroBackground';
import { ProjectsCards } from '@/components/Projects/ProjectsCards';
import { Footer } from '@/components/Footer/Footer';
import { Contact } from '@/components/Contact/Contact';
import { AboutMe } from '@/components/AboutMe/AboutMe';
import { Flex } from '@mantine/core';
// eslint-disable-next-line no-duplicate-imports
import { useMantineTheme } from '@mantine/core';
import { motion } from 'framer-motion';

const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 }, 
};
const slideInFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },  
};


export function HomePage() {
  const theme = useMantineTheme();
  return (
    <>
      <Flex direction="column" align="center" justify="center"  mih="100vh" style={{ backgroundColor: theme.colors.dark[8] }} bg={{base: theme.colors.dark[8]}}> 
        <header>
          <HeaderSimple />
        </header>
        <main>
    
          <section id="hello">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} 
              variants={slideInFromLeft}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <HeroBackground />
            </motion.div>
            
          </section>    

          <section id="projects">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }} 
              variants={slideInFromRight}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ProjectsCards />
            </motion.div>
          </section>

          <section id="about">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} 
                variants={slideInFromLeft}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <AboutMe />
            </motion.div>
          </section>

          <section id="contact">
          <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }} 
                variants={slideInFromRight}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Contact />
            </motion.div>
          </section>

        </main>


        <footer>
          <Footer />
        </footer> 
      </Flex>

    </>
  );
}
