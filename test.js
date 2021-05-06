let config = {
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

let data = [
    {
        "companyName": "ABC",
        "contact": {
            "phone": "0123654",
            "email": "abc@yopmail.com"
        },
        "location": {
            "country": {
                "name": "Bangladesh",
                "code": "BD"
            },
            "city": {
                "name": "Dhaka",
                "code": "DHK"
            }
        }
    },
    {
        "companyName": "DEF",
        "contact": {
            "phone": "987123",
            "email": "def@yopmail.com"
        },
        "location": {
            "country": {
                "name": "Bangladesh",
                "code": "BD"
            },
            "city": {
                "name": "Dhaka",
                "code": "DHK"
            }
        }
    }
]

function splitConfig(config) {
    let header = [];
    let value = [];
    for (let i = 0; i < config.length; i++) {
        header.push(config[i].header);
        value.push(config[i].cell);
    }
    return { header, value };
}

let res = splitConfig(config.columns);



let header = res.header;
let value = res.value;


function search(obj, val) {
    let key = val.split(".");
    let tempObj = { ...obj };
    for (i = 0; i < key.length; i++) {
        if (tempObj.hasOwnProperty(key[i])) {
            if (typeof tempObj[key[i]] != "object") {
                return tempObj[key[i]];
            }
            else {
                tempObj = { ...tempObj[key[i]] };
            }
        }
        else {
            return null;
        }
    }
}
// console.log(value[1]);

console.log(search(data[0], value[0]));