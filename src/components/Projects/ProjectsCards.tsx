import { IconBrandUnity, IconBrandCSharp, IconBrandCss3, IconBrandJavascript, IconHtml, IconBrandBootstrap, IconBrandDjango, IconBrandPython, IconBrandMantine, IconBrandTypescript, IconBrandReact, IconDatabaseCog } from '@tabler/icons-react';
import {
  Container,
  Flex,
  Title,
} from '@mantine/core';
import classes from './ProjectsCards.module.css';
import { CarouselCard } from '../CarouselCard/CarouselCard';

const mockdata = [
  {
    urlImages: ['/src/img/ArtReviere/reviere.png'],
    title: 'Art Reverie',
    description: (
      <>
        Web app design to showcase public-domain 
        artworks and provide information about them, with capabilities for searching 
        individual artworks and exploring collections.
      </>
    ),
    skills: [ 
      { icon: <IconBrandReact size={18} />, label: 'React' },
      
      { icon: <IconBrandTypescript size={18} />, label: 'TypeScript'},

      { icon: <IconBrandDjango size={18} />, label: 'Django'},

      { icon: <IconDatabaseCog size={18} />, label: 'Databases' },

      { icon: <IconBrandMantine size={18} />, label: 'Mantine'},
    ]
  },
  {
    urlImages: ['/src/img/SAED/SAED.png', '/src/img/SAED/SAED2.png', '/src/img/SAED/SAED3.png', '/src/img/SAED/SAED4.png', '/src/img/SAED/SAED5.png'],
    title: 'Statistical Data Analysis System',
    description: (
      <>
        Developed for educators and researchers at IPN, 
        this web application is designed to provide a straightforward approach 
        to performing statistical analysis from CSV files.
      </>
    ),
    skills: [
      { icon: <IconBrandPython size={18} />, label: 'Python' },
      
      { icon: <IconBrandJavascript size={18} />, label: 'JavaScript' },

      { icon: <IconBrandDjango size={18} />, label: 'Django' },

      { icon: <IconBrandBootstrap size={18} />, label: 'Bootstrap' },

      
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
      { icon: <IconHtml size={18} />, label: 'HTML' },

      { icon: <IconBrandJavascript size={18} />, label: 'JavaScript' },

      { icon: <IconBrandCss3 size={18} />, label: 'CSS' },

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
      { icon: <IconBrandCSharp size={18} />, label: 'C-Sharp' },
      { icon: <IconBrandUnity size={18} />, label: 'Unity' }

    ]
  },
];

export function ProjectsCards() {
  // const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <CarouselCard urlImages={feature.urlImages} title={feature.title} description={feature.description} skills={feature.skills}/>
  ));
 
  return (
    <Container className={classes.wrapper} w="100vw" mih="100vh" m="0">
      <Container py="xl" px="0" mih="100vh" mx="auto" className={classes.container}>

        <Title order={2} className={classes.title} ta="left" mt="xl" mb="xl">
        Projects
        </Title>
        <Flex justify="center" align="center" direction="row" mt="xl" wrap="wrap" gap={40} >
          {features}
        </Flex>

      </Container>
    </Container>

  );
}