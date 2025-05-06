import { Title, Text, Stack, Divider } from '@mantine/core';
// eslint-disable-next-line no-duplicate-imports
import classes from './AboutMe.module.css';
// import { IconBrandReact, IconBrandGit, IconDatabaseCog, IconBrandHtml5, IconBrandDjango, IconBrandCss3, IconBrandTypescript, IconBrandPython, 

//  } from '@tabler/icons-react';

import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <Stack align="center" className={classes.wrapper} mt="md">
      <Stack className={classes.inner}>
          <Title className={classes.title}>
          {t('about.title')}
          </Title>

          <div className={classes.content}>

              <Text className={classes.description} c="dimmed" span>{t('about.degree')}</Text>
              
              <Text size="md" fw={600} span c="#cdcdcd"> {t('about.degree_hl')}</Text>

              <Divider my="md" size="md"/> 
              

              <Text size="md" fw={600} span c="#cdcdcd">{t('about.career_hl')} </Text>
              <Text className={classes.description} c="dimmed" span>{t('about.career')}</Text>
              

              <Divider my="md" size="md"/> 
              
              <Text className={classes.description} c="dimmed" >{t('about.interests')}</Text>
              
            

          </div>

          {/* <div className={classes.skillsSection}>
              <Title order={2} className={classes.title}>
                Skill set
                <Text size="md" fw={600} span c="#cdcdcd"></Text>
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

