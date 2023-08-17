import Head from "next/head";
import Allposts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import { Fragment } from "react";

// const DUMMY_POSTS = [
//     {   
//         title: 'Getting Started With NestJS', 
//         image: 'getting-started-nestjs.png', 
//         date: '2022-02-10', 
//         excerpt: 'NestJS is a React framework for production - it makes building fullstack', 
//         slug: 'getting-started-with-nestjs' 
//     },
//     {   
//         title: 'Getting Started With NestJS', 
//         image: 'getting-started-nestjs.png', 
//         date: '2022-02-10', 
//         excerpt: 'NestJS is a React framework for production - it makes building fullstack', 
//         slug: 'getting-started-with-nestjs2' 
//     },
//     {   
//         title: 'Getting Started With NestJS', 
//         image: 'getting-started-nestjs.png', 
//         date: '2022-02-10', 
//         excerpt: 'NestJS is a React framework for production - it makes building fullstack', 
//         slug: 'getting-started-with-nestjs3' 
//     },
//     {   
//         title: 'Getting Started With NestJS', 
//         image: 'getting-started-nestjs.png', 
//         date: '2022-02-10', 
//         excerpt: 'NestJS is a React framework for production - it makes building fullstack', 
//         slug: 'getting-started-with-nestjs4' 
//     },
// ];

function AllPostsPage(props) {
    
    return <Fragment>
         <Head>
            <title>All My Posts</title>
            <meta name='description' content='A list of all programming-related tutorials!'/>
        </Head>
        <Allposts posts={props.posts}/>
    </Fragment>
}

export function getStaticProps() {

    const allPosts = getAllPosts();

    return{
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage;