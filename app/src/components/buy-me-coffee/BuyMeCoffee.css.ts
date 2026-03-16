import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.25rem',
  width: '100%',
  padding: '0.5rem 1.25rem',
  background: '#ffdd00',
  color: '#000',
  fontSize: '0.9rem',
  fontWeight: 600,
  borderRadius: 8,
  textDecoration: 'none',
  transition: 'opacity 0.2s',
  selectors: {
    '&:hover': { opacity: 0.85 },
  },
});
