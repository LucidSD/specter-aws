export type RequestType = 'POST' | 'GET' | 'DELETE';

export interface RequestOption {
  type: RequestType;
  endpointUrl: string;
  name: string;
}
