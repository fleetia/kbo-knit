import { style } from '@vanilla-extract/css';

export const group = style({
  background: '#fff',
  border: '1px solid #e5e5e5',
  borderRadius: 12,
  padding: '1rem',
  '@media': {
    '(min-width: 768px)': { padding: '1.2rem 1.5rem' },
  },
});

export const label = style({
  fontSize: '0.8rem',
  color: '#999',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '0.5rem',
});

export const select = style({
  fontSize: '1rem',
  padding: '0.5rem 0.8rem',
  border: '1px solid #ddd',
  borderRadius: 8,
  background: '#fff',
  cursor: 'pointer',
  width: '100%',
  '@media': {
    '(min-width: 768px)': { width: 'auto' },
  },
});
