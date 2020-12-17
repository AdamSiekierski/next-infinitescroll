module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/archive/9',
      },
    ];
  },
};
