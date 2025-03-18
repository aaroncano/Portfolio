import { Tooltip, Box, Button, Text } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import {  IconCheck, IconCopy } from '@tabler/icons-react';

export function EmailCopyButtonGreen() {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <Box
      style={{
        tooltip: {
          background: 'var(--mantine-color-dark-7)',
          border: '1px solid var(--mantine-color-dark-4)',
          fontSize: 'var(--mantine-font-size-xs)',
          fontWeight: 500,
          color: 'var(--mantine-color-red-1)',
          '&[data-position="bottom"]': {
            marginTop: '8px',
          },
        },
      }}
    >
      <Tooltip
        label={clipboard.copied ? 'Copied to clipboard!' : 'To clipboard'}
        color='gray' offset={{ mainAxis: 14, crossAxis: -15 }} events={{ hover: true, focus: true, touch: true }} 
        position="top-end" transitionProps={{ transition: 'pop-bottom-right', duration: 200 }} 
        arrowOffset={26} arrowSize={10} withArrow
      >
        <Button ml="md" variant='transparent' color='green' w={{base: 'auto', xs: '140px'}}
          onClick={() => clipboard.copy('me@aaroncano.com')}
        > 
            <Text mr="xs">Copy</Text> 
              {clipboard.copied ? (
              <IconCheck size={24} />
            ) : (
              <IconCopy size={24} />
            )}
        </Button>
      </Tooltip>
    </Box>
  );
}