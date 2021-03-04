import PostInterface from "@/interfaces/post";

export default (
  posts: PostInterface[] | undefined,
  postName: string
): PostInterface[] | undefined => {
  if (!posts) {
    return undefined;
  }

  return posts.filter((post: PostInterface): boolean => {
    return post.category === postName;
  });

};
