// routes/messages.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const Message = require('../models/Message');

router.use(authMiddleware);

router.post('/', async (req, res) => {
  try {
    const { receiverId, content } = req.body;
    const message = new Message({
      sender: req.userId,
      receiver: receiverId,
      content
    });
    await message.save();
    res.status(201).send('Message sent successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/:receiverId', async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { sender: req.userId, receiver: req.params.receiverId },
        { sender: req.params.receiverId, receiver: req.userId }
      ]
    }).sort({ timestamp: 1 });
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
