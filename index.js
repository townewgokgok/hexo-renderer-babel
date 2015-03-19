hexo.extend.renderer.register('es6', 'js', function(data, options, callback){
  callback(null, require('babel').transform(data.text, {
    filename: data.path
  }).code);
});

