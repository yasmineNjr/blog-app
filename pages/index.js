import { Fragment } from "react";
import Head from "next/head";

import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import { getFeaturedPosts } from "@/lib/posts-util";

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

function HomePage(props){
    return (
        <Fragment>
            <Head>
                <title>Rose's Blog</title>
                <meta name='description' content='I post about programming and web development.'/>
            </Head>
            <Hero/>
            <FeaturedPosts posts={props.posts}/>
        </Fragment>
    )
}
export function getStaticProps(){
    
    const FeaturedPosts = getFeaturedPosts();
    
    return{
        props: {
            posts: FeaturedPosts
        },
    }
}
export default HomePage;