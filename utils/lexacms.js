import { request as graphqlRequest } from 'graphql-request';

export function request({ query, variables }) {
  // Define space ID
  // Outside of this tutorial, you would replace this with your own
  // space ID
  const spaceId = process.env.LEXA_SPACE_ID;
  // Define LexasCMS API Endpoint
  const apiEndpoint = `https://${spaceId}.spaces.lexascms.com/delivery/graphql`;
  // Send request
  return graphqlRequest(apiEndpoint, query, variables);
}
