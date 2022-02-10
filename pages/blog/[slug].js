import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../../components/Post/Post'

export default function PostPage({
  frontmatter,
  content
}) {
  return (
    <>
      <Post
        frontmatter={frontmatter}
        content={content}
      />
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileContent = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(fileContent)

  return {
    props: {
      frontmatter,
      content
    },
  }
}
