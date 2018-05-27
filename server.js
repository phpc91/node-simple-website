var express = require('express'),
    logger = require('morgan'),
    app = express(),
    pug = require('pug'),
    homepage = pug.compileFile(__dirname + '/source/templates/homepage.pug'),
    news = pug.compileFile(__dirname + '/source/templates/news.pug')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))
app.use(express.static(__dirname))

app.get('/', function(req, res, next){
    try {
        var html = homepage({title: 'Home'})
        res.send(html)
    } catch(e) {
        next(e)
    }
})

app.get('/news', function(req, res, next){
    try {
        var html = news({title: 'News'})
        res.send(html)
    } catch(e) {
        next(e)
    }
})

app.get('/banner1', function(req, res, next){
    try {
        res.sendFile('/static/html/270x360.html', {root: __dirname})
    } catch(e) {
        next(e)
    }
});

app.get('/banner2', function(req, res, next){
    try {
        res.sendFile('/static/html/1164x100.html', {root: __dirname})
    } catch (e) {
        next(e)
    }
});

app.listen(process.env.PORT || 80, function(){
    console.log('Listening on http://localhost:' + (process.env.PORT || 80))
})