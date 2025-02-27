import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Button, Card, Flex, Group, Image, Overlay, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './CarouselCard.module.css';
import React from 'react';
import { IconArrowLeft, IconArrowRight, IconBrandGithub } from '@tabler/icons-react';

interface skillItem {
  icon: React.ReactNode;
  label: string;
}

interface CarouselCardProps {
  urlImages: string[];
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
  skills: skillItem[];
}

export function CarouselCard({ urlImages, title, icon, description, skills }: CarouselCardProps) {
  const slides = urlImages.map((image, index) => (
    <Carousel.Slide key={index}>
      <Overlay backgroundOpacity={0.2}/>
      <Image src={image} height="100%" />
    </Carousel.Slide>
  ));

  return (
    <Card radius="xl" w="100%"  maw="800px" padding="xl" mt="lg" mb="5rem" shadow='xl'>
      <Card.Section mb="lg">
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
            control: classes.carouselControl,
          }}
          nextControlIcon={<IconArrowRight size={38}/>}
          previousControlIcon={<IconArrowLeft size={38}/>}
          style={{ width: '100%' }}
        >
          {slides}
        </Carousel>
      </Card.Section>
      
      <Flex align="center" justify="flex-start" gap="sm" direction="row" mt="lg">
        {icon} 
        <Title order={2}>
          {title}
        </Title>
      </Flex>

      <Title order={5} mt="xl" mb="md">
        Technologies
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="sm" className={classes.skillsGrid}>
        {skills.map((skill, index) => (
          <Group key={index} gap="sm" justify='left' align='center' mb="sm">
            {skill.icon}
            
            <Text mx="0" my="auto">
              {skill.label}
            </Text>
          </Group>
        ))}
      </SimpleGrid> 
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>



      <Flex wrap="nowrap" align="center" justify="flex-end" direction="row" mt="xl">  
        <Button variant="transparent" miw="10%" p="0" color='red'>
          <ThemeIcon variant='subtle' color="green" >
            <IconBrandGithub />
          </ThemeIcon>
        </Button>

        <Button variant='light' miw="50%" ml="1.5rem" color="green"> Visit Project </Button>
      </Flex>

    </Card>
  );
}