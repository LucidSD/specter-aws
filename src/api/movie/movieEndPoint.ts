import createEndpoints from '../../utils/createEndpoints';

import { RequestOption } from '../../utils/interfaces';

const endpointBaseURL = 'movie';

const endpoints: RequestOption[] = [
  {
    type: 'GET',
    endpointUrl: `${endpointBaseURL}/{movie_id}`,
    name: 'getDetails',
  },
];

export default createEndpoints(endpoints);
