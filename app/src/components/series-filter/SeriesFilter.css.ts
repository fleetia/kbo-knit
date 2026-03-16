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

export const filters = style({
  display: 'flex',
  gap: '0.4rem',
});

export const btn = style({
  flex: 1,
  padding: '0.5rem 0.6rem',
  border: '1px solid #ddd',
  borderRadius: 20,
  background: '#fff',
  fontSize: '0.8rem',
  cursor: 'pointer',
  transition: '0.15s',
  textAlign: 'center',
  '@media': {
    '(min-width: 768px)': { flex: 'none', padding: '0.4rem 0.8rem' },
  },
});

export const active = style({
  background: '#333',
  color: '#fff',
  borderColor: '#333',
});
