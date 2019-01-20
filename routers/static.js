/*
 * This project is licensed via the MIT License. (c) 2019 Max Rumsey
 */
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
