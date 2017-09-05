export default {
    database: {
        name: process.env['DB_NAME'],
        host: process.env['DB_HOST'],
        port: process.env['DB_PORT'],
        user: process.env['DB_USER'],
        password: process.env['DB_PASSWORD'],
        userRootDatabase: process.env['DB_USER_ROOT_DATABASE']

    },
    service: {
      host: process.env['HOST'],
      port: process.env['PORT']
    }
};
