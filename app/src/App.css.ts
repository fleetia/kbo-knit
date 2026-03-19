import { style } from '@vanilla-extract/css';
import { vars } from './styles/theme.css';

export const app = style({
  maxWidth: '100%',
  margin: '0 auto',
  padding: '1rem',
  '@media': {
    '(min-width: 768px)': { maxWidth: 720, padding: '2rem' },
  },
});

export const title = style({
  fontSize: vars.fontSize['4xl'],
  marginBottom: '0.2rem',
  letterSpacing: 'normal',
  '@media': {
    '(min-width: 768px)': { fontSize: vars.fontSize['5xl'] },
  },
});

export const subtitle = style({
  color: vars.color.textMuted,
  fontSize: vars.fontSize.md,
  marginBottom: '1.2rem',
  '@media': {
    '(min-width: 768px)': { fontSize: vars.fontSize.xl, marginBottom: '2rem' },
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

export const loading = style({
  textAlign: 'center',
  color: vars.color.textMuted,
  padding: '2rem 0',
  fontSize: vars.fontSize.xl,
});

export const error = style({
  textAlign: 'center',
  color: vars.color.error,
  padding: '2rem 0',
  fontSize: vars.fontSize.xl,
});

export const tabs = style({
  display: 'flex',
  gap: 0,
  marginBottom: 0,
});

export const tab = style({
  padding: '0.5rem 1rem',
  fontSize: vars.fontSize.lg,
  fontFamily: 'inherit',
  lineHeight: 1.4,
  fontWeight: 600,
  color: vars.color.textPlaceholder,
  background: vars.color.inactiveBg,
  border: `1px solid ${vars.color.border}`,
  borderBottom: 'none',
  borderRadius: `${vars.radius.md} ${vars.radius.md} 0 0`,
  cursor: 'pointer',
  transition: 'color 0.2s, background 0.2s',
  marginBottom: -1,
  position: 'relative',
  ':hover': {
    color: vars.color.textLight,
  },
});

export const tabActive = style({
  color: vars.color.textDark,
  background: vars.color.white,
  zIndex: 1,
});

export const tabContent = style({
  background: vars.color.white,
  border: `1px solid ${vars.color.border}`,
  borderRadius: vars.radius.lg,
  borderTopLeftRadius: 0,
  padding: '1rem',
  marginBottom: '1rem',
  '@media': {
    '(min-width: 768px)': { padding: '1.5rem', marginBottom: '2rem' },
  },
});

export const empty = style({
  textAlign: 'center',
  color: vars.color.textPlaceholder,
  padding: '3rem 0',
  fontSize: vars.fontSize.xl,
});

export const footer = style({
  marginTop: '3rem',
  padding: '1.5rem 0',
  borderTop: `1px solid ${vars.color.border}`,
  textAlign: 'center',
  fontSize: vars.fontSize.md,
  color: vars.color.textPlaceholder,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.5rem',
});

export const footerLink = style({
  color: vars.color.textPlaceholder,
  textDecoration: 'none',
  ':hover': { color: vars.color.textLight },
});

export const footerCredits = style({
  lineHeight: 1.6,
});
