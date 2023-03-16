import redis from 'redis';

const client = redis.createClient({
  host: 'redis-ecomm',
  port: 6379,
  prefix: 'blocklist: ',
});

export default client;
