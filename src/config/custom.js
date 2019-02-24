export default {
  RESOLVERS: {
    STARWARS_URL: process.env.SOLO_CHAT_RESOLVER_STARWARS_URL || `https://swapi.co/api/people/?search={{query}}`,
  },
  DATE_FORMAT: 'LLLL'
};