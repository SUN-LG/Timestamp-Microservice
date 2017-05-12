const http = require("http")
const moment = require("moment")
const express = require("express")
const app = express()

app.set('port', process.env.PORT || 5000)
app.use(express.static(__dirname + '/public'))

app.get('/:timestamp', (req, res) => {
  const timestamp = req.params.timestamp
  let date
  if (+timestamp && +timestamp !== 0) {
    date = moment.unix(timestamp)
  } else {
    date = moment.utc(timestamp)
  }
  
  const result_json = {
    unix: date.isValid() ? date.format('X') : null,
    natural: date.isValid() ? date.format('LL') : null
  }
  
  res.json(result_json)
})

app.listen(app.get('prot'), () => {
  console.log('timestamp is running at port:', app.get('port'))
})