import { Image, Title, Text, SimpleGrid, Group, Mark } from '@mantine/core';
import classes from './AboutMe.module.css';
import { IconBrandReact, IconBrandGit, IconDatabaseCog, IconBrandHtml5, IconBrandDjango, IconBrandCss3, IconBrandTypescript, IconBrandPython, 

 } from '@tabler/icons-react';

export function AboutMe() {
  const skills = [
    { icon: <IconBrandReact size={24} />, label: 'React' },
    { icon: <IconBrandHtml5 size={24} />, label: 'HTML5' },
    { icon: <IconBrandCss3 size={24} />, label: 'CSS3' },
    { icon: <IconBrandTypescript size={24} />, label: 'JavaScript' },
    { icon: <IconBrandPython size={24} />, label: 'Python' },
    { icon: <IconBrandDjango size={24} />, label: 'Django' },
    { icon: <IconDatabaseCog size={24} />, label: 'SQL & NoSQL Databases' },
    { icon: <IconBrandGit size={24} />, label: 'Git' },

  ];

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
          <Title order={2} className={classes.title} mb="xl">
          <Mark color="red">About Me</Mark>
          </Title>

          <div className={classes.content}>
            <Image
              src="/src/img/yo_provisional.jpg" 
              className={classes.image}
              radius="md"
            />
            <Text className={classes.description}>
                Full Stack Developer and former Game Developer with 4 years of experience, specializing in crafting end-to-end web applications. Proficient in React, JavaScript, Python, Django and both SQL and NoSQL databases.  

                When not coding, I enjoy making pixel art artworks, playing video games and sci-fi’s stories.

                I'm currently exploring new opportunities in web development and software engineering.
            </Text>
          </div>

          <div className={classes.skillsSection}>
              <Title order={2} className={classes.skillsTitle}>
                Skills
              </Title>
              
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" className={classes.skillsGrid}>
                {skills.map((skill, index) => (
                  <Group key={index} gap="sm" justify='left'>
                    {skill.icon}
                    <Text className={classes.skillLabel}>{skill.label}</Text>
                  </Group>
                ))}
              </SimpleGrid>
            </div>
          
      </div>
    </div>
  );
}