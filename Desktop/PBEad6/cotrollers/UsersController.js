const { json } = require('express/lib/response');
const connection = require('../config/db')
const utils = require('../resources/utils')


const getUsers = (request,response) =>{
    connection.query(
        'SELECT id,name,lastname,email,web_page FROM users ',
        function(err, results, fields) {
          response.json(results); 
        }
      );
}
const searchUser = (request,response) =>{
    connection.query(
        `SELECT id,name,lastname FROM users where 
        name like "%${request.body.search}%" 
        or lastname like "%${request.body.search}%"`,
        function(err, results, fields) {
          response.json(results); 
        }
      );
}
const getUserById = (request,response) =>{
  connection.query(
      'SELECT id, name, lastname, email, web_page FROM users where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserNameById = (request,response) =>{
  connection.query(
      'SELECT  name FROM users where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserLastNameById = (request,response) =>{
  connection.query(
      'SELECT  lastname FROM users where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserEmailById = (request,response) =>{
  connection.query(
      'SELECT email FROM users where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserWebPageById = (request,response) =>{
  connection.query(
      'SELECT  web_page FROM users where id = '+request.body.id,
      function(err, results, fields) {
        response.json(results); 
      }
    );
}
const getUserDataById = (request,response) =>{
  const opc = ['id', 'name', 'lastname', 'email', 'web_page']
  connection.query(
      `SELECT  ${opc[request.body.field]} FROM users where id = ${request.body.id} `,
      function(err, results, fields) {
        response.json(results[0]); 
      }
    );
}
const createUser = (request,response) =>{
  connection.query(
      'insert into users(name,lastname,password,email,web_page) values (?,?,?,?,?) ',
      [
        request.body.name  ,
        request.body.lastname,
        utils.btoa(request.body.password),
        request.body.email,
        request.body.web_page,
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
module.exports = {
    getUsers,
    searchUser,
    getUserById,
    createUser,
    getUserNameById,
    getUserLastNameById,
    getUserEmailById,
    getUserWebPageById,
    getUserDataById,
}
//obtener por id:
//solo el nombre
//solo el apellido
//solo el email
//solo el web_page