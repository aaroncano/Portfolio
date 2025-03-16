import { IconBrandUnity, IconBrandCSharp, IconBrandCss3, IconBrandJavascript, IconHtml, IconBrandBootstrap, IconBrandDjango, IconBrandPython, IconBrandMantine, IconBrandTypescript, IconBrandReact, IconDatabaseCog } from '@tabler/icons-react';
import {
  SimpleGrid,
  Stack,
  Title,
  Text
} from '@mantine/core';
import classes from './ProjectsCards.module.css';
import { CarouselCard } from '../CarouselCard/CarouselCard';

const mockdata = [
  {
    urlImages: ['/src/img/ArtReviere/reviere.png'],
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
    ]
  },
  {
    urlImages: ['/src/img/SAED/SAED4.png', '/src/img/SAED/SAED2.png', '/src/img/SAED/SAED3.png', '/src/img/SAED/SAED.png', '/src/img/SAED/SAED5.png'],
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

      
    ]
  },

  
  {
    urlImages:["/src/img/aaroncamaron/camaron3.png", "/src/img/aaroncamaron/camaron2.png", "/src/img/aaroncamaron/camaron.png", "/src/img/aaroncamaron/camaron4.png" ],
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

    ]
  },
  {
    urlImages:["/src/img/AOB/octopuses3.png", "/src/img/AOB/octopuses4.png", "/src/img/AOB/octopuses2.png", "/src/img/AOB/octopuses.png"],
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

    ]
  },
  {
    urlImages:[ "/src/img/Astron/astron.png", "/src/img/Astron/astron2.png", "/src/img/Astron/astron3.png"],
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
    ]
  },
];

export function ProjectsCards() {
  // const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <CarouselCard urlImages={feature.urlImages} title={feature.title} year={feature.year} description={feature.description} skills={feature.skills}/>
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