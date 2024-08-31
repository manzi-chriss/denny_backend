const router = require('express').Router();
const { Message, validateMessage } = require('../../model/Message');
require('dotenv').config();

router.post('/us', async (req, res) => {
    try {
        const { error } = await validateMessage(req.body);
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        const message = new Message(req.body);
        // Save the user
        await message.save();
        return res.status(201).json({ message: "Message Sent!" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

router.get('/us',async (req, res) => {
    try {
        const messages = await Message.find();
        if (!messages) {
            return res.status(404).json({ message: 'Currently no messages' });
        }
        return res.status(200).json(messages);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.delete('/us/:id', async(req, res)=> {
    try {
        const message = await Message.findByIdAndDelete(req.params.id);
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }
        return res.status(200).json({ message: 'Message deleted successfully' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
})

module.exports = router