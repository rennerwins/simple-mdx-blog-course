import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Container, Post, FeatureImage } from '../components'
import { H1 } from '../elements'

const singlePost = ({ data }) => {
  const { frontmatter, body } = data.mdx
  const featureImage = frontmatter.featureImage.childImageSharp.fixed

  return (
    <Container>
      <FeatureImage fixed={featureImage} />
      <Post>
        <H1 margin="0 0 2rem 0">{frontmatter.title}</H1>
        <MDXRenderer>{body}</MDXRenderer>
      </Post>
    </Container>
  )
}

export const query = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        excerpt
        slug
        title
        featureImage {
          childImageSharp {
            fixed(quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

export default singlePost
