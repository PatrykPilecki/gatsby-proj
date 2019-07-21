import React from 'react'
import { Link, graphql } from 'gatsby'
// import './post.css';
import '../style/style.scss';
import Layout from '../components/layout'


const Template1 = (props) => (
  <div className={`post-list ${props.templateName}`}>
    <h1>{props.node.frontmatter.title}</h1>
    <span>{props.node.frontmatter.date}</span>

  </div>
 )
 const Template2 = Template1;
 const Template3 = Template1;
 const Template4 = Template1;
 const Template5 = Template1;
 const Template6 = Template1;
 const Template7 = Template1;
 const Template8 = Template1;
 const Template9 = Template1;




const PostTemplate = (props) => {
  const selectedTemplate = (
    props.index === 0 && <Template1 templateName={props.templateName} node={props.node} />
  ) || (
      props.index === 1 && <Template2 templateName={props.templateName} node={props.node} />
    ) || (
      props.index === 2  && <Template3 templateName={props.templateName} node={props.node} />
    ) || (
      props.index === 3  && <Template4 templateName={props.templateName} node={props.node} />
    ) || (
      props.index === 4  && <Template5 templateName={props.templateName} node={props.node} />
    )
    || (
      props.index === 5  && <Template6 templateName={props.templateName} node={props.node} />
    )
    || (
      props.index === 6  && <Template7 templateName={props.templateName} node={props.node} />
    )
    || (
      props.index === 7  && <Template8 templateName={props.templateName} node={props.node} />
    )
    || (
      props.index === 8 && <Template9 templateName={props.templateName} node={props.node} />
    )
  return selectedTemplate;
}


const IndexPage = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>

      <div class="container">
        <div class="grid"> 
        {postList.edges.map(({ node }, i) => {
          const templateName = (
            i === 0 && 'template-1') ||
            (i === 1  && 'template-2') ||
            (i === 2 && 'template-3') ||
            (i === 3 && 'template-4') ||
            (i === 4 && 'template-5') ||
            (i === 5 && 'template-6') ||
            (i === 6 && 'template-7') ||
            (i === 7 && 'template-8') ||
            (i === 8 && 'template-9'); 
          return (
            <Link to={node.fields.slug} key={i} id="link-style" className={templateName} >
              <PostTemplate index={i} node={node} />
            </Link>
          )
        })}
        </div>
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