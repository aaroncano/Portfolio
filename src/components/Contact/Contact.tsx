import {
  Title,
  Text,
  Flex,
  Stack,
  Button
} from '@mantine/core';
import { IconMail, IconBrandGithub, IconMapPin, IconCopy, IconWorldPin, IconSpy } from '@tabler/icons-react';
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


            <Flex  mb="md" align="center" justify="flex-start" gap="xs" wrap="wrap">
              <Flex align="center" justify="space-between" gap="md" wrap="wrap" w="100%" maw="500px">
                <Flex align="center" gap="sm">
                  <IconMail size={24} color='white'/>
                  <Text fw={500} c="white" span>Email</Text>

                </Flex>
                <Button ml="md" variant='transparent' color='green' w={{base: 'auto', xs: '140px'}}> 
                  <Text mr="xs">Copy</Text> 
                  <IconCopy/> 
                </Button>
              </Flex>
              <Text c="dimmed" style={{ width: '100%', paddingLeft: "2.4rem"}}>aaroncanoc1@gmail.com</Text>

            </Flex>

            <Flex  mb="md" align="center" justify="flex-start" gap="xs" wrap="wrap">
              <Flex align="center" justify="space-between" gap="md" wrap="wrap" w="100%" maw="500px">
                <Flex align="center" gap="sm">
                  <IconBrandGithub size={24} color='white'/>
                  <Text fw={500} c="white" span>GitHub</Text>

                </Flex>
                <Button ml="md" variant='transparent' color='green' w={{base: 'auto', xs: '140px'}}> 
                  <Text mr="xs">Stalk</Text>
                  <IconSpy />
                </Button>
              </Flex>
              <Text c="dimmed" style={{ width: '100%', paddingLeft: "2.4rem"}}>github.com/aaroncano</Text>

            </Flex>

            <Flex  mb="md" align="center" justify="flex-start" gap="xs" wrap="wrap">
              <Flex align="center" justify="space-between" gap="md" wrap="wrap" w="100%" maw="500px">
                <Flex align="center" gap="sm">
                  <IconMapPin size={24} color='white'/>
                  <Text fw={500} c="white" span>Location</Text>

                </Flex>
                <Button ml="md" variant='transparent' color='green' w={{base: 'auto', xs: '140px'}}> 
                  <Text mr="xs">Where?</Text>
                  <IconWorldPin />
                </Button>
              </Flex>
              <Text c="dimmed" style={{ width: '100%', paddingLeft: "2.4rem"}}>Tabasco, México</Text>

            </Flex>


          </Flex>


      </div>
    </Stack>
  );
}