function ArticleByCategory({category, articles}){
    return (
        <div>
            <h1>Showing news for category <i> {category} </i></h1>
            {
                articles.map(article => {
                    return(
                        <div key={article.id}>
                            <h2>
                                {article.id} {article.title}
                            </h2>
                            <p> {article.description} </p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ArticleByCategory

export async function getServerSideProps(context) {
    const {params} = context
    const {category} = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category
        }
    }
}