# nodejs-dotenv

A demo repo for a blog post to show how to use environment variable node.js

## To test out the environment variables

1. Clone the repo
2. Run `npm install`
3. Execute `cp .env.example .env`
4. Run `node index.js` or `node --require dotenv/config index-no-import.js`

It will print out, something like:

```
Database name is quotes and database username is quotes_user
```

## For Node version 20+

Follow steps 1-3 from above and then run `node --env-file .env index-no-imports.js` to get the same output.
