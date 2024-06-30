import { DatabaseConnection } from "./DatabaseConnection";
import pg from "pg-promise";

export class PgPromiseAdapter implements DatabaseConnection {
  private connection: pg.IDatabase<{}>;

  constructor() {
    this.connection = pg()("");
  }

  async query(statement: string, params: any) {
    return this.connection.query(statement, params);
  }

  async close() {
    return this.connection.$pool.end();
  }
}
