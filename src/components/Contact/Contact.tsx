import {
  Title,
  Text,
  Flex,
  Stack,
  Button
} from '@mantine/core';
import { IconMail, IconBrandGithub, IconMapPin, IconWorldPin, IconSpy, IconUserPlus, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './Contact.module.css';
import { EmailCopyButtonGreen } from '../CopyEmailGreen';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t } = useTranslation('translation');

  return (
    <Stack className={classes.wrapper} align='center' mt="md" mb="md">
      <div className={classes.inner}>
        <Title className={classes.title}>{t('contact.title')}</Title>

        <Flex direction="column" gap="xl" mt="md">
          <Text className={classes.description}>
            {t('contact.intro_text')}
          </Text>

          <Flex mb="md" align="center" justify="flex-start" gap="xs" wrap="wrap">
            <Flex align="center" justify="space-between" gap="md" wrap="wrap" w="100%" maw="500px">
              <Flex align="center" gap="sm">
                <IconMail size={24} color='white'/>
                <Text fw={500} c="white" span>{t('contact.email.label')}</Text>
              </Flex>
              <EmailCopyButtonGreen />
            </Flex>
            <Text c="dimmed" style={{ width: '100%', paddingLeft: "2.4rem"}}>me@aaroncano.com</Text>
          </Flex>

          <Flex mb="md" align="center" justify="flex-start" gap="xs" wrap="wrap">
            <Flex align="center" justify="space-between" gap="md" wrap="wrap" w="100%" maw="500px">
              <Flex align="center" gap="sm">
                <IconBrandLinkedin size={24} color='white'/>
                <Text fw={500} c="white" span>{t('contact.linkedin.label')}</Text>
              </Flex>
              <Button ml="md" variant='transparent' color='green'
                component="a"
                href="https://www.linkedin.com/in/aaroncanoc/"
                target="_blank"
                rel="noopener"
              >
                <Text mr="xs">{t('contact.linkedin.button')}</Text>
                <IconUserPlus />
              </Button>
            </Flex>
            <Text c="dimmed" style={{ width: '100%', paddingLeft: "2.4rem"}}>linkedin.com/in/aaroncanoc</Text>
          </Flex>

          <Flex mb="md" align="center" justify="flex-start" gap="xs" wrap="wrap">
            <Flex align="center" justify="space-between" gap="md" wrap="wrap" w="100%" maw="500px">
              <Flex align="center" gap="sm">
                <IconBrandGithub size={24} color='white'/>
                <Text fw={500} c="white" span>{t('contact.github.label')}</Text>
              </Flex>
              <Button ml="md" variant='transparent' color='green'
                component="a"
                href="https://github.com/aaroncano"
                target="_blank"
                rel="noopener"
              >
                <Text mr="xs">{t('contact.github.button')}</Text>
                <IconSpy />
              </Button>
            </Flex>
            <Text c="dimmed" style={{ width: '100%', paddingLeft: "2.4rem"}}>github.com/aaroncano</Text>
          </Flex>

          <Flex mb="md" align="center" justify="flex-start" gap="xs" wrap="wrap">
            <Flex align="center" justify="space-between" gap="md" wrap="wrap" w="100%" maw="500px">
              <Flex align="center" gap="sm">
                <IconMapPin size={24} color='white'/>
                <Text fw={500} c="white" span>{t('contact.location.label')}</Text>
              </Flex>
              <Button ml="md" variant='transparent' color='green'
                component="a"
                href="https://maps.app.goo.gl/fLXRzRqHQGt4DLkj7"
                target="_blank"
                rel="noopener"
              >
                <Text mr="xs">{t('contact.location.button')}</Text>
                <IconWorldPin />
              </Button>
            </Flex>
            <Text c="dimmed" style={{ width: '100%', paddingLeft: "2.4rem"}}>{t('contact.location.value')}</Text>
          </Flex>

        </Flex>

      </div>
    </Stack>
  );
}