import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Badge, Button, Card, Flex, Group, Image, Overlay, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './CarouselCard.module.css';
import React from 'react';
import { IconArrowLeft, IconArrowRight, IconBrandGithub, IconExternalLink } from '@tabler/icons-react';

interface skillItem {
  icon: React.ReactNode;
  label: string;
}

interface CarouselCardProps {
  urlImages: string[];
  title: string;
  year: string;
  description: React.ReactNode;
  skills: skillItem[];
}

export function CarouselCard({ urlImages, title, year, description, skills }: CarouselCardProps) {



  const slides = urlImages.map((image, index) => (
    <Carousel.Slide key={index} className={classes.slide}>
      <Overlay backgroundOpacity={0.1}/>
      <Image src={image} fit='cover' h="100%"/>
    </Carousel.Slide>
  ));

  return (
    <Card radius="md"  className={classes.card} w="100%" h="100%">
      <Card.Section mb="sm">
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
            control: classes.carouselControl,
          }}
          nextControlIcon={<IconArrowRight size={30}/>}
          previousControlIcon={<IconArrowLeft size={30}/>}
          className={classes.carousel}
        >
          {slides}
        </Carousel>
      </Card.Section>
      
      <Flex justify="space-between" align="flex-start" direction="row" mt="md" mb="xl" >
        <Title className={classes.title}>
          {title}
        </Title> 
        <Badge variant='dot' color='green' style={{ flexShrink: 0 }} ml="xs" mt="8px">{year}</Badge>

      </Flex>


      <SimpleGrid cols={{ base: 1, xs: 2, sm: 2}} spacing="sm" mb="sm">
        {skills.map((skill, index) => (
          <Group key={index} gap="xs" justify='left' align='center'>
            {skill.icon}
            <Text mx="0" my="auto" fz="md" c="white">
              {skill.label}
            </Text>
          </Group>
        ))}
      </SimpleGrid> 
      <Text fz="sm" c="dimmed" mt="sm" mb="lg" className={classes.description}>
        {description}
      </Text>



      <Flex wrap="nowrap" align="center" justify="flex-end" direction="row" mt="auto">  
        <Button variant="transparent" miw="10%" p="0">
            <IconBrandGithub size={24} color='gray'/>
        </Button>

        <Button variant='light' ml="xs" color="green"> 
          <Text mr="xs">
            Visit 
          </Text>
          <IconExternalLink size={24}/>
        </Button>
      </Flex>

    </Card>
  );
}