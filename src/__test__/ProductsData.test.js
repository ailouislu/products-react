import { cleanup} from '@testing-library/react'
import { getPosts, getPost } from 'posts'
jest.mock('posts')

afterEach(cleanup);

test('should return correct length', async () => {
    const posts = await getPosts();
    const post = await getPost();
    expect(posts.data).toHaveLength(10);
    expect(post.data).toHaveLength(1);
})

test('should return correct posts', async () => {

    const exceptPosts =  [
      {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
    ];
    const posts = await getPosts();
    expect(posts.data).toEqual(expect.arrayContaining(exceptPosts));

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

