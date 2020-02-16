const fileDbIns = require('../fileDb/index');

module.exports = (req, res) => {
  fileDbIns.loadData().then((db) => {
    res.status(200).send({
      data: db.queries
    });
  });
};
