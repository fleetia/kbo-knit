import { style, globalStyle } from '@vanilla-extract/css';

export const app = style({
  maxWidth: '100%',
  margin: '0 auto',
  padding: '1rem',
  '@media': {
    '(min-width: 768px)': { maxWidth: 720, padding: '2rem' },
  },
});

export const title = style({
  fontSize: '1.3rem',
  marginBottom: '0.2rem',
  letterSpacing: 'normal',
  '@media': {
    '(min-width: 768px)': { fontSize: '1.6rem' },
  },
});

export const subtitle = style({
  color: '#888',
  fontSize: '0.8rem',
  marginBottom: '1.2rem',
  '@media': {
    '(min-width: 768px)': { fontSize: '0.9rem', marginBottom: '2rem' },
  },
});

export const settings = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  marginBottom: '1.2rem',
  '@media': {
    '(min-width: 768px)': { flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' },
  },
});

export const toggleGroup = style({
  background: '#fff',
  border: '1px solid #e5e5e5',
  borderRadius: 12,
  padding: '0.8rem 1rem',
});

export const toggleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  cursor: 'pointer',
});

export const toggleInput = style({
  opacity: 0,
  width: 0,
  height: 0,
});

export const toggle = style({
  position: 'relative',
  display: 'inline-block',
  width: 40,
  height: 22,
  flexShrink: 0,
});

export const slider = style({
  position: 'absolute',
  inset: 0,
  background: '#ccc',
  borderRadius: 22,
  cursor: 'pointer',
  transition: '0.2s',
  '::before': {
    content: '""',
    position: 'absolute',
    width: 16,
    height: 16,
    left: 3,
    bottom: 3,
    background: '#fff',
    borderRadius: '50%',
    transition: '0.2s',
  },
});

export const toggleLabel = style({
  fontSize: '0.85rem',
  color: '#666',
});

export const loading = style({
  textAlign: 'center',
  color: '#888',
  padding: '2rem 0',
  fontSize: '0.9rem',
});

export const error = style({
  textAlign: 'center',
  color: '#c0392b',
  padding: '2rem 0',
  fontSize: '0.9rem',
});

export const footer = style({
  marginTop: '3rem',
  padding: '1.5rem 0',
  borderTop: '1px solid #e5e5e5',
  textAlign: 'center',
  fontSize: '0.8rem',
  color: '#999',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
});

export const footerLink = style({
  color: '#999',
  textDecoration: 'none',
  ':hover': { color: '#666' },
});

export const footerCredits = style({
  lineHeight: 1.6,
});

globalStyle(`${toggleInput}:checked + ${slider}`, {
  background: '#4a90d9',
});

globalStyle(`${toggleInput}:checked + ${slider}::before`, {
  transform: 'translateX(18px)',
});
