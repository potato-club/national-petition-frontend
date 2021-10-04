'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./manifest.json');
require('./routes-manifest.json');
var imageHandler = require('./image-handler-e53f1482.js');
require('perf_hooks');
require('url');
require('http');
require('stream');
require('zlib');
require('path');
require('fs');
require('crypto');
require('events');
require('util');
require('tty');
require('net');
require('https');



exports.handler = imageHandler.handler;
