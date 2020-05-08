import React from 'react'
import { graphql } from 'gatsby'
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
} from '../components'
import { H1, P } from '../elements'

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Container>
      <FeatureImage />
      <Content>
        <H1 textAlign="center" margin="0 0 1rem 0">
          Hello Gatsby
        </H1>
        <P color="dark2" textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quod,
          velit unde minus iusto fugit voluptas expedita, tempora iste quae
          cupiditate dignissimos accusamus magni rerum eius nisi similique eos
          fugiat.
        </P>
        {posts.map(({ node }) => (
          <ContentCard
            key={node.frontmatter.slug}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            excerpt={node.frontmatter.excerpt}
            slug={node.frontmatter.slug}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
`

export default allPosts
