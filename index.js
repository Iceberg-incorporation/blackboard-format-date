var format = require('date-format');


exports.toFormat = function (_format, _date) {
   return format(_format, new Date(_date))
}