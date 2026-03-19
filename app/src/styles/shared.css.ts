import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const group = style({
  background: vars.color.white,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  padding: '1rem',
  '@media': {
    '(min-width: 768px)': { padding: '1.2rem 1.5rem' },
  },
});

export const groupLabel = style({
  fontSize: vars.fontSize.md,
  color: vars.color.textPlaceholder,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '0.5rem',
});

export const selectInput = style({
  fontSize: '1rem',
  padding: '0.5rem 0.8rem',
  border: `1px solid ${vars.color.borderLight}`,
  borderRadius: vars.radius.md,
  background: vars.color.white,
  cursor: 'pointer',
  width: '100%',
  '@media': {
    '(min-width: 768px)': { width: 'auto' },
  },
});

export const legend = style({
  display: 'flex',
  gap: '0.8rem',
  marginTop: '0.6rem',
  flexWrap: 'wrap',
});

export const legendItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',
  fontSize: vars.fontSize.sm,
  color: vars.color.textLight,
  '@media': {
    '(min-width: 768px)': { fontSize: vars.fontSize.md },
  },
});

export const swatch = style({
  width: 12,
  height: 12,
  borderRadius: 3,
  border: '1px solid rgba(0, 0, 0, 0.1)',
  '@media': {
    '(min-width: 768px)': { width: 16, height: 16 },
  },
});
