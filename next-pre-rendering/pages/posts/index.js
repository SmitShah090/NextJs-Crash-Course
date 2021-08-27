
const PostList = ({posts}) => {
    return (
        <div>
            {posts.map(post => (
                <div>
                    <h3>
                       {post.id} {post.title} 
                    </h3>
                    <h5>
                        {post.body}
                    </h5>
                </div>
            ))}
        </div>
    )
}

export default PostList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    return {
        props: {
            posts: data.slice(0, 3)
        },
    }
}
