# raspi-imagepaste
A Pastebin and file host designed for usage with the Raspberry Pi. Built with the Hapi.js web framework.

## Installation
I recommend using PM2 ([(Process Manager 2)](http://pm2.keymetrics.io/)) to ensure the application remains running after unexpected restarts.

1. `npm i`
2. `pm2 start server.js --name "ImagePaste"`

## Usage
If using PM2, to restart the server execute ```pm2 restart "ImagePaste"```.

## License
This project is licensed with the MIT license.
```
Copyright 2019 Max Rumsey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
