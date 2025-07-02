import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData, PostData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import type { GetStaticProps } from 'next'

interface HomeProps {
  allPostsData: PostData[]
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>alex</strong>. I'm a software engineer and a translator. You can contact me on <a href="https://twitter.com/chibicode">Twitter</a>.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link legacyBehavior href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
} 