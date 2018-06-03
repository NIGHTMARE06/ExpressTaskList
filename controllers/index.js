const title = 'N1ghtStore'
const tasks = [
  {id: 1, name: 'Earn money'},
  {id: 2, name: 'Go to the sumermarket'},
  {id: 3, name: 'Buy an apple'},
  {id: 4, name: 'Go home'}
]

const index = (req, res) => {
  res.render('index', {
    title,
    page: 'Home',
    tasks
  })
}

const list = (req, res) => {
  res.render('taskList', {
    title,
    page: 'Task list',
    tasks
  })
}

const newTask = (req,res) => {
  const {newTask} = req.body
  tasks.push({
    id: tasks.length + 1,
    name: newTask
  })

  res.status(200).redirect('/list')
}

module.exports = {
  index,
  list,
  newTask
}
