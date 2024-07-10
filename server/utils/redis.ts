import {Redis} from 'ioredis';
require('dotenv').config();

const redisClient = () => {
    if(process.env.REDIS_URL){
        console.log(`Redis connected`);
        return process.env.REDIS_URL;
    }
    throw new Error('Redis connection failed');
};

export const redis = new Redis(redisClient());


// import Redis from "ioredis"

// const client = new Redis("rediss://default:AdDMAAIncDE4OGQ0MzZkMDg5NWE0Mjc4OGRkOGFhZTZjZDNjOWYwYXAxNTM0NTI@up-coyote-53452.upstash.io:6379");
// await client.set('foo', 'bar');