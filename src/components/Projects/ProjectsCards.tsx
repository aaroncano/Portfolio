import { IconBrandUnity, IconBrandCSharp, IconBrandCss3, IconBrandJavascript, IconHtml, IconBrandBootstrap, IconBrandDjango, IconBrandPython, IconBrandMantine, IconBrandTypescript, IconBrandReact, IconDatabaseCog } from '@tabler/icons-react';
import {
  SimpleGrid,
  Stack,
  Title,
  Text
} from '@mantine/core';
import classes from './ProjectsCards.module.css';
import { CarouselCard } from '../CarouselCard/CarouselCard';

import reviere from '../../img/ArtReviere/reviere.jpg';
import reviere2 from '../../img/ArtReviere/reviere2.jpg';
import reviere3 from '../../img/ArtReviere/reviere3.jpg';
import reviere4 from '../../img/ArtReviere/reviere4.jpg';



import SAED from '../../img/SAED/SAED4.png';
import SAED1 from '../../img/SAED/SAED1.png';
import SAED2 from '../../img/SAED/SAED2.png';
import SAED3 from '../../img/SAED/SAED3.png';
import SAED4 from '../../img/SAED/SAED.png';
import SAED5 from '../../img/SAED/SAED5.png';

import camaron3 from '../../img/aaroncamaron/camaron3.png';
import camaron2 from '../../img/aaroncamaron/camaron2.png';
import camaron from '../../img/aaroncamaron/camaron.jpg';
import camaron4 from '../../img/aaroncamaron/camaron4.png';

import octopuses3 from '../../img/AOB/octopuses3.png';
import octopuses2 from '../../img/AOB/octopuses2.png';
import octopuses from '../../img/AOB/octopuses.png';
import octopuses4 from '../../img/AOB/octopuses4.png';

import astron from '../../img/Astron/astron.png';
import astron2 from '../../img/Astron/astron2.png';
import astron3 from '../../img/Astron/astron3.png';

const mockdata = [
  {
    urlImages: [reviere4, reviere2, reviere, reviere3],
    title: 'Art Reverie',
    year: '2024 - Present',
    description: (
      <>
        <Text size="sm" fw={600} span c="#cdcdcd">Web app made to showcase public-domain 
        artworks</Text> and provide information about them, with capabilities for searching 
        individual artworks and exploring collections.
      </>
    ),
    skills: [ 
      { icon: <IconBrandReact size={20} />, label: 'React' },
      
      { icon: <IconBrandTypescript size={20} />, label: 'TypeScript'},

      { icon: <IconBrandDjango size={20} />, label: 'Django'},

      { icon: <IconDatabaseCog size={20} />, label: 'SQLite' },

      { icon: <IconBrandMantine size={20} />, label: 'Mantine'},
    ],
    githubURL: "https://github.com/aaroncano/Art-Reverie-App",
    visitURL: 'https://github.com/aaroncano/Art-Reverie-App',
    available: false

  },
  {
    urlImages: [SAED4, SAED, SAED1, SAED2, SAED5, SAED3],
    title: 'Statistical Data Analysis System',
    year: '2023 - 2024',
    description: (
      <>
        <Text size="sm" fw={600} span c="#cdcdcd">Developed for educators and researchers at IPN*</Text>. 
        Web app designed to provide a straightforward approach 
        to <Text size="sm" fw={600} span c="#cdcdcd">performing statistical analysis based on CSV files, from basic metrics to ML model training.</Text>
        <br/> <br/>
        *Instituto Politécnico Nacional UPIIZ
      </>
    ),
    skills: [
      { icon: <IconBrandPython size={20} />, label: 'Python' },
      
      { icon: <IconBrandJavascript size={20} />, label: 'JavaScript' },

      { icon: <IconBrandDjango size={20} />, label: 'Django' },

      { icon: <IconBrandBootstrap size={20} />, label: 'Bootstrap' },

      
    ],
    githubURL: "https://github.com/aaroncano/IPN-Sistema_analisis_estadistico_datos",
    visitURL: 'https://github.com/aaroncano/IPN-Sistema_analisis_estadistico_datos',
    available: false
    
  },

  
  {
    urlImages:[camaron3, camaron2, camaron, camaron4],
    title: '@aaroncamaron',
    year: '2024',
    description: (
      <>
        <Text size="sm" fw={600} span c="#cdcdcd">Single-page website</Text> to showcase my work as a pixel artist. Built with pure HTML, CSS, and JavaScript.
      </>
    ),
    skills: [
      { icon: <IconHtml size={20} />, label: 'HTML' },

      { icon: <IconBrandJavascript size={20} />, label: 'JavaScript' },

      { icon: <IconBrandCss3 size={20} />, label: 'CSS' },

    ],
    githubURL: "https://github.com/aaroncano/aaroncamaron",
    visitURL: 'https://aaroncamaron.netlify.app/',
    available: true

  },
  {
    urlImages:[octopuses3, octopuses2, octopuses, octopuses4],
    title: 'Amazing Octopuses Battle',
    year: '2021',
    description: (
      <>
        <Text size="sm" fw={600} span c="#cdcdcd">2-player local video game</Text>. 
        Inspired by Duck Game. Features <Text size="sm" fw={600} span c="#cdcdcd">octopuses battling with unique weapons, 
        wall-climbing/clinging mechanics and double jumps for chaotic fun</Text> Best of 9 wins. 
      </>
    ),
    skills: [
      { icon: <IconBrandUnity size={20} />, label: 'Unity' },

      { icon: <IconBrandCSharp size={20} />, label: 'C#' },

    ],
    githubURL: "https://github.com/aaroncano/AmazingOctopusesBattle",
    visitURL: 'https://aaroncanoc.itch.io/amazing-octopuses-battle',
    available: true

  },
  {
    urlImages:[astron, astron2, astron3],
    title: 'Astron',
    year: '2020',
    description: (
      <>
        2D video game. <Text size="sm" fw={600} span c="#cdcdcd">Fight against multiple enemy types, collect power-ups 
        and unlock abilities. </Text> Difficulty increases with each round. Endless gameplay.
        <br/> <br/>
        *Mouse recommended for better experience. 
      </>
    ),
    skills: [
      { icon: <IconBrandUnity size={20} />, label: 'Unity' },

      { icon: <IconBrandCSharp size={20} />, label: 'C#' },
    ],
    githubURL: "https://github.com/aaroncano/Astron",
    visitURL: 'https://aaroncanoc.itch.io/astron',
    available: true

  },
];

export function ProjectsCards() {
  // const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <CarouselCard urlImages={feature.urlImages} title={feature.title} year={feature.year} description={feature.description} skills={feature.skills} githubURL={feature.githubURL} visitURL={feature.visitURL} available={feature.available}/>
  ));
 
  return (
    <Stack className={classes.wrapper} mt="md" align='center'>
      <Stack className={classes.inner}>

        <Title className={classes.title}>
        Projects
        </Title>
        <Text className={classes.description} mt="md" mb="xl">
          Projects I have worked on (The Data Analysis System was a team project):
        </Text>
        <SimpleGrid mt="xl  " w="100%" spacing="md" cols={{ base: 1, md: 2 }}>
          {features}
        </SimpleGrid>

      </Stack>
    </Stack>

  );
}