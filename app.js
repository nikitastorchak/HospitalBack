const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const apiRoutes = require('./src/modules/routes/routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', apiRoutes);
const url = 'mongodb+srv://Storchak:Storchak123@snexceedteam.2jz2o.mongodb.net/SNExceedTeam?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const start = async () => {
  try {
    app.listen(8000, () => {
      console.log('app is listening on port 8000');
    });
  } catch (e) {
    console.log(e)

  }

}
start()

