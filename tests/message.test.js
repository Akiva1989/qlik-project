const request = require('supertest');
const app = require('../src/app');
const Message = require('../src/models/message');


test('should create new palindrome message', async () => {
    await request(app).post('/message').send({
        message: "a,.BC De-f.E,  d c : BA"
    }).expect(201);
});


test('should update new palindrome message', async () => {
    const message = await Message.findOne({
        order: [ [ 'createdAt', 'DESC' ]],
    });
    await request(app).put('/message/'+message.id).send({
        message: "testing the update"
    }).expect(200);
});



test('should delete new palindrome message', async () => {
    const message = await Message.findOne({
        order: [ [ 'createdAt', 'DESC' ]],
    });
    await request(app).delete('/message/'+message.id).send().expect(200);
});