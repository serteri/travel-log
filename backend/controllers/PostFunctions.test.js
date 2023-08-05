// CANT MAKE THIS WORK  - BUT HYPOTEHTICAL TEST BELOW TO TEST POST TRAVEL MODEL

// const { getAllPosts, getPostById, getPostsByAuthor, createPost, updatePost, deletePost } = require('./PostFunctions); 

// describe('Posts functionality', () => {
//     let mockPost;

//     beforeEach(() => {
//         mockPost = {
//             find: jest.fn(),
//             findById: jest.fn(),
//             create: jest.fn(),
//             findByIdAndUpdate: jest.fn(),
//             findByIdAndDelete: jest.fn(),
//             populate: jest.fn()
//         };
//     });

//     it('getAllPosts returns all posts', async () => {
//         mockPost.find.mockResolvedValue(['post1', 'post2']);
//         const posts = await getAllPosts.call(mockPost);
//         expect(posts).toEqual(['post1', 'post2']);
//     });

//     it('getPostById returns a post by id', async () => {
//         mockPost.findById.mockResolvedValue('post1');
//         const post = await getPostById.call(mockPost, '1');
//         expect(post).toEqual('post1');
//     });

//     it('getPostsByAuthor returns posts by a user id', async () => {
//         mockPost.find.mockResolvedValue('post1');
//         mockPost.populate.mockReturnValue(mockPost);
//         const post = await getPostsByAuthor.call(mockPost, '1');
//         expect(post).toEqual('post1');
//     });

//     it('createPost creates a new post', async () => {
//         mockPost.create.mockResolvedValue('post1');
//         const post = await createPost.call(mockPost, {});
//         expect(post).toEqual('post1');
//     });

//     it('updatePost updates a post', async () => {
//         mockPost.findByIdAndUpdate.mockResolvedValue('post1');
//         const post = await updatePost.call(mockPost, {postID: '1', updatedData: {}});
//         expect(post).toEqual('post1');
//     });

//     it('deletePost deletes a post', async () => {
//         mockPost.findByIdAndDelete.mockResolvedValue('post1');
//         const post = await deletePost.call(mockPost, '1');
//         expect(post).toEqual('post1');
//     });
// });
