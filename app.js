// npm libraries
const fsP = require('fs').promises
const bodyParser = require('body-parser')

// express library setup
const express = require('express')
const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies
app.use("/static", express.static('./static/'))


const PORT = process.env.PORT || 5000


// home page
app.get('/', async (req, res) => { 
    // read from index.html file
    let data = await fsP.readFile('./index.html')

    // send html
    res.writeHead(200, {'Content-Type': 'text/html'}).end(data)
})

// chess leaderboard
app.get('/chessLeaderboard', async (req, res) => { 
    // read from chessLeaderboard.html file
    let data = await fsP.readFile('./chessLeaderboard.html')

    // send html
    res.writeHead(200, {'Content-Type': 'text/html'}).end(data)
})

// tournaments
app.get('/tournaments', async (req, res) => { 
    // read from tournaments.html file
    let data = await fsP.readFile('./tournaments.html')

    // send html
    res.writeHead(200, {'Content-Type': 'text/html'}).end(data)
})

// pawn
app.get('/PAWn', async (req, res) => { 
    // read from tournaments.html file
    let data = await fsP.readFile('./pawn.html')

    // send html
    res.writeHead(200, {'Content-Type': 'text/html'}).end(data)
})

// pawn HC
app.get('/PAWnHCC', async (req, res) => { 
    // read from tournaments.html file
    let data = await fsP.readFile('./pawnHCC.html')

    // send html
    res.writeHead(200, {'Content-Type': 'text/html'}).end(data)
})

// save tournament
app.post('/saveData', async (req, res) => { 
    try {
        let data = req.body
    
        await fsP.writeFile('lastTournamentData.json', JSON.stringify(data))
        res.end("success")
    }
    catch (error) {
        console.error(error)
        res.end("saveData error: " + error)
    }
})

// open port
app.listen(PORT, (req, res) => console.log(`Port ${PORT} Opened`))