const { decode } = require('jsonwebtoken');
const HttpException = require('../exceptions/http.exception');

const authMiddleware = async (req, res, nex) => {

  const authHeader = req.headers.authorization;
  // 1 authorization header
  if (!authHeader) {
    return next(new HttpException(401, 'authorization 必须提供', 'authorization missing'));
  } 

  // 02 验证token类型
  const authHeaderArr = authHeader.split(' ');
  if (authHeaderArr[0] !== 'Token') {
    return next(new HttpException(401, 'authorization 格式错误,格式Token content', 'Token missing'));
  }

  // 3 验证token 内容
  if (!authHeaderArr[1]) {
    return next(new HttpException(401, 'authorization 格式错误,格式Token content', 'Token content missing'));
  }

  try {
    const user = await decode(authHeaderArr[1]);
    if (!user) {
      return next(new HttpException(401, 'token 内容不存在', 'token decode error'));
    }
    req.user = user;
    req.token = authHeaderArr[1]
  } catch (error) {
    return next(new HttpException(401, 'Authorization token验证失败', e.message));
  }

}