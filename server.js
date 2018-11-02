const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080;
const burgerRouter = require('./controllers/burgers_controller');

const app = express();

app.set(express.static(`${__dirname}/public`));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', burgerRouter);

app.listen(PORT, () => console.log(`App running on port ${PORT}`));