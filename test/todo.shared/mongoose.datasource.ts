import {Mongoose, Schema, Model, Document} from 'mongoose';
import {IDataSource, DataSource} from '../../src/index';
import {Constructor, IModel} from '../../src/interfaces';
/**
 * @class MongooseDatasource
 * @author Jonathan Casarrubias
 * @license MIT
 * @description This is an example datasource that integrates
 * OnixJS with Mongoose.
 */
@DataSource()
export class MongooseDatasource implements IDataSource {
  /**
   * @property mongoose
   * @description Mongoose instance reference
   */
  private mongoose: Mongoose = new Mongoose();
  /**
   * @method connect
   * @description This method should connect the mongoose ORM
   * as described in their documentation
   */
  connect() {
    this.mongoose
      .connect(
        'mongodb://lb-sdk-test:lb-sdk-test@ds153400.mlab.com:53400/heroku_pmkjxjwz',
      )
      .then(() => {
        console.log('MongoDB Connected');
      }, console.error);
  }
  /**
   * @method disconnect
   * @description This method should disconnect the mongoose ORM
   * as described in their documentation
   */
  disconnect() {
    this.mongoose.disconnect().then(() => {
      console.log('MongoDB Connected');
    }, console.error);
  }
  /**
   * @method method
   * @description This method is a system hook that allows you to
   * instantiate your models or schemas according the selected ORM
   * approach. In this case mongoose states that we should pass
   * a JSON schema and a model name in order to get a mongoose
   * model instance.
   */
  register(
    Class: Constructor,
    instance: IModel,
    schema: Schema,
  ): Model<Document> {
    return this.mongoose.model(Class.name, schema);
  }
}
