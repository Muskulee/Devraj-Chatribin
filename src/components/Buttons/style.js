export default function style(theme) {
  return {
    containedBtn: {
      background: theme.palette.primary.mainGradient,
      color: theme.palette.text.primary,
      borderRadius: 80,
      height: "fit-content",
      textTransform: "unset !important",
    },
    outlinedBtn: {
      borderRadius: 5,
      height: "fit-content",
      textTransform: "unset !important",
      border: `2px solid #5D5FEF`,

      color: '#5D5FEF',
      background: '#B6CFFF',
      fontWeight: 500,
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  };
}
