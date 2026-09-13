export const theme = {
  layout: 'LAYOUT_WIDE', width: 13.333, height: 7.5,
  colors: { paper: 'F1EBDD', ink: '171715', red: 'C93728', muted: '625D54', rule: 'B7B0A4' },
  fonts: { display: 'Arial', body: 'Arial' },
  grid: { margin: 0.55, columns: 12, gutter: 0.16 },
};

export const textStyles = {
  title: { fontFace: theme.fonts.display, fontSize: 30, bold: true, color: theme.colors.ink, margin: 0, breakLine: false },
  body: { fontFace: theme.fonts.body, fontSize: 15, color: theme.colors.ink, margin: 0, breakLine: false },
  label: { fontFace: theme.fonts.body, fontSize: 8, bold: true, color: theme.colors.muted, charSpacing: 1.2, margin: 0, breakLine: false },
};
