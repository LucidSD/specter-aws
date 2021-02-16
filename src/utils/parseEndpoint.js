module.exports = (endpoint, params) => {
  const regExp = /{(.+?)}/;
  let parsedEndpoint = endpoint;
  let match = regExp.exec(parsedEndpoint);

  while (match) {
    parsedEndpoint = parsedEndpoint.replace(match[0], params[match[1]]);
    match = regExp.exec(parsedEndpoint);
  }

  return parsedEndpoint;
};
