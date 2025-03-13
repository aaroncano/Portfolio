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
    description: (
      <>
        <Text size="sm" fw={600} span c="white">Web app made to showcase public-domain 
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
    urlImages: ['/src/img/SAED/SAED.png', '/src/img/SAED/SAED2.png', '/src/img/SAED/SAED3.png', '/src/img/SAED/SAED4.png', '/src/img/SAED/SAED5.png'],
    title: 'Statistical Data Analysis System',
    description: (
      <>
        <Text size="sm" fw={600} span c="white">Developed for educators and researchers at IPN*</Text>, 
        this web application is designed to provide a straightforward approach 
        to <Text size="sm" fw={600} span c="white">performing statistical analysis based on CSV files, from basic metrics to ML model training.</Text>
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
    urlImages:["/src/img/aaroncamaron/camaron.png", "/src/img/aaroncamaron/camaron2.png", "/src/img/aaroncamaron/camaron3.png", "/src/img/aaroncamaron/camaron4.png" ],
    title: '@aaroncamaron',
    description: (
      <>
        Page to showcase my 
        work as a pixel artist. Pure HTML, CSS, and JS. Single Page.
      </>
    ),
    skills: [
      { icon: <IconHtml size={20} />, label: 'HTML' },

      { icon: <IconBrandJavascript size={20} />, label: 'JavaScript' },

      { icon: <IconBrandCss3 size={20} />, label: 'CSS' },

    ]
  },
  {
    urlImages: ["/src/img/VideoGames/astron.png", "/src/img/VideoGames/astron2.png", "/src/img/VideoGames/astron3.png", "/src/img/VideoGames/octopuses.png", "/src/img/VideoGames/octopuses2.png", "/src/img/VideoGames/octopuses3.png", "/src/img/VideoGames/octopuses4.png" ],
    title: 'Video Games',
    description: (
      <>
        Two of my 
        video games made with Unity and C#.
      </>
    ),
    skills: [
      { icon: <IconBrandCSharp size={20} />, label: 'C-Sharp' },
      { icon: <IconBrandUnity size={20} />, label: 'Unity' }

    ]
  },
];

export function ProjectsCards() {
  // const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <CarouselCard urlImages={feature.urlImages} title={feature.title} description={feature.description} skills={feature.skills}/>
  ));
 
  return (
    <Stack className={classes.wrapper} mt="md" align='center'>
      <Stack className={classes.inner}>

        <Title className={classes.title}>
        Projects
        </Title>
        <SimpleGrid mt="md" w="100%" spacing="md" cols={{ base: 1, md: 2 }}>
          {features}
        </SimpleGrid>

      </Stack>
    </Stack>

  );
}