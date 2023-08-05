// CANT MAKE THIS WORK - BUT IN THREORY THIS IS A SIMPLE JEST TEST TO ESTABLISH THAT 'REGISTER-US' ENDPOINT RETRUNING '200 OK' MESSAGE

// const request = require('supertest');
// const express = require('express');
// const router = require('./UserRoutes');



// describe('POST /register-us', () => {
//   let app;
  
//   beforeEach(() => {
//     app = express();
//     app.use(express.json());
//     app.use('/register-us', router);
//   });

//   test('it should respond with a 200 status code', async () => {
//     const res = await request(app)
//       .post('/register-us')
//       .send({
//         email: 'test@test.com',
//         password: 'password123',
//         firstName: 'First',
//         lastName: 'Last',
//         address: '123 Test St',
//         phoneNumber: '1234567890',
//         role: 'user',
//       });

//     expect(res.statusCode).toEqual(200);
//   });
// });
