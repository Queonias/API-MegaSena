const moment = require('moment');

const convertData = (dataString) => {
    return moment(dataString, "DD/MM/YYYY").toDate();
}

module.exports = convertData;