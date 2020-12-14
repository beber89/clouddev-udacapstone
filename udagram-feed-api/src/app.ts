import cors from 'cors';
import express from 'express';
import {sequelize} from './sequelize';

import {IndexRouter} from './controllers/v0/index.router';

import bodyParser from 'body-parser';
import {V0_FEED_MODELS} from './controllers/v0/model.index';


  (async () => {
  await sequelize.addModels(V0_FEED_MODELS);
  await sequelize.sync();
  })();
  const app = express();

  app.use(bodyParser.json());

  app.options('*', cors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: process.env.URL,
  }));

  app.use(cors({
    allowedHeaders: [
      'Origin', 'X-Requested-With',
      'Content-Type', 'Accept',
      'X-Access-Token', 'Authorization',
    ],
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: process.env.URL,
  }));
  
  // Added this to help encounter cors issue while testing locally
  app.options("*", function(req, res, next) {     
    res.header("Access-Control-Allow-Origin", process.env.URL);     
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' );    
    next();  
  });
  app.use(function(req, res, next) {     
    res.header("Access-Control-Allow-Origin", process.env.URL);     
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization' );    
    next();  
  });
  // -------------------------------------------------------------

  app.use('/api/v0/', IndexRouter);

  // Root URI call
  app.get( '/', async ( req, res ) => {
    res.send( '/api/v0/' );
  } );
  
export default app;