const mongoose = require('mongoose')

const mongooseConnect = async ()=>{
  await mongoose.connect('mongodb+srv://atharva05:atharva1418@cluster0.injqdf5.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB :', error);
});
}

module.exports = mongooseConnect