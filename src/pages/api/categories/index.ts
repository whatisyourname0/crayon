import { Post } from '@interfaces/post';
import { local } from '@utils/fetch';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const rawPostList = await local('/configs/post.json');
    const postList: Post[] = JSON.parse(rawPostList);

    const categories: string[] = [
      ...new Set(
        postList
          .filter((post): post is Required<Post> => !!post.category)
          .map((post) => post.category),
      ),
    ];

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send(error);
  }
}
