const express = require('express');
// const fs = require('fs')
const fsPromises = require('fs/promises')
// const productController = require('./controllers/productsController.js')
// const userController = require('./controllers/userController.js')
const productRouter = require('./routes/productRoute.js')
const userRouter = require('./routes/userRoute.js')
const app = express();

app.use(express.json())

app.use((req,res,next)=>{
  const time = new Date().toLocaleString()
  fsPromises.appendFile("./data.txt",req.url+'\t'+time+'\n')
  next()
})

app.use('/api/products',productRouter)
app.use('/api/users',userRouter)

// const productRouter = express.Router()
// const userRouter = express.Router()

// app.use('/api/products',productRouter)
// app.use('/api/users',userRouter)

// productRouter.route('/')
// .get(productController.getAllProducts)
// .post(productController.addProduct)

// productRouter.route('/:id')
// .put(productController.replaceProduct)
// .delete(productController.deleteProduct)

// userRouter
// .get(userController.getUser)
// .put(userController.replaceUser)
// .post(userController.addUser)
// .delete(userController.deleteUser)

// app.route('/api/products')
// .get(productController.getAllProducts)
// .post(productController.addProduct)

// app.route('/api/products/:id')
// .get(productController.replaceProduct)
// .post(productController.deleteProduct)

// app.route('api/users')
// .get(userController.getUser)
// .put(userController.replaceUser)
// .post(userController.addUser)
// .delete(userController.deleteUser)

// app.get('/api/products',productController.getAllProducts)

// app.post('/api/products',productController.addProduct)

// app.put('/api/products/:id',productController.replaceProduct)

// app.delete('/api/products/:id',productController.deleteProduct)

// app.get('/api/users',userController.getUser)

// app.post('/api/users',userController.addUser )
 
// app.put('/api/users',userController.replaceUser)

// app.delete('/api/users',userController.deleteUser )



app.listen(1400)

