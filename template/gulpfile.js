var gulp = require('gulp');
//var fs = require('fs');
var fs = require('fs');
var path = require('path');
var Q = require('q');
var mkdirp = require('mkdirp');

var isWin = process.platform === 'win32';

gulp.task('install', function() {
  //fs.symlinkSync('../src', './node_modules/src', 'dir');
  createLink('../src', './node_modules/src', 'dir')
});

function createLink(src, dst, type) {
    var dstDir = path.dirname(dst);

    // Create directory
    return Q.nfcall(mkdirp, dstDir)
      // Create symlink
      .then(function (stat) {
          type = type || (stat.isDirectory() ? 'dir' : 'file');

          return Q.nfcall(fs.symlink, src, dst, type)
            .fail(function(err) {
                if (!isWin || err.code !== 'EPERM')
                    throw err;

                // Try with type "junction" on Windows
                // Junctions behave equally to true symlinks and can be created in
                // non elevated terminal (well, not always..)
                return Q.nfcall(fs.symlink, src, dst, 'junction')
                  .fail(function(err) {
                      throw createError('Unable to create link to ' + path.basename(src), err.code, {
                          details: err.message.trim() + '\n\nTry running this command in an elevated terminal (run as root/administrator).'
                      });
                  });
          });
      });
}
