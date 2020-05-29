import React from "react"
import PropTypes from "prop-types"
import Hero from "../components/hero"
import Call_to_action from "../components/call_to_action"
import Service from "../components/services"
import Work from "../components/work"
import About from "../components/about"
import Footer from "../components/landing_footer"
import Layout from "../components/CustomLayout"
import CallToAction from "../components/call_to_action"

export const IndexPageTemplate = ({
  bgimage,
  siteName,
  heading,
  subheading,
  calltoaction,
  services,
  work,
  about,
  footer
}) => (
  <div>
    <Hero title={siteName} heading={heading} subheading={subheading} image={bgimage}/>
    <CallToAction data={calltoaction}/>
    <Service data={services}/>
    <Work data={work}/>
    <About data={about}/>
    <Footer data={footer}/>
  </div>
)

IndexPageTemplate.propTypes = {
  bgimage: PropTypes.object,
  siteName: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  calltoaction: PropTypes.shape({
    title: PropTypes.string,
    description:PropTypes.string
  }),
  services: PropTypes.shape({
    images: PropTypes.array,
    service:PropTypes.array
  }),
  work: PropTypes.shape({
    headerImage: PropTypes.object,
    logos:PropTypes.array
  }),
  about: PropTypes.shape({
    sideImage: PropTypes.object,
    description:PropTypes.string
  }),
  footer: PropTypes.shape({
    address:PropTypes.string,
    contact:PropTypes.string,
    phone:PropTypes.string
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        bgimage={frontmatter.bgimage}
        siteName={frontmatter.siteName}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        calltoaction={frontmatter.calltoaction}
        services={frontmatter.services}
        work={frontmatter.work}
        about={frontmatter.about}
        footer={frontmatter.footer}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
    frontmatter {
      siteName,
      bgimage{
        childImageSharp{
          fluid(maxWidth:1000){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      heading,
      subheading,
      calltoaction {
        title
        description
      },
      services{
        images{
          image{
                childImageSharp{
              fluid(maxWidth:1000){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        service{
          image{
                childImageSharp{
              fluid(maxWidth:1000){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          },
          title,
          description
        }
      }
      work{
        headerImage{
          childImageSharp{
            fluid(maxWidth:1000){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        logos{
          image{
            id,
            childImageSharp{
              fluid(maxWidth:1000){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      about{
        sideImage{
          childImageSharp{
            fluid(maxWidth:500){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        },
        description
      }
      footer{
        address,
        contact,
        phone
      }
    }
  }
}
`
