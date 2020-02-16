
const findApiService = require('./_findApiService');
const queryApiService = require('./_queryApiService');

module.exports = {
  findApiService,
  queryApiService,
  default: (req, res) => {
    res.status(200).send('Hai, I am CourseBooks Search Engine API. Use My Services from api/find');
  }
};
