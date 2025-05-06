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


import { useTranslation, Trans } from 'react-i18next';

const mockdata = [
  {
    urlImages: [reviere4, reviere2, reviere, reviere3],
    titleKey: 'projects.art_reverie.title',
    yearKey: 'projects.art_reverie.year',
    descriptionKey: 'projects.art_reverie.description',
    skills: [
      { icon: <IconBrandReact size={20} />, label: 'React' },
      { icon: <IconBrandTypescript size={20} />, label: 'TypeScript' },
      { icon: <IconBrandDjango size={20} />, label: 'Django' },
      { icon: <IconDatabaseCog size={20} />, label: 'MySQL' },
      { icon: <IconBrandMantine size={20} />, label: 'Mantine' },
    ],
    githubURL: "https://github.com/aaroncano/Art-Reverie-App",
    visitURL: 'https://github.com/aaroncano/Art-Reverie-App',
    available: false
  },
  {
    urlImages: [SAED4, SAED, SAED1, SAED2, SAED5, SAED3],
    titleKey: 'projects.saed.title',
    yearKey: 'projects.saed.year',
    descriptionKey: 'projects.saed.description',
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
    urlImages: [camaron3, camaron2, camaron, camaron4],
    titleKey: 'projects.aaroncamaron.title',
    yearKey: 'projects.aaroncamaron.year',
    descriptionKey: 'projects.aaroncamaron.description',
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
    urlImages: [octopuses3, octopuses2, octopuses, octopuses4],
    titleKey: 'projects.octopuses.title',
    yearKey: 'projects.octopuses.year',
    descriptionKey: 'projects.octopuses.description',
    skills: [
      { icon: <IconBrandUnity size={20} />, label: 'Unity' },
      { icon: <IconBrandCSharp size={20} />, label: 'C#' },
    ],
    githubURL: "https://github.com/aaroncano/AmazingOctopusesBattle",
    visitURL: 'https://aaroncanoc.itch.io/amazing-octopuses-battle',
    available: true
  },
  {
    urlImages: [astron, astron2, astron3],
    titleKey: 'projects.astron.title',
    yearKey: 'projects.astron.year',
    descriptionKey: 'projects.astron.description',
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
  const { t } = useTranslation('translation');

  const features = mockdata.map((feature, index) => {

    const translatedTitle = t(feature.titleKey);
    const translatedYear = t(feature.yearKey);

    const translatedDescription = (
      <Trans
        t={t} 
        i18nKey={feature.descriptionKey}
        components={{ 
          highlight: <Text size="sm" fw={600} span c="#cdcdcd" />,
          highlight1: <Text size="sm" fw={600} span c="#cdcdcd" />,
          highlight2: <Text size="sm" fw={600} span c="#cdcdcd" />,
          br: <br />,
        }}
      />
    );


    return (
      <CarouselCard
        key={index}
        urlImages={feature.urlImages}
        title={translatedTitle}
        year={translatedYear}
        description={translatedDescription}
        skills={feature.skills}
        githubURL={feature.githubURL}
        visitURL={feature.visitURL}
        available={feature.available}
      />
    );
  });

  return (
    <Stack className={classes.wrapper} mt="md" align='center'>
      <Stack className={classes.inner}>

        <Title className={classes.title}>
          {t('projects.title')}
        </Title>
        <Text className={classes.description} mt="md" mb="xl">
          {t('projects.intro_text')}
        </Text>

        <SimpleGrid mt="xl" w="100%" spacing="md" cols={{ base: 1, md: 2 }}>
          {features}
        </SimpleGrid>

      </Stack>
    </Stack>
  );
}