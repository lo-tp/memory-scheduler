module.exports = {
  extends: [
    'prettier'
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
        "modules": true
    }
  },
  'plugins': [
    'prettier'
  ],
  'rules': {
    'prettier/prettier': 'error'
  }
}
