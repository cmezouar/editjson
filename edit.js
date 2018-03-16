const fs = require('fs');
const file = require('C:\Users\adsa\Desktop\Jsproj\editcompanies\editjson\companies2.json');

file.forEach(element => {
    var v = element._id.$oid;
    delete element._id.$oid;
    element._id=v;
});



