const http = require('http')


const server = http.createServer ( (req,res) => {
    // console.log('headers', req.headers)
    // console.log('method', req.method)
    console.log('url', req.url)
    res.end('hello')
})

server.listen(3000)