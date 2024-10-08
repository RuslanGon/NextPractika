
async function fetchPostById (id) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    const result = await response.json()
    return result
  }

const Post = async ({params: {id}}) => {
    const posts = await fetchPostById(id)
  return (
    <div>
        <h3>{posts.title}</h3>
        <p>{posts.body}</p>
        <strong>Avtor ID {posts.id}</strong>
    </div>
  )
}

export default Post