import { cleanup} from '@testing-library/react'
import { getComments, getPost } from 'comments'
jest.mock('comments')

afterEach(cleanup);

test('should return correct length', async () => {
    const comments = await getComments();
    const comment = await getPost();
    expect(comments.data).toHaveLength(5);
    expect(comment.data).toHaveLength(1);
})

test('should return correct comments', async () => {
    const exceptComments =  [
      {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
    ];
    const comments = await getComments();
    expect(comments.data).toEqual(expect.arrayContaining(exceptComments));
})

test('should return correct post', async () => {
    const exceptPost =  [
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
      }
    ];
    const post = await getPost();
    expect(post.data).toEqual(expect.arrayContaining(exceptPost));
})

