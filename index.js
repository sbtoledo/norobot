function setHeader(norobot, response) {
    norobot && response.setHeader('X-Robots-Tag', 'noindex, nofollow');
}

module.exports = function (request, response, next) {

    if (response && response.setHeader) {
        setHeader(true, response);
        next();
        return;
    }

    var norobot = !!request;

    return function (request, response, next) {
        setHeader(norobot, response);
        next();
    }

}
