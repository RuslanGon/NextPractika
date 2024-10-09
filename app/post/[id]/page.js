import PostDetails from "@/app/components/PostDetails.js"

export async function generateMetadata({ params }) {
  const post = await fetchPostById(params.id);
  return {
    title: post.title,
    description: post.body,
  };
}

async function fetchPostById(id) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
  const result = await response.json();
  return result;
}

export async function generateStaticParams() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return posts.map(post => ({
    id: post.id.toString(),
  }));
}

const Post = async ({ params: { id } }) => {
  const posts = await fetchPostById(id);
  return (
    <div className="post">
      <PostDetails posts={posts} />
    </div>
  );
};

export default Post;
