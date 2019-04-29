/* TODO
 * - Check request headers for robot requests
 */

module.exports = function middleware(request, response, next) {
  /* It was called as a middleware */
  if (response) {
    response.setHeader('X-Robots-Tag', 'noindex, nofollow')
    next()
  }
  /* norobot(true) */
  else if (!!request) {
    return middleware
  }
  /* norobot(false) */
  else {
    return (request, response, next) => next()
  }
}
