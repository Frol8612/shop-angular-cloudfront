import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://7lnrsyjqx8.execute-api.eu-west-1.amazonaws.com/dev',
    bff: 'https://fe8vekrcn8.execute-api.eu-west-1.amazonaws.com/dev',
    cart: 'http://frol8612-cart-api-dev.eba-8gzdv8c5.eu-west-1.elasticbeanstalk.com/api',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: true,
  },
};
