import { Button, Text, Title, Image, Flex, Stack, Tooltip} from '@mantine/core';
import classes from './HeroBackground.module.css';
import { IconBrandGithub, IconFileDownload } from '@tabler/icons-react';
import { EmailCopyButton } from '../CopyEmail';
import yo from '../../img/yo_provisional_1.jpg'
import resume from '../../Files/Aaron_Cano_Resume.pdf'


export function HeroBackground() {

  return (
    <Stack align='center' className={classes.wrapper}>
      <div className={classes.inner}>
        <Image
            src={yo}
            radius="md"
            className={classes.image}
        />
        <div className={classes.textContent}>
          <Text component="span" className={classes.pretitle}>
            Hi, I'm
          </Text>
          <Title className={classes.title}>Aarón Cano</Title>
          <Text component="span" className={classes.subtitle}>
            Full Stack Developer             
          </Text>
          <Tooltip label="Tab🐊, México🌮" color='gray' offset={{ mainAxis: 14, crossAxis: 16 }} events={{ hover: true, focus: true, touch: true }} position="top-end" transitionProps={{ transition: 'pop-bottom-right', duration: 200 }} arrowOffset={26} arrowSize={10} withArrow>
            <Button size='xs' ml="sm" color="gray" variant="light">
              <Text fz='1.4rem'>🇲🇽</Text>
            </Button>
          </Tooltip>

          <Text size="lg" className={classes.description}>
            24 y/o | Full-stack dev + pixel artist + a lot of caffeine.  
          </Text>

          <Flex align="center" justify="flex-start" gap="xl" mt="xl" w={{ base: '100%', md: 'auto' }}>
            <Button 
              className={classes.ontrol} 
              size="sm" 
              color="green" 
              variant="light"
              onClick={() => {
                const link = document.createElement('a');
                link.href = resume;
                link.download = 'Aaron_Cano_Resume.pdf';
                link.click();
              }}
            >
              <Text mr="xs">Resume</Text>
              <IconFileDownload size={24}/>
            </Button>
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
            </Flex>

          </Flex>


        </div>


      </div>
    </Stack>
  );
}