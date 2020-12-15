import {sequelize} from './sequelize';

import {FeedItem} from './controllers/v0/feed/models/FeedItem';

import {captions} from './config/captions';

import {V0_FEED_MODELS} from './controllers/v0/model.index';

function myLoop(executable: Function) {         //  create a loop function
  setTimeout(function() {   
    console.log('hello');   //  your code here
    executable();
    myLoop(executable);             //  ..  again which will trigger another 
                           //  ..  setTimeout()
  }, 60000)
}

  (async () => {
  await sequelize.addModels(V0_FEED_MODELS);
    myLoop(async () => {
      let item = await FeedItem.findOne({order: sequelize.random()} );
      item.caption = captions[Math.floor(Math.random() * captions.length)];
      item.save();
    });
  })();

  // -------------------------------------------------------------
  