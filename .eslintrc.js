module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb/base',
    'prettier'
  ],
  rules: {
    funcNameMatching: ['off'],
    // Prefer single quotes for strings
    quotes: ['error', 'single', { avoidEscape: false }],

    // Unused variables are errors. If intentionally unused, start the
    // variable name with _ or unused- or ignored
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^(_|unused-|[iI]gnored)',
        argsIgnorePattern: '^(_|unused-|[iI]gnored)'
      }
    ],

    // This is okay with us stylistically, so disable it
    'no-else-return': ['off'],

    'no-tabs': ['off'],
    'arrow-body-style': ['off'],

    'comma-dangle': ['off'],

    // Use AirBNB's config except change the limit from 100 to 150 characters. That's
    // roughly what will show on our laptop screen in a Sublime Text window.
    'max-len': [
      'error',
      150,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false
      }
    ],

    // We use underscores in many places. We use them to turn off the unused var linter
    // errors. We use them for our _links and _embedded hypermedia objects. We
    // use them for internal url parameters. This is purely a stylistic rule, so
    // disable it.
    'no-underscore-dangle': ['off'],

    'global-require': ['off'],

    'class-methods-use-this': ['off'],
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
};
