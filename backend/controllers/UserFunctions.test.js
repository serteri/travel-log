// CANT GET THIS WORKING - TRYING TO TEST ENCRYPTION, DECRYPTION AND HASHSTRING FUNCTIONS

// const { encryptString, decryptString, hashString } = require('./UserFunctions);

// describe('Encryption & decryption functionality', () => {
//     test('it should encrypt and then decrypt a string back to its original value', () => {
//         const originalValue = 'Test value';
//         const encrypted = encryptString(originalValue);
//         const decrypted = decryptString(encrypted);

//         expect(decrypted).toEqual(originalValue);
//     });
// });

// describe('Hashing functionality', () => {
//     test('it should hash a string and produce a different value', async () => {
//         const originalValue = 'Test value';
//         const hashed = await hashString(originalValue);

//         expect(hashed).not.toEqual(originalValue);
//     });

//     test('it should hash same string to different values', async () => {
//         const originalValue = 'Test value';
//         const hashed1 = await hashString(originalValue);
//         const hashed2 = await hashString(originalValue);

//         expect(hashed1).not.toEqual(hashed2);
//     });
// });
