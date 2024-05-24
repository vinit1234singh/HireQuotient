// routes/chat.js
const express = require('express');
const auth = require('../middleware/auth');
const Message = require('../models/Message');
const User = require('../models/User');
const router = express.Router();

router.post('/send', auth, async (req, res) => {
  const { recipient, message } = req.body;
  
  try {
    const recipientUser = await User.findById(recipient);
    if (!recipientUser) {
      return res.status(400).json({ msg: 'Recipient not found' });
    }

    const newMessage = new Message({
      sender: req.user.id,
      recipient,
      message
    });

    await newMessage.save();
    res.json(newMessage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

router.get('/messages/:userId', auth, async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.user.id, recipient: req.params.userId },
        { sender: req.params.userId, recipient: req.user.id }
      ]
    }).sort({ timestamp: 1 });

    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
