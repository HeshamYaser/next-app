import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import styles from "../../styles/posts.module.css"

const index = (props) => {
  return (
    <div >
      <Head>
        <title>posts</title>
      </Head>
        {props.posts.map(post=> (
      <div className={styles.posts}>
          <Link key={post.id} className={styles.one} href={`/posts/${post.id}`}>
            {post.title}
          </Link>
      </div>
        ))}
    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch(`https://jsonplaceholder.ir/posts?_limit=10`) ;
  const data = await res.json();


  return {
    props: {
      posts: data
    }
  }
}

export default index