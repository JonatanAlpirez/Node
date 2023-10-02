const http = require('node:http') // protocolo HTTP

const desiredPort = process.env.PORT ?? 3000
const data = { id: 35, name: 'Bepisian', status: 'Alive', species: 'Alien', type: 'Bepisian', gender: 'unknown', origin: { name: 'Bepis 9', url: 'https://rickandmortyapi.com/api/location/11' }, location: { name: 'Bepis 9', url: 'https://rickandmortyapi.com/api/location/11' }, image: 'https://rickandmortyapi.com/api/character/avatar/35.jpeg', episode: ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/25'], url: 'https://rickandmortyapi.com/api/character/35', created: '2017-11-05T09:27:38.491Z' }

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':

      switch (url) {
        case '/data/1':

          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(data))

        default:

          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>404</h1>')
      }

    case 'POST':
      switch (url) {
        case '/update':{
          let body = ''

          // escuchar el evento data
          req.on('data', chunk => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const post = JSON.parse(body)
            // proceso POST
            res.writeHead(201, { 'Content-Type': 'applitacion/json; charset-utf8' })
            post.timestamp = Date.now()
            res.end(JSON.stringify(post))
          })
          break
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('404 Not Found')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
