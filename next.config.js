/** @type {import('next').NextConfig} */

// import { withContentlayer } from 'next-contentlayer'
const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole:true
    }
}

// module.exports = nextConfig
module.exports = withContentlayer({...nextConfig})


