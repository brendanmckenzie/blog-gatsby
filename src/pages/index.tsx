import * as React from "react";
import { graphql, Link } from "gatsby";
import { Helmet } from "react-helmet";
import {
  Section,
  Container,
  Columns,
  Column,
  Buttons,
} from "../components/Bulma";
import "../style/style.scss";


type Props = {
  data: { honegumi: { latestPosts: any } };
};

const HomePage: React.FC<Props> = ({
  data: {
    honegumi: { latestPosts },
  },
}) => {
  return (
    <>
      <Helmet>
        <title>{`Brendan McKenzie`}</title>
        <meta name="description" content={`page.seoDescription`} />
      </Helmet>
      <Section>
        <Container>
          <Columns>
            <Column>
              <h1 className="title is-1">Brendan McKenzie</h1>
              <p>
                Software and technology enthusiast, focussed on pressing the
                envelope with emerging technologies.
              </p>
              <hr />
              <Buttons>
                <a
                  href="https://www.twitter.com/officialbmck"
                  className="button is-outlined is-link is-rounded"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon">
                    <i className="fa fa-twitter" />
                  </span>
                  <span>Twitter</span>
                </a>
                <a
                  href="https://github.com/brendanmckenzie"
                  className="button is-outlined is-dark is-rounded"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="icon">
                    <i className="fa fa-github" />
                  </span>
                  <span>Github</span>
                </a>
                <a
                  href="mailto:hello@brendanmckenzie.com"
                  className="button is-light is-rounded"
                >
                  <span className="icon">
                    <i className="fa fa-envelope" />
                  </span>
                  <span>Email</span>
                </a>
              </Buttons>
            </Column>
            <Column>
              <h2 className="title is-2">Latest posts</h2>
              <ul>
                {latestPosts.nodes.map((ent) => (
                  <li key={ent.id}>
                    {new Date(ent.date).toLocaleDateString()}{" "}
                    <Link
                      to={`/posts/${ent.date.substr(0, 4)}/${parseInt(
                        ent.date.substr(5, 2),
                        10
                      )}/${ent.alias}`}
                    >
                      {ent.title}
                    </Link>{" "}
                    <small>{ent.category}</small>
                  </li>
                ))}
              </ul>
            </Column>
          </Columns>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;

export const query = graphql`
  query {
    honegumi {
      latestPosts: allBlogPosts(skip: 0, take: 10, orderBy: DATE_DESC) {
        nodes {
          id
          title
          date
          alias
          category
        }
      }
    }
  }
`;