import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import Markdown from "react-markdown";

import "../style/style.scss";
import { Container, Section, Columns, Column } from "../components/Bulma";

type BlogPost = PageProps<{
  post: {
    id: string;
    title: string;
    body: string;
    alias: string;
    date: string;
    tags: string;
    category: string;
    summary: string;
  };
}>;

const BlogPost: React.FC<BlogPost> = ({ data: { post } }) => (
  <>
    <Helmet>
      <title>{`${post.title} - Brendan McKenzie`}</title>
      <meta name="description" content={post.summary} />
    </Helmet>

    <Section>
      <Container>
        <Columns>
          <Column span={4}>
            <h1 className="title">{post.title}</h1>
            <h2 className="subtitle">{post.summary}</h2>
            <dl className="is-horizontal">
              <dt>Posted</dt>
              <dd>{post.date}</dd>
              {post.category && (
                <>
                  <dt>Category</dt>
                  <dd>{post.category}</dd>
                </>
              )}
              {post.tags && (
                <>
                  <dt>Tags</dt>
                  <dd>{post.tags}</dd>
                </>
              )}
            </dl>
            <hr />
            <Link to="/" className="button is-rounded">
              <span className="icon">
                <i className="fad fa-arrow-left" />
              </span>
              <span>Home</span>
            </Link>
          </Column>
          <Column>
            <Markdown className="content" source={post.body} />
          </Column>
        </Columns>
      </Container>
    </Section>
    <Section>
      <div className="has-text-centered">
        <small>
          Powered by{" "}
          <a
            href="https://www.pokko.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pokko
          </a>
        </small>
      </div>
    </Section>
  </>
);

export default BlogPost;

export const query = graphql`
  query($entryId: String!) {
    post: pokPost(id: { eq: $entryId }) {
      id
      title
      body
      alias
      date
      tags
      category
      summary
    }
  }
`;
