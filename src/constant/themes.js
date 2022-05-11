import Fonts from './fonts';

export default {
  fontThemes: (weight = 500, themes = 'primary') => {
    if (themes === 'primary') {
      switch (weight) {
        case 100: return Fonts.primary.interThin;
        case 200: return Fonts.primary.interExtraLight;
        case 300: return Fonts.primary.interLight;
        case 400: return Fonts.primary.interRegular;
        case 500: return Fonts.primary.interMedium;
        case 600: return Fonts.primary.interSemiBold;
        case 700: return Fonts.primary.interBold;
        case 800: return Fonts.primary.interBlack;
        default: return Fonts.primary.interMedium;
      }
    } else {
      return Fonts.secondary.cabinBoldItalic;
    }
  },

  lineHeightDefault: fontSize => {
    switch (fontSize) {
      case 10: return 13;
      case 12: return 15;
      case 14: return 17;
      case 16: return 19;
      case 18: return 21;
      case 20: return 24;
      case 24: return 29;
      case 28: return 34;
      case 32: return 39;
      case 40: return 44;
      case 48: return 49;
      case 56: return 54;
    }
  },

  fontSizes: {
    xl7: 64,
    xl6: 56,
    xl5: 48,
    xl4: 40,
    xl3: 32,
    xl2: 28,
    xl: 24,
    l: 20,
    ml: 18,
    m: 16,
    s: 14,
    xs: 12,
    xxs: 10
  },
};
