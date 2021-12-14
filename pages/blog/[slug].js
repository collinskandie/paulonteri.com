import PostLayout from '@/layouts/PostLayout'
import PageTitle from '@/components/PageTitle'
import siteMetadata from '@/data/siteMetadata'
// import generateRss from '@/lib/generate-rss'

export async function getStaticPaths() {
  const posts = siteMetadata.postsList

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.slug,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // const allPosts = await getAllFilesFrontMatter('blog')

  // // rss
  // const rss = generateRss(allPosts)
  // fs.writeFileSync('./public/index.xml', rss)

  return { props: { post: null } }
}
function TempContent() {
  return (
    <div>
      <h2>Slightly Less Big Header</h2>
      <h3>Sub-Header</h3>
      <p>Your first paragraph.</p>
      <p>Your second paragraph.</p>
      <strong>Very important things you want to say.</strong>
      <a href="https://www.muo.com/" target="_blank" rel="noreferrer">
        Go to MUO in a new tab
      </a>
      <ol>
        <li>First thing</li>
        <li>Second thing</li>
        <li>Third thing</li>
      </ol>
      <table>
        <tbody>
          <tr>
            <th>1st column</th>
            <th>2nd column</th>
          </tr>
          <tr>
            <td>Row 1, column 1</td>
            <td>Row 1, column 2</td>
          </tr>
          <td>Row 2, column 1</td>
          <td>Row 2, column 2</td>
        </tbody>
      </table>
      <blockquote>
        The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than
        the past.
      </blockquote>
    </div>
  )
}

export default function Blog(props) {
  const frontMatter = {
    wordCount: 403,
    readingTime: { text: '2 min read', minutes: 2.005, time: 120300, words: 401 },
    slug: 'guide-to-using-images-in-nextjs',
    fileName: 'guide-to-using-images-in-nextjs.mdx',
    title: 'Images in Next.js',
    date: '2020-11-11',
    tags: ['next js', 'guide'],
    draft: false,
    summary:
      'In this article we introduce adding images in the tailwind starter blog and the benefits and limitations of the next/image component.',
  }

  return (
    <>
      {frontMatter.draft !== true ? (
        <PostLayout frontMatter={frontMatter} prev={props.prev} next={props.next}>
          <TempContent />
        </PostLayout>
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{' '}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </>
  )
}
