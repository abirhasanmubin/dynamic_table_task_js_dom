let obj = {
    "title": "HTML Table",
    "columns": [
        {
            "header": "Company",
            "cell": "companyName"
        },
        {
            "header": "Contact",
            "cell": "contact.phone"
        },
        {
            "header": "Country",
            "cell": "location.country.name"
        },
        {
            "header": "City",
            "cell": "location.cityname"
        }
    ]
}

function splitConfig(config) {
    let header = [];
    let value = [];
    for (let i = 0; i < config.length; i++) {
        header.push(config[i].header);
        value.push(config[i].cell);
    }
    return { header, value };
}

let res = splitConfig(obj.columns);



console.log(typeof res.header, typeof res.value);