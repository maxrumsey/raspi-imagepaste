const fs = require('fs');
const filetype = require('file-type');
const nanoid = require('nanoid');

exports.static = {
  method: 'GET',
  path: '/image/{param*}',
  handler: {
    directory: {
      path: './uploads',
    }
  }
}

exports.upload = {
  method: 'POST',
  path: '/image',
  options: {
    payload: {
      parse: true,
      output: 'data',
    },
    handler: async (req, h) => {
      const type = filetype(req.payload.image).ext;
      const key = nanoid(24); // Relies on no accidental rewrites.
      try {
        await handleFileUpload(req.payload.image, type, key)
      } catch (e) {
        console.log(e);
        return h.response('Internal Server Error').code(500);
      }
      return h.redirect(`/image/${key}.${type}`);
    }
  }
}
const handleFileUpload = (file, type, key) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./uploads/' + key + '.' + type, file, err => {
      if (err) {
       reject(err)
      }
      resolve()
   })
 })
}
