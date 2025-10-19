import { create } from 'twrnc';
import { colors } from "./src/theme/colors"

const tw = create({
  theme: {
    extend: {
      colors,
    },
  },
});

export default tw;
