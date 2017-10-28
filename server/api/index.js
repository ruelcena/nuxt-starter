module.exports = {
  Users: function (router) {

  // Mock Users
  const users = [
    { name: 'Alexandre' },
    { name: 'Pooya' },
    {name: 'Sébastien'}
  ]

  /* GET users listing. */
  router.get('/api/users', function (req, res, next) {
    res.json(users)
  })

  /* GET user by ID. */
  router.get('/api/users/:id', function (req, res, next) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < users.length) {
      res.json(users[id])
    } else {
      res.sendStatus(404)
    }
  })

  return router
  }

}

