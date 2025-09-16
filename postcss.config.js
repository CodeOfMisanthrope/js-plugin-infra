import autoprefixer from "autoprefixer";
import postcssNested from 'postcss-nested';

const config = {
  plugins: [
    // autoprefixer,
    // require('postcss-nested')
    autoprefixer,
    postcssNested
  ]
};

export default config;
