import { Tooltip, ActionIcon, rem, Box } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { IconCopy, IconCheck, IconMail } from '@tabler/icons-react';

export function EmailCopyButton() {
  const clipboard = useClipboard({ timeout: 2000 });

  return (
    <Box
      style={{
        button: {
          color: 'var(--mantine-color-gray-4)',
          transition: 'color 0.2s ease',
          '&:hover': {
            color: 'var(--mantine-color-red-6)',
            backgroundColor: 'transparent',
          },
        },
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
        label={clipboard.copied ? 'Copied to clipboard' : 'Copy email'}
        color='gray' offset={{ mainAxis: 14, crossAxis: 16 }} events={{ hover: true, focus: true, touch: true }} 
        position="top-end" transitionProps={{ transition: 'pop-bottom-right', duration: 200 }} 
        arrowOffset={26} arrowSize={10} withArrow
      >
        <ActionIcon
          onClick={() => clipboard.copy('aaroncanoc1@gmail.com')}
          variant="subtle"
          size="lg"
          color='gray'
          m="0"
          p="0"
          styles={{ root: (theme: any) => theme.button }}
        >
          {clipboard.copied ? (
            <IconCheck size={24} />
          ) : (
            <IconMail size={24} />
          )}
        </ActionIcon>
      </Tooltip>
    </Box>
  );
}