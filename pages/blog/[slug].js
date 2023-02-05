import Head from 'next/head';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import NewsPostPage from '../../components/NewsPostPage';
import Post from '../../components/PostPage';
import { getAllPosts } from '../../lib/dato-cms';

function PostPage({post, posts}) {
    console.log(posts, 'POSTAGEM PAGE 1')

  return (
    <div id="post__page">
        <Head>
            {/* Primary Meta Tags */}
            <title>{post.title} | Neme Advogados </title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content="Advogados especialistas em Direito Empresarial e Tributário. Localizados em Londrina-PR, oferecemos soluções personalizadas e eficientes para proteger seus negócios e maximizar seus lucros." />
            <meta name="title" content={`${post.title} | Neme Advogados`}/>

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://www.nemeadvogados.adv.br/"/>
            <meta property="og:title" content={`${post.title} | Neme Advogados`}/>
            <meta property="og:description" content="Advogados especialistas em Direito Empresarial e Tributário. Localizados em Londrina-PR, oferecemos soluções personalizadas e eficientes para proteger seus negócios e maximizar seus lucros."/>
            <meta property="og:image" content="https://i.ibb.co/ZxQ1JYf/neme-tag-img.jpg"/>

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://www.nemeadvogados.adv.br/"/>
            <meta property="twitter:title" content={`${post.title} | Neme Advogados`}/>
            <meta property="twitter:description" content="Advogados especialistas em Direito Empresarial e Tributário. Localizados em Londrina-PR, oferecemos soluções personalizadas e eficientes para proteger seus negócios e maximizar seus lucros."/>
            <meta property="twitter:image" content="https://i.ibb.co/ZxQ1JYf/neme-tag-img.jpg"></meta>
        </Head>

        <Header />
        <main>
            <Post post={post} />
            <NewsPostPage posts={posts} post={post} />
        </main>
        <Footer />
    </div>
  )
}

export const getStaticProps = async ({ params }) => {
    const slug = params?.slug;
    const posts = await getAllPosts();
    const post = posts.find((s) => s.slug === slug) || null;

    if(!post) {
        return {
        notFound: true,
        };
    }

    return {
        props: {
        post,
        posts,
        },
        revalidate: 60,
    };
};

export const getStaticPaths = async () => {
    const posts = await getAllPosts();
    const slugs = posts.map((s) => ({ params: { slug: s.slug }}));

    return {
        paths: slugs,
        fallback: false,
    }
}
  
export default PostPage;