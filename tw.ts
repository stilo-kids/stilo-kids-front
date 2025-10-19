import { create } from 'twrnc';
import { colors } from "./src/theme/colors"

const tw = create({
  theme: {
    extend: {
      colors,
      borderColor: {
        ...colors, // reaproveita as cores definidas

      },
    },
  },
});

export default tw;
