const express = require('express')
const app = express()

if(process.env.NODE_ENV === "production"){
    app.disable('x-powered-by')
    const path = require('path')
  
    app.use(express.static(path.join(__dirname, 'client', 'build')));
  
    app.get('*', (req,res) => {
  
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  
    })
  }
  
  const port = process.env.PORT || 5000
  app.listen(port, () => {
      console.log('server is running')
  })