module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./*.html"],
    }),
  ],
};
