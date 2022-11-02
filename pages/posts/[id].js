import React from 'react'

const Details = (props) => {
  return (
    <div>
        <p>{props.post.title}</p>
        <p>{props.post.body}</p>
    </div>
  )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.ir/posts/${context.params.id}`) ;
    const data = await res.json() ;

    return {
        props: {
            post: data
        }
    }
}

export default Details