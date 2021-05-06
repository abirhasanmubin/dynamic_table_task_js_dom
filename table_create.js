let table_config;
let table_data;
fetch('./table_config.json')
    .then(response => {
        response.json().then(data => {
            table_config = data;
        });
    });

fetch('./table_data.json')
    .then(response => {
        response.json().then(data => {
            table_data = data;
        });
    });

function createHeader(headerInfo) {
    let header = document.createElement("h1");
    let headerText = document.createTextNode(headerInfo);
    header.appendChild(headerText);
    return header;
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

function createColumn(item) {
    let column = document.createElement("td");
    let columnText = document.createTextNode(item);
    column.appendChild(columnText);
    return column;
}

function createRow(columnItems) {
    let row = document.createElement('tr');
    for (let i = 0; i < columnItems.length; i++) {
        row.appendChild(createColumn(columnItems[i]));
    }
    return row;
}

function createTable(config, data) {
    let table = document.createElement("table");
    let tablebody = document.createElement("tbody");
    let results = splitConfig(table_config.columns);
    let columnHeader = results.header;
    let columnValue = results.value;
    tablebody.appendChild(createRow(columnHeader));
    table.appendChild(tablebody);
    return table;
}

setTimeout(() => {

    document.body.appendChild(createHeader(table_config.title));
    document.body.appendChild(createTable(table_config, table_data));
}, 1000);