module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
    '/fe-study/' :
    '',
    outputDir: './docs',
}