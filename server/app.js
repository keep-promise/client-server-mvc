
require('dotenv').config({path: '.env'});
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const initDB = require('./init/initDB');
const initRoute = require('./init/initRoute');
const initServer = require('./init/initServer');
const noMatchMiddleware = require('./middleware/404.middleware');
const errorMatchMiddleware = require('./middleware/error.middleware');

const app = express();

const main = async () => {
  // await initDB();
  await initRoute(app);
  await initServer(app);
}

main();

app.use(cors({credentials: false, origin: true})); // 跨域
app.use(express.json()); // 解析
app.use(morgan('tiny')); // 请求日志

// 404
app.use(noMatchMiddleware);

// 统一错误处理
app.use(errorMatchMiddleware);

