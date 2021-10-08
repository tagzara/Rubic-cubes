const handlebars = require('express-handlebars');
const path = require('path');

const setHandlebars = (app) => {
    app.set('views', path.resolve('./src/views'));
app.engine('hbs', handlebars({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
};

module.exports = setHandlebars;