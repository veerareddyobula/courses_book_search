const fileDbIns = require('../fileDb/index');

module.exports = (req, res) => {
  fileDbIns.loadData().then((db) => {
    const { params } = req;
    const result = db.summaries.filter(entity => entity.summary.search(params.query));
    res.status(200).send({
      ...params,
      data: result.slice(0, params.size)
    });
  });
};
