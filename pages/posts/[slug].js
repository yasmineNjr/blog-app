import Head from "next/head";
import PostContent from "@/components/post-detail/post-content";
import { getPostData, getPostsFiles } from "@/lib/posts-util";
import { Fragment } from "react";

function PostDetailPage(props) {
    
    return <Fragment>
        <Head>
            <title>{props.post.title}</title>
            <meta name='description' content={props.post.excerpt}/>
        </Head>
        <PostContent post={props.post}/>
    </Fragment>

}

export function getStaticProps(context) {
    
    const { params } = context;
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

//we need to export another function 'getStaticPaths' because its a slug page to know any slug
export function getStaticPaths() {

    const postFileNames = getPostsFiles();
    const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));//removes the file extension)
    // // const events = await getFeaturedEvents();
    // //const paths = events.map(event => ({params: { eventId: event.id}}));
    return{
        paths: slugs.map(slug => ( { params: { slug: slug}})),
        //paths: [],
        fallback: false,
    }
}
export default PostDetailPage;