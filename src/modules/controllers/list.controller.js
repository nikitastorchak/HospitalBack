const Task = require('../../db/models/list/list')

module.exports.add = (req, res) => {
  const body = req.body
  const { fio, doctor, date, complaint } = body
  res.set('Access-Control-Allow-Origin', '*');
  const task = new Task({
    fio: fio,
    doctor: doctor,
    date: date,
    complaint: complaint
  });
  task.save().then(result => {
    res.send(result);
  });
};

module.exports.show = (req, res) => {
  Task.find().then((result) => {
    res.send(result);
  }).catch((err) => {
    res.send(err);
  });
};

module.exports.update = (req, res) => {
  const body = req.body
  res.set('Access-Control-Allow-Origin', '*');
  Task.updateOne({ _id: body._id }, {
    $set: {
      fio: body.fio,
      doctor: body.doctor,
      date: body.date,
      complaint: body.complaint
    },
  }).then(result => {
    Task.find().then((result) => {
      res.send(result);
    });
  });
};

module.exports.del = (req, res) => {
  const id = req.query._id;
  if (id) {
    Task.deleteOne({ _id: id }).then(result => {
      Task.find().then((result2) => {
      res.send(result2);
    }).catch((err) => {
      res.send(err);
    });
    })
    
  }
};