import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';
import { group as baseGroup } from '../../styles/shared.css';

export const group = style([baseGroup, { position: 'relative' }]);

export const label = style({
  fontSize: vars.fontSize.md,
  color: vars.color.textPlaceholder,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  marginBottom: '0.4rem',
});

export const sectionLabel = style({
  fontSize: vars.fontSize.base,
  color: vars.color.textPlaceholder,
  paddingBottom: 4,
  borderBottom: `1px solid ${vars.color.border}`,
  marginBottom: 4,
});

export const checkboxRow = style({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.35rem',
  cursor: 'pointer',
  '@media': {
    '(min-width: 768px)': { top: '1.2rem', right: '1.5rem' },
  },
});

export const checkbox = style({
  width: 14,
  height: 14,
  cursor: 'pointer',
  accentColor: vars.color.accent,
  margin: 0,
});

export const checkboxLabel = style({
  fontSize: vars.fontSize.base,
  color: vars.color.textPlaceholder,
  letterSpacing: '0.03em',
});

export const colorRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  marginBottom: '0.4rem',
});

export const colorLabel = style({
  width: 20,
  fontSize: vars.fontSize.lg,
  fontWeight: 600,
});

export const colorInput = style({
  width: 32,
  height: 32,
  border: `2px solid ${vars.color.border}`,
  borderRadius: vars.radius.md,
  cursor: 'pointer',
  padding: 2,
  '@media': {
    '(min-width: 768px)': { width: 36, height: 36 },
  },
});

export const hex = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.textSubtle,
  fontFamily: 'monospace',
});

export const splitRow = style({
  display: 'flex',
  gap: '1.5rem',
});

export const section = style({
  flex: 1,
});
