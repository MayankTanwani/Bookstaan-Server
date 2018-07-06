const express = require('express')
const path = require('path')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/api', require('./routes/api'))
app.all('*',redirectUnmatched)
function redirectUnmatched(req,res){
    res.redirect('/')
}
app.set('port',process.env.PORT || 2100)
app.listen(app.get('port'),function () {
    console.log('Server started on http://localhost:2100/')
})
