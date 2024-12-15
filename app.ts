import express, { Express } from 'express';

class App {
  public app: Express;

  /**
   * Initializes Express instance and configures application with all necessary
   * middlewares, routes, views and database connection.
   * @constructor
   */
  constructor() {
    this.app = express();
    this.config();
    this.databaseConnections();
    this.middlewares();
    this.routes();
    this.views();
  }

  /**
   * Configure Express application.
   * @private
   * @function
   */
  private config() {
  }

  /**
   * Establishes a connection to the database.
   * Ensures the application has access to the necessary data storage.
   * Handles any connection errors and logs them appropriately.
   * @private
   */
  private databaseConnections() {
  }

  /**
   * Registers all middlewares for Express application.
   * The middlewares are necessary for the application to function correctly.
   * Handles tasks such as authentication, logging, error handling, CORS, etc.
   * @private
   */
  private middlewares(){
  }
  
/**
 * Sets up all application routes.
 * Defines the endpoints and their corresponding request handlers.
 * Ensures that each route is properly linked to the associated controller logic.
 * @private
 */
  private routes() {
  }

  /**
   * Configures the view engine for the Express application.
   * Sets up the rendering engine and view directory.
   * Enables the application to render dynamic pages based on templates.
   * @private
   */
  private views(){
  }
}

export default new App().app;