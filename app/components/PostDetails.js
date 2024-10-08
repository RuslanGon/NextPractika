import Link from "next/link.js"


const PostDetails = ({posts}) => {
  return (
    <div>
         <h3>{posts.title}</h3>
        <p>{posts.body}</p>
        <strong>Avtor ID {posts.userId}</strong>
        <br></br>
        <Link href='/'>Go back</Link>
    </div>
  )
}

export default PostDetails