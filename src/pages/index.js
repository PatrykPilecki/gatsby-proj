import React from 'react'
import { Link, graphql } from 'gatsby'
// import './post.css';
import '../style/style.scss';
import Layout from '../components/layout'

const Template1 = (props) => ( 
  <div className={`post-list ${props.templateName}`}>
    <h1>{props.node.frontmatter.title}</h1>
    <span>{props.node.frontmatter.date}</span>
    <p>{props.node.excerpt}</p>
  </div>
)
const Template2 = (props) => ( 
  <div className={`post-list ${props.templateName}`}>
    <h1>{props.node.frontmatter.title}</h1>
    <span>{props.node.frontmatter.date}</span>
    <p>{props.node.excerpt}</p>
  </div>
)

const PostTemplate = (props) => {
  const selectedTemplate = (
    props.index === 0 && <Template1 templateName={props.templateName} node={props.node}/>
    ) || (
      props.index >= 1 && <Template2 templateName={props.templateName} node={props.node}/>
      )
  return selectedTemplate;
}


const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      <div class="b--blog">
      {postList.edges.map(({ node }, i) => {
        const templateName = (
          i === 0 && 'template-1') ||
          (i === 1 && 'template-2') ||
          (i > 5 && 'template-3');

        return (
          <Link to={node.fields.slug} key={i} className="link" >
         
              <PostTemplate index={i} templateName={templateName} node={node} />
              
          </Link>
        )
      })}
       </div>
    </Layout>
  )
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          fields{
            slug
          }
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
          }
        }
      }
    }
  }
`