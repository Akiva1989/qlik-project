const {isPalindrome} = require('../utils/palindrome')
const Message = require('../models/message')
const moment = require('moment')


const removeMessage = async (id) => {

    const messageToDelete = await Message.findOne({returning: true, where: {id: id}})
    if (messageToDelete!==null) {
        await Message.destroy({returning: true, where: {id: id}})
        return messageToDelete;
    }
    else {
        throw new Error("couldn't find the mesaage: "+e);
    }

};

const addMessage = async (message) => {
    let pdr = isPalindrome(message);
    const newMessage = new Message({
        message: message,
        isPalindrome: pdr
    });

    try {
        const result = await newMessage.save();
        return result.dataValues;
    } catch(e) {
        throw new Error("couldn't store the message: "+e);
    };
};

const updateMessage = async (id, message) => {
    let pdr = isPalindrome(message);
    try {
        const updatedMessage = await Message.update({message: message, isPalindrome :pdr, updatedAt: moment().format()}, {returning: true, where: {id: id}});
        return updatedMessage[1][0].dataValues;
    } catch(e) {
        throw new Error("couldn't find the message: "+e);
    };

};

const getListMessages = async () => {
    let existingMessages = await Message.findAll();
    return  existingMessages;
}

const getMessage = async (id) => {
    let message = await Message.findOne({returning: true, where: {id: id}});
    return  message;
};

module.exports = {
    getMessage: getMessage,
    getListMessages: getListMessages,
    updateMessage: updateMessage,
    addMessage: addMessage,
    removeMessage: removeMessage 
};