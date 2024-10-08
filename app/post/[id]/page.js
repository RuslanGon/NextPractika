import Link from "next/link.js"

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
        <strong>Avtor ID {posts.userId}</strong>
        <br></br>
        <Link href='/'>go back</Link>
    </div>
  )
}

export default Post