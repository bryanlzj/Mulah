const table1Data = {
    A1: 41, A2: 18, A3: 21, A4: 63, A5: 2,
    A6: 53, A7: 5, A8: 57, A9: 60, A10: 93,
    A11: 28, A12: 3, A13: 90, A14: 39, A15: 80,
    A16: 88, A17: 49, A18: 60, A19: 26, A20: 28
};

// This function takes in argument of target table and data and filled in the data row by row.
function fillTable(tableId, data) {
    const tbody = document.querySelector(`${tableId} tbody`);
    for (const [key, value] of Object.entries(data)) {
        tbody.insertAdjacentHTML('beforeend', `<tr><td>${key}</td><td>${value}</td></tr>`);
    }
}


fillTable('#table1', table1Data);


const alpha = table1Data.A5 + table1Data.A20;
const beta = table1Data.A15 / table1Data.A7;
const charlie = table1Data.A13 * table1Data.A12;


fillTable('#table2', { Alpha: alpha, Beta: beta, Charlie: charlie });