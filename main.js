requirejs.config({
    baseUrl:'hamati.html',
    path:{
        main:"main",
        a:"modules/a",
        b:"modules/b",
      
    },
    exports:a
});
//开始设置app.js的逻辑
requirejs(['a','b'],function(a))