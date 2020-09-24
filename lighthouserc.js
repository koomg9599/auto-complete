module.exports = {
  ci: {
    collect: {
      // ...
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 1 }],
        'categories:accessibility': ['error', { minScore: 1 }],
      },
    },
    upload: {
      // ...
    },
  },
}
