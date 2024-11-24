import 'dotenv/config'

const dbName = process.env.DATABASE_NAME;
const dbUser = process.env.DATABASE_USER;
console.log(`Database name is ${dbName} and database username is ${dbUser}`);
