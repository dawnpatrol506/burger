const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.PORT || 8080;

const app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view enginge', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => console.log(`App running on port ${PORT}`));