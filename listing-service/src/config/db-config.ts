import knex from "knex";
import connection from "../../knexfile";
export = knex(connection[process.env.NODE_ENV as string]);
