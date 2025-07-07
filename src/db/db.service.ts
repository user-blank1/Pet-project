import Database from "better-sqlite3"; //use database to open connections and execute queries
import * as path from "path";

const DB_PATH =
  process.env.DB_PATH || path.resolve(__dirname, "../../data.sqlite"); //generates absolute path string
//if env variable DB_PATH is set it will use that path.
let db: Database.Database; //creates variable db of type Database.Database. Database.database is type representing connection instance

try {
  db = new Database(DB_PATH); //attempts to open a connection to the SQLite database at the specified path. creates if not exists
  //the db is a variable that holds the connection instance to the SQLite database. like a filehandle
  console.log(`Connected to SQLite DB at ${DB_PATH}`);

  db.exec(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      amount REAL NOT NULL,
      currency TEXT NOT NULL,
      category TEXT NOT NULL,
      date DATETIME NOT NULL
    );
  `); //sets up the columns and types for the expenses table if it does not exist
} catch (error) {
  console.error("Failed to initialize database:", error);
  process.exit(1);
}

export default db; //table ready and exported
//order of usage:
//1.Repository
//2 Service
//3 Controller
