import type { NextPage } from 'next'
import fs from "fs"
import About from '../components/About'
import Footer from '../components/Footer'
import HeroComponent from '../components/HeroComponent'
import HIW from '../components/HIW'
import Navbar from '../components/Navbar'
import OurServices from '../components/OurServices'
import OurTeam from '../components/OurTeam'
import Testimonials from '../components/Testimonials'
import matter from 'gray-matter'
import path from 'path'
import BlogComponent from '../components/BlogComponent'

const Home = (props: {
  posts: [{
    slug: string,
    frontMatter: {
      title: string,
      date: string,
      cover_image: string
    }
  }]
}) => {
  const content = props.posts.filter((item, index) => {
    return index < 5;

  })

  return (
    <div>
      <Navbar />
      <HeroComponent />
      <About />
      <HIW />
      <OurServices />
      <Testimonials />
      <OurTeam />
      <div id='blog' className='py-12 flex bg-[#f5f6fe] flex-col justify-center items-center'>
        <h1 className='sm:text-5xl text-3xl mb-12 font-semibold text-[#1f2278]'>Our Latest News</h1>

        <div className='sm:p-4 flex flex-wrap justify-center'>
          {content.map(({ slug, frontMatter: { title, date, cover_image } }) => (
            <BlogComponent key={slug} Heading={title} Img={cover_image} date={date} slug={slug} />
          ))}
        </div>
      </div>
      <Footer />


    </div>
  )
}
export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.filter(filename => filename.includes(".md")).map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      slug,
      frontMatter,
    }
  }).sort((a, b) => (
    new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  ));

  return {
    props: {
      posts
    },
  }
}

export default Home