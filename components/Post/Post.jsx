import { useEffect } from 'react'
import hljs from 'highlight.js'
import { marked } from 'marked'

import styles from './Post.module.scss'

export default function Post ({
  frontmatter: { title, date, cover_image },
  content
}) {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <div className="container">
      <div
        style={{backgroundImage: `url('${cover_image}')`}}
        alt="Post cover"
        className={styles.post_cover}
      />
      
      <h1 className={styles.post_title}>{title}</h1>
      <div className={styles.post_date}>Posted on {date}</div>
      <div className={styles.post_content}>
        <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
      </div>
    </div>
  )
}