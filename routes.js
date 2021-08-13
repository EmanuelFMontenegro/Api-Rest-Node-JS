const express = require('express')
const routes = express.Router()

routes.get('/',(req,res)=>{
        req.getConnection((err,conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM SENSORES',(err,rows)=>{
        if(err) return res.send(err) 

        res.json(rows)

      })
      })
      })
       routes.post('/',(req,res)=>{
       req.getConnection((err,conn)=>{
       if(err) return res.send(err)
       console.log(req.body)
       conn.query('INSERT INTO SENSORES SET ?',[req.body],(err,rows)=>{
       if(err) return res.send(err) 

       res.send('Sensor agregado')

  })
  })
  })
      routes.delete('/:id',(req,res)=>{
      req.getConnection((err,conn)=>{
      if(err) return res.send(err)

      conn.query('DELETE FROM SENSORES WHERE id = ?',[req.params.id],(err,rows)=>{
      if(err) return res.send(err) 

      res.send('Sensor Eliminado')

  })
  })
  })
    routes.put('/:id', (req,res)=>{
    req.getConnection((err,conn)=>{
    if(err) return res.send(err)

    conn.query('UPDATE SENSORES SET ? WHERE id = ?',[req.body,req.params.id],(err,rows)=>{
    if(err) return res.send(err) 

    res.send('Sensor Actualizado')

})
})
})
module.exports = routes
