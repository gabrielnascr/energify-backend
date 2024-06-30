import pg from "pg-promise";
import { IDatabaseConnection } from "./IDatabaseConnection";

export class PgPromiseAdapter implements IDatabaseConnection {
  private connection: pg.IDatabase<{}>;

  constructor() {
    this.connection = pg()("");
  }

  async close(): Promise<void> {
    await this.connection.$pool.end();
  }

  async query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }
}
