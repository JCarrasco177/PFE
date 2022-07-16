const { json } = require('express/lib/response');
const connection = require('../config/db')
const utils = require('../resources/utils')


const getCars = (request,response) =>{
    connection.query(
        'SELECT id,patente,marca, modelo FROM vehiculos ',
        function(err, results, fields) {
          response.json(results); 
        }
      );
}
const searchUser = (request,response) =>{
    connection.query(
        `SELECT id,nombres,apellidos FROM vehiculos where 
        nombres like "%${request.body.search}%" 
        or apellidos like "%${request.body.search}%"`,
        function(err, results, fields) {
          response.json(results); 
        }
      );
}
const getCarById = (request,response) =>{
  connection.query(
      'SELECT id,patente,marca,modelo FROM vehiculos where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getMarcaById = (request,response) =>{
  connection.query(
      'SELECT marca FROM vehiculos where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserLastNameById = (request,response) =>{
  connection.query(
      'SELECT  apellidos FROM vehiculos where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getCarModeloById  = (request,response) =>{
  connection.query(
      'SELECT modelo FROM vehiculos where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getCarPatenteById = (request,response) =>{
  connection.query(
      'SELECT  patente FROM vehiculos where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}

const createCar = (request,response) =>{
  connection.query(
      'insert into vehiculos(id,patente,marca,modelo) values (?,?,?,?) ',
      [
        request.body.id  ,
        request.body.patente  ,
        request.body.marca,
        request.body.modelo,
      ],
      function(err, results, fields) {
        if (err){
          response.json({message:err})
        }else{
          response.json({message:"Exito!"})
        }
      }
    );
}

const deleteCar = (request,response) =>{
  connection.query(
    'DELETE FROM vehiculos where id = '+request.body.id,
    function(err, results, fields) {
      response.json(results); 
     
    }
  );
}

const updateCar = (request,response) =>{
  connection.query(
    'insert FROM vehiculos(id,patente,marca,modelo) values (?,?,?,?) ' ,
    [
      request.body.id,
      request.body.patente,
      request.body.marca,
      request.body.modelo
    ],
  );
}



module.exports = {
    getCars,
    getCarById,
    createCar,
    getMarcaById,
    getCarModeloById,
    getCarPatenteById,
    deleteCar,
    updateCar,
}
