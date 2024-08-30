import Sequelize from 'sequelize'

import mongoose from 'mongoose'

import User from '../app/models/User.js';
import Product from '../app/models/Product.js';
import Category from '../app/models/Category.js';
import dotenv from 'dotenv'

const models = [User, Product, Category];
dotenv.config()

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize('postgresql://luan_kyu1_user:pSycvwIWQYQXBInpwwezAqvmB7JyHOtU@dpg-cr29nftsvqrc73cld4r0-a/luan_kyu1', {

    });


    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));

    console.log('Conexão com o banco de dados PostgreSQL estabelecida com sucesso');
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
  }
}

export default new Database();
