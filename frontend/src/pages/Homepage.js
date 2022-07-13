import React from 'react'
import { useQuery,gql } from '@apollo/client'
import { Link } from 'react-router-dom'


const REVIEWS = gql`
query GetReviews{
    reviews{
      data{
        id,
        attributes{
          title,
        }
      }
    }
  }
`

export default function Homepage() {

    const { loading, error, data } = useQuery(REVIEWS)

    console.log({
        loading,
        error,
        data
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error </p>



    console.log(data)
    return <div>
        test
    </div>

    // return (
    //     <div key="homepage">
    //         {
    //             data.data.map(d => {
    //                 const review = d.attributes;

    //                 return (<div key={review.id} className="review-card" >
    //                     <div className="rating">{review.rating}</div>
    //                     <h2>{review.title}</h2>

    //                     <small>console list</small>

    //                     <p>{review.Body.substring(0, 200)}...</p>
    //                     <Link to={`/details/${d.id}`}>Read more</Link>
    //                 </div>)
    //             })
    //         }
    //     </div >
    // )
}
