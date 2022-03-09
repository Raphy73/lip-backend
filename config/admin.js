module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2dbc878847403e8808d1ecace514c079'),
  },
});
