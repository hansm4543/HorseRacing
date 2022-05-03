const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise;

const MONGODB_URI = 'mongodb+srv://root:root@horseracemongodb.wwmx3.mongodb.net/horseracemongodb?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI);
  
mongoose.connection
    .once('open', () => console.log('Connected!'))
    .on('error', (error) => {
        console.warn('Error : ', error);
    });
      
    beforeEach((done) => {
        mongoose.connection.collections.users.drop(() => { 
            
                    done(); 
           
       });

});