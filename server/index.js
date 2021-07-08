const
    express = require('express'),
    massive = require('massive'),
    session = require('express-session')

const userController = require('./controllers/user');

require('dotenv').config({ path: '../.env' });

const app = express();
app.use(express.json());

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
    .then(db => {
        app.set('db', db);
        console.log('>      DATABASE:', "\x1b[32m", '   CONNECTED    ', "\x1b[0m", '<\n',);
    })
    .catch(error => console.log("\x1b[31m", error, "\x1b[0m"));

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: (1000 * 60 * 60 * 24 * 365)
        }
    })
)

app.get('/api/auth/me', userController.getUser);
app.post('/api/auth/login', userController.login);
app.post('/api/auth/logout', userController.logout);

app.listen(SERVER_PORT, () => console.log(`\n>      SERVER PORT:`, "\x1b[32m", `${SERVER_PORT}       `, "\x1b[0m", `  <`,));