// routes/status.js
const express = require('express');
const auth = require('../middleware/auth');
const User = require('../models/User');
const router = express.Router();

router.post('/status', auth, async (req, res) => {
  const { status } = req.body;
  
  try {
    let user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    user.status = status;
    await user.save();

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
