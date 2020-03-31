module.exports = (app) => {
    //INVOICES
    app.get('/api/v1/invoices/:invoice?', (req, res) => res.send('nothing'))

    //EMPLOYEES
    app.get('/api/v1/employees/:employee?/:timesheet?/:details?', (req, res) => res.send('nothing'))
    app.post('/api/v1/employees/:employee/:timesheet/:mode', (req, res) => res.send('nothing'))
}