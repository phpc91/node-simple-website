var express = require('express'),
    logger = require('morgan'),
    app = express(),
    pug = require('pug'),
    homepage = pug.compileFile(__dirname + '/source/templates/homepage.pug'),
    news = pug.compileFile(__dirname + '/source/templates/news.pug')

app.use(logger('dev'))
app.use(express.static(__dirname + '/static'))

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

app.listen(process.env.PORT || 3000, function(){
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})