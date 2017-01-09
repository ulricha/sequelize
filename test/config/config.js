'use strict';

const fs = require('fs');
let mssqlConfig;
try {
  mssqlConfig = JSON.parse(fs.readFileSync(__dirname + '/mssql.json', 'utf8'));
} catch (e) {
  // ignore
}

module.exports = {
  username: process.env.SEQ_USER || 'root',
  password: process.env.SEQ_PW   || null,
  database: process.env.SEQ_DB   || 'sequelize_test',
  host:     process.env.SEQ_HOST || '127.0.0.1',
  pool:     {
    max: process.env.SEQ_POOL_MAX  || 5,
    idle: process.env.SEQ_POOL_IDLE || 30000
  },

  rand: function() {
    return parseInt(Math.random() * 999, 10);
  },

  // mssql: mssqlConfig || {
  //   database: process.env.SEQ_MSSQL_DB   || process.env.SEQ_DB   || (function () {
  //     var db = 'sequelize-test-' + ~~(Math.random() * 100);
  //     console.log('Using database: ', db);
  //     return db;
  //   }()),
  //   username: process.env.SEQ_MSSQL_USER || process.env.SEQ_USER || 'sequelize',
  //   password: process.env.SEQ_MSSQL_PW   || process.env.SEQ_PW   || 'nEGkLma26gXVHFUAHJxcmsrK',
  //   host:     process.env.SEQ_MSSQL_HOST || process.env.SEQ_HOST || 'mssql.sequelizejs.com',
  //   port:     process.env.SEQ_MSSQL_PORT || process.env.SEQ_PORT || 1433,
  //   pool:     {
  //     max: process.env.SEQ_MSSQL_POOL_MAX  || process.env.SEQ_POOL_MAX  || 5,
  //     idle: process.env.SEQ_MSSQL_POOL_IDLE || process.env.SEQ_POOL_IDLE || 3000
  //   }
  // },

    mssql: mssqlConfig || {
    database: process.env.SEQ_MSSQL_DB   || process.env.SEQ_DB   || 'CELDATA7',
    username: process.env.SEQ_MSSQL_USER || process.env.SEQ_USER || 'sa',
    password: process.env.SEQ_MSSQL_PW   || process.env.SEQ_PW   || 'aqw123zsx',
    host:     process.env.SEQ_MSSQL_HOST || process.env.SEQ_HOST || 'vm2008sql2012st',
    port:     process.env.SEQ_MSSQL_PORT || process.env.SEQ_PORT || 1433,
    pool:     {
      max: process.env.SEQ_MSSQL_POOL_MAX  || process.env.SEQ_POOL_MAX  || 5,
      idle: process.env.SEQ_MSSQL_POOL_IDLE || process.env.SEQ_POOL_IDLE || 3000
    }
  },

  //make idle time small so that tests exit promptly
  mysql: {
    database: process.env.SEQ_MYSQL_DB   || process.env.SEQ_DB   || 'sequelize_test',
    username: process.env.SEQ_MYSQL_USER || process.env.SEQ_USER || 'root',
    password: process.env.SEQ_MYSQL_PW   || process.env.SEQ_PW   || null,
    host:     process.env.MYSQL_PORT_3306_TCP_ADDR || process.env.SEQ_MYSQL_HOST || process.env.SEQ_HOST || '127.0.0.1',
    port:     process.env.MYSQL_PORT_3306_TCP_PORT || process.env.SEQ_MYSQL_PORT || process.env.SEQ_PORT || 3306,
    pool:     {
      max: process.env.SEQ_MYSQL_POOL_MAX  || process.env.SEQ_POOL_MAX  || 5,
      idle: process.env.SEQ_MYSQL_POOL_IDLE || process.env.SEQ_POOL_IDLE || 3000
    }
  },

  sqlite: {
  },

  oracle: {
    // username : process.env.NODE_ORACLEDB_USER || 'system',
    // password : process.env.NODE_ORACLEDB_PASSWORD || 'oracle',
    // // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#connectionstrings
    // database : process.env.NODE_ORACLEDB_CONNECTIONSTRING || 'xe.oracle.docker',
    // host : process.env.NODE_ORACLEDB_HOST || 'vmugit.kimdomain.local',
    username : process.env.NODE_ORACLEDB_USER || 'sequelize',
    password : process.env.NODE_ORACLEDB_PASSWORD || 'sequelize',
    // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#connectionstrings
    database : process.env.NODE_ORACLEDB_CONNECTIONSTRING || 'xe.oracle.docker',
    host : process.env.NODE_ORACLEDB_HOST || 'vmugit.kimdomain.local',
    port : process.env.NODE_ORACLEDB_PORT || 1521,
    // https://github.com/oracle/node-oracledb/blob/master/doc/api.md#extauth
    externalAuth : process.env.NODE_ORACLEDB_EXTERNALAUTH ? process.env.NODE_ORACLEDB_EXTERNALAUTH : false
  },

  postgres: {
    database: process.env.SEQ_PG_DB   || process.env.SEQ_DB    || 'sequelize_test',
    username: process.env.SEQ_PG_USER || process.env.SEQ_USER  || 'postgres',
    password: process.env.SEQ_PG_PW   || process.env.SEQ_PW    || 'postgres',
    host:     process.env.POSTGRES_PORT_5432_TCP_ADDR || process.env.SEQ_PG_HOST || process.env.SEQ_HOST  || '127.0.0.1',
    port:     process.env.POSTGRES_PORT_5432_TCP_PORT || process.env.SEQ_PG_PORT || process.env.SEQ_PORT  || 5432,
    pool:     {
      max: process.env.SEQ_PG_POOL_MAX  || process.env.SEQ_POOL_MAX  || 5,
      idle: process.env.SEQ_PG_POOL_IDLE || process.env.SEQ_POOL_IDLE || 3000
    }
  }
};
