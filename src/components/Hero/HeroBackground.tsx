import { Button, Text, Title, Image, Flex, Stack, Tooltip, Menu } from '@mantine/core';

import { useTranslation } from 'react-i18next';

import classes from './HeroBackground.module.css';
import { IconBrandGithub, IconBrandLinkedin, IconCaretDown, IconFileDownload } from '@tabler/icons-react';
import { EmailCopyButton } from '../CopyEmail';
import yo from '../../img/perfil.jpg';
import resumeEN from '../../Files/Aaron_Cano_Resume_EN.pdf';
import resumeES from '../../Files/Aaron_Cano_Resume_ES.pdf';

export function HeroBackground() {
  const { t } = useTranslation();

  return (
    <Stack align='center' className={classes.wrapper}>
      <div className={classes.inner}>
        <Image
            src={yo}
            radius="md"
            className={classes.image}
            alt='Profile picture'
        />
        <div className={classes.textContent}>
          <Text component="span" className={classes.pretitle}>
            {t('hero.greetingPrefix')}
          </Text>

          <Title className={classes.title}>Aarón Cano</Title>

          <Text component="span" className={classes.subtitle} mr="sm">
            {t('hero.jobTitle')}
          </Text>

          <Tooltip
            label={t('hero.locationTooltip')}
            color='gray' offset={{ mainAxis: 14, crossAxis: 16 }} events={{ hover: true, focus: true, touch: true }} position="top-end" transitionProps={{ transition: 'pop-bottom-right', duration: 200 }}
          >
            <Button size='xs' color="gray" variant="light" mb="xs" mt="xs">
              <Text fz='1.4rem'>🐊</Text>
            </Button>
          </Tooltip>

          <Text size="lg" className={classes.description}>
            {t('hero.bio')}
          </Text>

          <Flex align="center" justify="flex-start" gap="md" mt="xl" w={{ base: '100%', md: 'auto' }}>
            <Menu trigger="click-hover" openDelay={50} closeDelay={400} position='bottom-end' transitionProps={{ transition: 'fade-down', duration: 200 }}>
              <Menu.Target>
                <Button
                  color="green"
                  variant="light"
                >
                  <Text mr="xs">{t('hero.resumeButton')}</Text>
                  <IconCaretDown size={24}/>
                </Button>
              </Menu.Target>

              <Menu.Dropdown bg="gray">
                <Menu.Item
                  color='white'
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = resumeEN;
                    link.download = 'Aaron_Cano_Resume.pdf';
                    link.click();
                  }}
                >
                  <Flex align="center" justify="flex-start">
                    <Text span mr="xs">{t('common.english')}</Text>
                    <IconFileDownload size={24}/>
                  </Flex>
                </Menu.Item>

                <Menu.Item
                  color='white'
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = resumeES;
                    link.download = 'Aaron_Cano_CV.pdf';
                    link.click();
                  }}
                >
                  <Flex align="center" justify="flex-start">
                    <Text span mr="xs">{t('common.spanish')}</Text>
                    <IconFileDownload size={24}/>
                  </Flex>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <Flex gap="md" align="center">
              <EmailCopyButton />
              <Button size='sm' color="light" variant="transparent" p="0" m="0" miw="sm"
                    component="a"
                    href="https://github.com/aaroncano"
                    target="_blank"
                    rel="noopener"
              >
                  <IconBrandGithub size={24} color='gray'/>
              </Button>
              <Button size='sm' color="light" variant="transparent" p="0" m="0" miw="sm"
                    component="a"
                    href="https://www.linkedin.com/in/aaroncanoc/"
                    target="_blank"
                    rel="noopener"
              >
                  <IconBrandLinkedin size={24} color='gray'/>
              </Button>
            </Flex>
          </Flex>
        </div>
      </div>
    </Stack>
  );
}