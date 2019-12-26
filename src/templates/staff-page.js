import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const StaffPageTemplate = ({ title, staff, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              {staff && (
                <ul>
                  staff.map((item) => <li key={item.name}>{item.name}</li>)
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

StaffPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  staff: PropTypes.array,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const StaffPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <StaffPageTemplate
        title={post.frontmatter.title}
        staff={post.frontmatter.staff}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

StaffPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default StaffPage;

export const staffPageQuery = graphql`
  query StaffPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        staff {
          name
          role
          startDate
          description
        }
      }
    }
  }
`;
