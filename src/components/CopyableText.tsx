import { IconButton, Stack } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { MouseEventHandler, ReactNode } from 'react';

type CopyableTextProps = {
  text: string;
  children?: ReactNode;
};

export const CopyableText = ({ text, children }: CopyableTextProps) => {
  const handleCopy: MouseEventHandler<SVGSVGElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    window.navigator.clipboard.writeText(text);
  };

  return (
    <Stack direction="row" sx={{ alignItems: 'center', gap: 0.5 }}>
      {children || text}
      <IconButton color="inherit" size="small">
        <ContentCopyIcon onClick={handleCopy} color="inherit" fontSize="small" />
      </IconButton>
    </Stack>
  );
};
