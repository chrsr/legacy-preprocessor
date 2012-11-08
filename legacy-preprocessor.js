var fs = require('fs');

fs.readFile('style.css', 'utf8', function (err, data) {
    var legacyData = [],
        search = /(\/\*legacy\*\/)((.|\n)*?)}/gi;
    if (err) {
        return console.log(err);
    }
    legacyData = data.match(search);
    fs.writeFile('legacy.css', legacyData.join("\n"), function (err) {
        if (err) {
            return console.log(err);
        }
    });
});