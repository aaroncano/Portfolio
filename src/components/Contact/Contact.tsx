import {
  Title,
  Text,
  Grid,
  TextInput,
  Textarea,
  Button,
  Group,
  Flex,
  Box,
  Mark
} from '@mantine/core';
import { IconMail, IconBrandGithub, IconMapPin } from '@tabler/icons-react';
import classes from './Contact.module.css';

export function Contact() {
  return (
    <Box className={classes.container}>
      <Grid className={classes.contactContainer}>
        <Grid.Col span={{ base: 12, md: 6 }} className={classes.contactSection}>
          <Title order={1} mb="xl"><Mark color="red">Contact Me</Mark></Title>
          <Text size="lg" mb="xl">
            If you want to collaborate or say hi, feel free to get in touch with me.
          </Text>

          <Flex direction="column" gap="xl">
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
                <Text c="dimmed">Mexico</Text>
              </div>
            </Group>
          </Flex>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} className={classes.contactSection}>
          <Title order={2} className={classes.formTitle} mb="xl">
            Send a Message
          </Title>

          <form>
            <Flex direction="column" gap="md">
              <TextInput
                label="Name"
                placeholder="Your name"
                required
                variant='filled'
                radius="md"
              />

              <TextInput
                label="Email"
                placeholder="your.email@example.com"
                required
                type="email"
                variant='filled'
                radius="md"
              />

              <Textarea
                label="Message"
                placeholder="Your message..."
                required
                variant='filled'
                minRows={6}
                radius="md"
              />

              <Button
                size="md"
                color="green"
                radius="md"
                variant="light"
                className={classes.submitButton}
              >
                Send
              </Button>
            </Flex>
          </form>
        </Grid.Col>
      </Grid>
    </Box>
  );
}