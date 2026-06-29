import { type Shadows, alpha, createTheme } from '@mui/material/styles';

const customShadows: Shadows = [
  'none', // 0
  '0px 2px 1px -1px rgba(145 158 171 / 0.2),0px 1px 1px 0px rgba(145 158 171 / 0.14),0px 1px 3px 0px rgba(145 158 171 / 0.12)', // 1
  '0px 3px 1px -2px rgba(145 158 171 / 0.2),0px 2px 2px 0px rgba(145 158 171 / 0.14),0px 1px 5px 0px rgba(145 158 171 / 0.12)', // 2
  '0px 3px 3px -2px rgba(145 158 171 / 0.2),0px 3px 4px 0px rgba(145 158 171 / 0.14),0px 1px 8px 0px rgba(145 158 171 / 0.12)', // 3
  '0px 2px 4px -1px rgba(145 158 171 / 0.2),0px 4px 5px 0px rgba(145 158 171 / 0.14),0px 1px 10px 0px rgba(145 158 171 / 0.12)', // 4
  '0px 3px 5px -1px rgba(145 158 171 / 0.2),0px 5px 8px 0px rgba(145 158 171 / 0.14),0px 1px 14px 0px rgba(145 158 171 / 0.12)', // 5
  '0px 3px 5px -1px rgba(145 158 171 / 0.2),0px 6px 10px 0px rgba(145 158 171 / 0.14),0px 1px 18px 0px rgba(145 158 171 / 0.12)', // 6
  '0px 4px 5px -2px rgba(145 158 171 / 0.2),0px 7px 10px 1px rgba(145 158 171 / 0.14),0px 2px 16px 1px rgba(145 158 171 / 0.12)', // 7
  '0px 5px 5px -3px rgba(145 158 171 / 0.2),0px 8px 10px 1px rgba(145 158 171 / 0.14),0px 3px 14px 2px rgba(145 158 171 / 0.12)', // 8
  '0px 5px 6px -3px rgba(145 158 171 / 0.2),0px 9px 12px 1px rgba(145 158 171 / 0.14),0px 3px 16px 2px rgba(145 158 171 / 0.12)', // 9
  '0px 6px 6px -3px rgba(145 158 171 / 0.2),0px 10px 14px 1px rgba(145 158 171 / 0.14),0px 4px 18px 3px rgba(145 158 171 / 0.12)', // 10
  '0 0 2px 0 rgba(145 158 171 / 0.2),0 12px 24px -4px rgba(145 158 171 / 0.12)', // 11 (Card)
  '-40px 40px 80px -8px rgba(0 0 0 / 0.24)', // 12 (Dialog)
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
];

export const theme = createTheme({
  shadows: customShadows,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#2F8FE8',
          light: '#62D4FF',
          dark: '#256FC8',
          contrastText: '#fff',
        },
        secondary: {
          main: '#8E7CFF',
        },
        background: {
          default: '#EEF6FC',
          paper: '#FFFFFF',
        },
        text: {
          primary: '#16212C',
          secondary: '#556170',
        },
        divider: '#D9E4EF',
        success: {
          main: '#39B980',
        },
        warning: {
          main: '#C6A25D',
        },
        error: {
          main: '#D95B63',
        },
        info: {
          main: '#2F8FE8',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#62D4FF',
          light: '#A8ECFF',
          dark: '#2F8FE8',
          contrastText: '#00131A',
        },
        secondary: {
          main: '#8E7CFF',
        },
        background: {
          default: '#0A0D11',
          paper: '#151A22',
        },
        text: {
          primary: '#EDF6FF',
          secondary: '#A6B7CC',
        },
        divider: '#2A3442',
        success: {
          main: '#5ED6A5',
        },
        warning: {
          main: '#C6A25D',
        },
        error: {
          main: '#FF7272',
        },
        info: {
          main: '#62D4FF',
        },
      },
    },
  },
  typography: {
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: 'none',
          border: `1px solid ${alpha(theme.palette.primary.main, 0.18)}`,
          backdropFilter: 'blur(10px)',
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          transition: '0.2s',

          '&:hover': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 24px ${alpha(theme.palette.primary.main, 0.18)}`,
            transform: 'translateY(-2px)',
          },
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: `linear-gradient(
            180deg,
            ${theme.palette.background.paper},
            ${theme.palette.background.default}
          )`,
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.25)}`,
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& fieldset': {
            borderColor: theme.palette.divider,
          },
          '&:hover fieldset': {
            borderColor: theme.palette.primary.main,
          },
          '&.Mui-focused fieldset': {
            borderWidth: 2,
            borderColor: theme.palette.primary.main,
          },
        }),
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: '#1f1f1f',
          textAlign: 'center',
          color: '#ccc',
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          background: '#2e2e2e',
          color: '#ccc',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          color: 'inherit',
          background: 'inherit',
          borderBottom: '1px solid #3c3c3c',
        },
        stickyHeader: {
          background: '#1f1f1f',
        },
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: 'inherit',
          '&:hover': {
            color: alpha(theme.palette.primary.main, 0.9),
          },
          '&.Mui-active': {
            color: theme.palette.primary.main,
          },
          '&.Mui-active .MuiTableSortLabel-icon': {
            color: theme.palette.primary.main,
          },
        }),
        icon: '#ccc',
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
      variants: [
        {
          props: {
            variant: 'contained',
            color: 'primary',
          },
          style: ({ theme }) => ({
            boxShadow: `3px 6px 7px 0px ${alpha(theme.palette.primary.main, 0.2)}`,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              boxShadow: `0 0 12px ${alpha(theme.palette.primary.main, 0.3)}`,
            },
          }),
        },
        {
          props: {
            variant: 'outlined',
            color: 'primary',
          },
          style: ({ theme }) => ({
            borderColor: alpha(theme.palette.primary.main, 0.5),
            '&:hover': {
              background: alpha(theme.palette.primary.main, 0.08),
            },
          }),
        },
      ],
    },
    MuiChip: {
      variants: [
        {
          props: {
            variant: 'filled',
            color: 'primary',
          },
          style: ({ theme }) => ({
            background: alpha(theme.palette.primary.main, 0.18),
            color: theme.palette.primary.main,
          }),
        },
      ],
    },
  },
});
