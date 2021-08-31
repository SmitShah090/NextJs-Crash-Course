function News({data}){
    return(
        <h1 className="content">
            {data}
        </h1>
    )
}
export default News
export async function getStaticProps(context) {
    console.log('Running getStaticProps');
    return {
        props: {
            data: context.preview ? "List of draft articles" : "List of published articles"
        }
    }
}