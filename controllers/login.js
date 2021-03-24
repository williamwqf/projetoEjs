const login = (req, res) => {
    res.render('login');
}

const postForm = (req, res) => {
    const form = JSON.stringify(req.body)
    res.send(form);
  }

module.exports = {
    login, postForm
};