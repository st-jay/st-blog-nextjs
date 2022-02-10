import { useState, useMemo } from "react";

import Link from "next/link"
import { classList } from "../../utils/utils"

import styles from "./PostSection.module.scss"

export default function PostSection (props) {
  const [selectedTab, setSelectedTab] = useState("all");

  const list = useMemo(() => {
    if (selectedTab === "all") {
      return props.posts;
    }

    return props.posts.filter((post) => {
      return post.frontmatter.blog_category === selectedTab
    })
  }, [props.posts, selectedTab])


  return (
    <div className={styles.post_section_container}>
      <div className={styles.posts_tab_section}>
        <button
          onClick={() => setSelectedTab("all")}
          className={classList(styles.posts_tab_button, selectedTab === "all" ? styles.posts_tab_button_active : "")}
        >All</button>
        <button
          onClick={() => setSelectedTab("programming")}
          className={classList(styles.posts_tab_button, selectedTab === "programming" ? styles.posts_tab_button_active : "")}
        >Programming</button>
        <button
          onClick={() => setSelectedTab("sessions")}
          className={classList(styles.posts_tab_button, selectedTab === "sessions" ? styles.posts_tab_button_active : "")}
        >Sessions</button>
      </div>
      <div className="container">
        <span className={styles.dotted_bg} />

        <p className={styles.section_title}>{props.title}</p>

        <div className={styles.posts_container}>
          {list.map((post, idx) => {
            return (
              <div className={styles.post_card} key={idx}>
                <div
                  className={styles.post_card_img}
                  style={{backgroundImage: `url('${post.frontmatter.cover_image}')`}}
                />

                <div className={styles.post_content_container}>
                  <div>
                    <p className={styles.post_card_title}>{post.frontmatter.title}</p>
                    <p className={styles.post_card_excerpt}>{post.frontmatter.excerpt}</p>
                    <p style={{ color: "#f93" }}>{post.frontmatter.blog_category}</p>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <a className={classList("a", styles.post_card_link)}>
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}