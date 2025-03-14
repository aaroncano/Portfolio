import {
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  Flex,
  Stack
} from '@mantine/core';
import { IconMail, IconBrandGithub, IconMapPin } from '@tabler/icons-react';
import classes from './Contact.module.css';

export function Contact() {
  return (
    <Stack className={classes.wrapper} align='center' mt="md" mb="md">
      <div className={classes.inner}>
          <Title className={classes.title}>Contact</Title>


          <Flex direction="column" gap="xl" mt="md">
            <Text className={classes.description}>
              Let’s talk! I’m just one message away. 
            </Text>
            <Group className={classes.contactItem}>
              <IconMail size={24} />
              <div>
                <Text fw={500}>Email</Text>
                <Text c="dimmed">aaroncanoc1@gmail.com</Text>
              </div>
            </Group>

            <Group className={classes.contactItem}>
              <IconBrandGithub size={24} />
              <div>
                <Text fw={500}>GitHub</Text>
                <Text c="dimmed">github.com/aaroncano</Text>
              </div>
            </Group>

            <Group className={classes.contactItem}>
              <IconMapPin size={24} />
              <div>
                <Text fw={500}>Location</Text>
                <Text c="dimmed">Tabasco, Mexico</Text>
              </div>
            </Group>
          </Flex>


      </div>
    </Stack>
  );
}