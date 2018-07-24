export const routes = {

  '/docs': {
    'GET': 'SwaggerController.doc',
    config: {
      prefix: 'swagger.prefix'
    }
  },
  '/explorer': {
    'GET': {
      config: {
        prefix: 'swagger.prefix'
      },
      directory: {
        path: 'views/docs'
      }
    }
  }
}
