/* eslint-disable default-case */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { parse } from 'path';
import parseEndpoint from './parseEndpoint';
import request from './requests';

const createEndpoint = function(type: any, endpointUrl: any) {
  console.log('creating endpoint...');
  return async (options: any) => {
    let response: any;
    let parsedEndpoint: string | null = null;
    if (options?.pathParameters) {
      parsedEndpoint = parseEndpoint(endpointUrl, options.pathParameters);
    }
    switch (type) {
      case 'GET': {
        console.log(`GET REQUEST ${parsedEndpoint}`);
        response = await request(parsedEndpoint)
          .then((res: any) => res.json());
        break;
      }
    }
    return {
      data: response,
    };
  };
};

export default (endpoints: any) => {
  const root: any = {};
  console.log(`in default export`);
  endpoints.forEach((endpoint: any) => {
    console.log(`creating endpoint for: ${endpoint.name}`)
    root[endpoint.name] = createEndpoint(endpoint.type, endpoint.endpointUrl);
  });
  return root;
};
