import { Title, Text, Stack } from '@mantine/core';
// eslint-disable-next-line no-duplicate-imports
import classes from './AboutMe.module.css';
// import { IconBrandReact, IconBrandGit, IconDatabaseCog, IconBrandHtml5, IconBrandDjango, IconBrandCss3, IconBrandTypescript, IconBrandPython, 

//  } from '@tabler/icons-react';

export function AboutMe() {
  // const skills = [
  //   { icon: <IconBrandReact size={24} />, label: 'React' },
  //   { icon: <IconBrandHtml5 size={24} />, label: 'HTML5' },
  //   { icon: <IconBrandCss3 size={24} />, label: 'CSS3' },
  //   { icon: <IconBrandTypescript size={24} />, label: 'Typescript' },
  //   { icon: <IconBrandPython size={24} />, label: 'Python' },
  //   { icon: <IconBrandDjango size={24} />, label: 'Django' },
  //   { icon: <IconDatabaseCog size={24} />, label: 'SQL & NoSQL Databases' },
  //   { icon: <IconBrandGit size={24} />, label: 'Git' },

  // ];

  return (
    <Stack align="center" className={classes.wrapper} mt="md">
      <Stack className={classes.inner}>
          <Title className={classes.title}>
          About
          </Title>

          <div className={classes.content}>

            <Text className={classes.description} c="dimmed">
              
            <Text size="md" fw={600} span c="#cdcdcd">4+ years </Text> 
            of experience building projects (starting in game dev, now specializing in web apps).  
            I hold a <Text size="md" fw={600} span c="#cdcdcd">degree in Computer Systems Engineering 👨‍🎓 from Instituto Politécnico Nacional, UPIIZ</Text>.
            <br/><br/>
            My preferred stack is <Text size="md" fw={600} span c="#cdcdcd">React + Django and MySQL/SQLite</Text>.
            I like cool algorithms, video games, sci-fi stories and making pixel art.  
            </Text>

          </div>

          {/* <div className={classes.skillsSection}>
              <Title order={2} className={classes.title}>
                Skill set
              </Title>
              
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="sm" className={classes.skillsGrid}>
                {skills.map((skill, index) => (
                  <Group key={index} gap="sm" justify='left'>
                    <ThemeIcon variant='subtle' color="green">
                      {skill.icon}
                    </ThemeIcon>
                    <Text className={classes.skillLabel}>{skill.label}</Text>
                  </Group>
                ))}
              </SimpleGrid>
            </div> */}
          
      </Stack>
    </Stack>
  );
}

