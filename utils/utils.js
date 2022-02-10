// joins a list of classes
export const classList = (...classes) => {
  return classes.join(" ")
}

// sorts posts by date
export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}