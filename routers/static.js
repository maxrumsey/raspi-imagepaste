exports.static = {
  method: 'GET',
  path: '/static/{param*}',
  handler: {
    directory: {
      path: './static',
    }
  }
}
exports.index = {
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.file('static/index.html')
  }
}
