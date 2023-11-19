import  express  from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import  dbConnection from './db.js'
import {useRouter} from './Routes/User.js'
import { notesRouter } from './Routes/Notes.js'
import { isAuthorized } from './middlewares/auth.js'
dotenv.config()
const app = express()
const port = process.env.port

// middle ware
app.use(express.json());
app.use(cors())

//Routes
app.use('/api/user', useRouter)
app.use('/api/notes',isAuthorized, notesRouter)

// starting the app server
app.listen(port ,()=>{
    console.log(`The app is running on`, port)
})

//Connection to Database
dbConnection()
