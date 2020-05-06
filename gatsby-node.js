// exports.createPages = async ({ action, graphql }) => {
//   const { data } = await graphql`
//     query {
//       allMdx(sort: { fields: frontmatter___date, order: DESC }) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `
//   // Crate paginated pages for posts
//   const POSTS_PER_PAGE = 3

//   const numPages = Math.ceil(data.allMdx.edges.length / POSTS_PER_PAGE)

//   Array.from({ length: numPages }).forEach((_, i) => {
//     actions.createPages({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: require.resolve('./src/templates/allPost.js'),
//       context: {
//         limit: POSTS_PER_PAGE,
//         skip: i * POSTS_PER_PAGE,
//         numPages,
//         currentPage: i + 1,
//       },
//     })
//   })

//   // Create single blog posts
//   data.allMdx.edges.forEach(edge => {
//     const { frontmatter, id } = edge.node
//     const { slug } = frontmatter

//     actions.createPages({
//       path: slug,
//       component: require.resolve('./src/templates/singlePost.js'),
//       context: {
//         id,
//       },
//     })
//   })
// }
