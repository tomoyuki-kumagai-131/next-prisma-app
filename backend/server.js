const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 8000 || process.env.PORT

const authRoute = require('./routers/auth')

require('dotenv').config()

// corsを許可する
app.use(cors())

// JSON形式のデータを受け取るための設定
app.use(express.json())

app.use('/api/auth', authRoute)

app.use('/api/users', require('./routers/user'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
