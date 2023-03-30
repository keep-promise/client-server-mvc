const createUser = async (req, res) => {
  res.json({
    status: 200,
    message: "success",
    data: {
      code: 1,
      message: '增加数据成功',
      data: {}
    }
  })
}

module.exports = {
  createUser
}