const express = require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const server = express(); 

main().catch(err=>console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/LaptopsDatabase');
    console.log('db connected')
}


const productSchema = new mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: mongoose.Types.ObjectId
    },
    name: {
      type: String,
      required: true
    },
    cpu: {
      type: String,
      required: true
    },
    ram: {
      type: String,
      required: true
    },
    screen: {
      type: String,
      required: true
    },
    graphics: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  });
  
  const Product = mongoose.model('Product', productSchema);

server.use(cors());

// server.get('/demo',async (req,res)=>{
//     const docs = await Product.find({});
//     console.log('all laptops ',docs)
//     res.json(docs)
// })

server.get('/demo', async (req, res) => {
    try {
      const docs = await Product.find({});
      console.log('all laptops ', docs);
      res.json(docs);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

server.listen(8080,()=>{
    console.log('server started');
})