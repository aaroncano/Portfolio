import { Tooltip, ActionIcon, Box } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import {  IconCheck, IconMail } from '@tabler/icons-react';

import { useTranslation } from 'react-i18next';

export function EmailCopyButton() {
  const clipboard = useClipboard({ timeout: 2000 });
  const { t } = useTranslation();

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
        label={clipboard.copied ? t('copyEmail.response') : t('copyEmail.tooltip')}
        color='gray' offset={{ mainAxis: 14, crossAxis: 16 }} events={{ hover: true, focus: true, touch: true }} 
        position="top-end" transitionProps={{ transition: 'pop-bottom-right', duration: 200 }} 
        arrowOffset={26} arrowSize={10} withArrow
      >
        <ActionIcon
          onClick={() => clipboard.copy('me@aaroncano.com')}
          variant="transparent"
          size="md"
          color='gray'
          m="0"
          p="0"

        >
          {clipboard.copied ? (
            <IconCheck size={24} color='gray'/>
          ) : (
            <IconMail size={24} color='gray'/>
          )}
        </ActionIcon>
      </Tooltip>
    </Box>
  );
}