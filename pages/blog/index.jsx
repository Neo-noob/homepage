import React from 'react';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import {
  Content,
  HeadingLarge,
  HeadingMedium,
  Anchor,
  Paragraph,
} from '../../components/Typography';

const Posts = ({ list }) =>
  list.map((v) => (
    <section key={v.slug}>
      <HeadingMedium>
        <Anchor href={`/blog/${v.slug}`}>{v.title}</Anchor>
        <Paragraph size="small">
          <time>
            {format(parseISO(v.date), 'yyyy-MM-dd')} by {v.author}
          </time>
        </Paragraph>
      </HeadingMedium>
    </section>
  ));

const NoContent = () => <h3>There are currently no posts.</h3>;

const PostList = ({ list }) => (list ? <Posts list={list} /> : <NoContent />);

const Page = () => (
  <Content>
    <article>
      <HeadingLarge>Development Blog</HeadingLarge>
      <PostList list={process.env.BLOG_POST_LIST} />
    </article>
  </Content>
);

export default Page;
