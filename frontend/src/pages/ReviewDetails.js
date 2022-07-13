import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function ReviewDetails() {
    const { id } = useParams()
    const { loading, error, data } = useFetch('http://localhost:1337/api/reviews/' + id)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;

    console.log({ data })

    const review = data.data.attributes;
    const d = data.data;

    return (
        <div>
            <div key={review.id} className="review-card" >
                <div className="rating">{review.rating}</div>
                <h2>{review.title}</h2>

                <small>console list</small>

                <p>{review.Body}</p>
            </div>
        </div>
    )
}
