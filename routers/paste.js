/*
 * This project is licensed via the MIT License. (c) 2019 Max Rumsey
 */
 const fs = require('fs');
const nanoid = require('nanoid');

exports.static = {
  method: 'GET',
  path: '/paste/{param*}',
  handler: {
    directory: {
      path: './files',
    }
  }
}

exports.upload = {
  method: 'POST',
  path: '/paste',
  options: {
    handler: async (req, h) => {
      const key = nanoid(24); // Relies on no accidental rewrites.

      try {
        await handleFileUpload(req.payload.paste, Buffer.from(key))
      } catch (e) {
        console.log(e);
        return h.response('Internal Server Error').code(500);
      }
      return h.redirect(`/paste/${key}.txt`);
    }
  }
}
const handleFileUpload = (file, key) => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./files/' + key + '.txt', file, err => {
      if (err) {
       reject(err)
      }
      resolve()
   })
 })
}
