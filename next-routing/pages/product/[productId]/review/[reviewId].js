import {useRouter} from 'next/router'
const ReviewDetail = () => {

    const router = useRouter()
    const { productId, reviewId } = router.query
    return (
        <div>
            Review {reviewId} from product {productId}
        </div>
    )
}

export default ReviewDetail
