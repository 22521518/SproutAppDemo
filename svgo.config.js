module.exports = {
  plugins: [
    {
      name: 'removeViewBox',
      active: false // Ensure the viewBox is not removed
    },
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Other optimizations can be added here if necessary
        }
      }
    }
  ]
};
