import '@mantine/core/styles.css';
import "./css/styles.css";

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from '../src/theme';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <Router />
    </MantineProvider>
  );
}
