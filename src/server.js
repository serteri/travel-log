
const exoress = require('express');
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  Response.json({
    message: "welcome to the travelog backend"
  });
});

module.exports = {
  app
}

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/travelog', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected...'))
//   .catch(err => console.log(err));

// above connects to MongoDB - need to replace 'mongodb://localhost/travelog' with actual connection string


// Express route to get user profile

app.get('/models/user/:username', async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username }).populate('locations');
      if (!user) return res.status(404).send('User not found');
      res.send(user);
    } catch (err) {
      res.status(500).send('Server error');
    }
  });
  