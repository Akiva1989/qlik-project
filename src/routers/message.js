const express = require('express');
const router = new express.Router();
const {removeMessage, addMessage, updateMessage, getMessage, getListMessages} = require('../controllers/message');



router.post('/message', async (req, res) => {
    try {
        let newMessage = await addMessage(req.body.message);
        res.status(201).send({
            success: 'the message is created',
            details: newMessage
        });
    } catch(e) {
        res.status(501).send({
            failure: "the message wasn't saved"
        });
    };
});

router.put('/message/:message_id', async (req, res) => {

    try {
        let updatedMessage = await updateMessage(req.params.message_id, req.body.message);
        res.status(200).send({
            success: 'the message is updated',
            details: updatedMessage
        });
    } catch(e) {
        res.status(501).send({
            failure: 'the message was not updated'
        });
    };
});


router.delete('/message/:message_id', async (req, res) => {

    try {
        const messageToDelete = await removeMessage(req.params.message_id);
        res.status(200).send({
            success: 'the message is deleted',
            details: messageToDelete
        });
    } catch(e) {
        res.status(501).send({
            failure: 'the message for deletion was not found'
        });
    };
});


router.get('/message/:message_id', async (req, res) => {
    try {
        const message = await getMessage(req.params.message_id);
        res.status(200).send({
            success: 'the message is retrieved',
            details: message
        }); 
    } catch(e) {
        res.status(501).send({
            failure: 'the message was not found'
        });
    };
});


router.get('/messages', async (req, res) => {
    try {
        const messages = await getListMessages();
        res.status(200).send({
            success: 'the messages are retrieved',
            details: messages
        }); 
    } catch(e) {
        res.status(501).send({
            failure: "the message weren't retrieved from the db"
        });
    };
});

module.exports = router;