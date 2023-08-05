// CAN'T GET THIS WORKING

// const request = require('supertest');
// const express = require('express');
// const roleRouter = require('./RoleRoutes'); 

// const app = express();
// app.use(express.json());
// app.use('/', roleRouter);

// describe('GET /', () => {
//     it('responds with json containing a list of all roles', async () => {
//         const res = await request(app)
//             .get('/')
//             .expect('Content-Type', /json/)
//             .expect(200);

//         // check whether the response has the correct format, etc.
//         // 
//         expect(res.body).toHaveProperty('data');
//     });
// });

// describe('GET /:roleName', () => {
//     it('responds with json containing a list of users with a given role', async () => {
//         const roleName = 'admin'; 
//         const res = await request(app)
//             .get(`/${roleName}`)
//             .expect('Content-Type', /json/)
//             .expect(200);

//         // check whether the response has the correct format, etc.
//         //
//         expect(res.body).toHaveProperty('data');
//     });
// });
