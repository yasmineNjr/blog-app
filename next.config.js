/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
// const nextConfig = {
//     env: {
//         mongodb_username: 'Rose',
//         mongodb_password: 'S0aeGCqsfVmKJDAV',
//         mongodb_clustername: 'cluster0',
//         mongodb_database: 'my-site',
//     }
// }

// module.exports = nextConfig
module.exports = (phase) => {
    if(phase === PHASE_DEVELOPMENT_SERVER){
       return {
        env: {
            mongodb_username: 'Rose',
            mongodb_password: 'S0aeGCqsfVmKJDAV',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site-dev',
        }
       }
    }
    return{
        env: {
            mongodb_username: 'Rose',
            mongodb_password: 'S0aeGCqsfVmKJDAV',
            mongodb_clustername: 'cluster0',
            mongodb_database: 'my-site',
        }
    }
}