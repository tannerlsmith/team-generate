const Employee = require('../lib/Employee.js');

test('testing to make sure we get correct name for employee', ()=> {
    const employee = new Employee('Dale', 95, 'dale@gmail.com');
    expect(employee.getName()).toBe('Dale')
})

test('testing to get the id of employee', ()=> {
    const employee = new Employee('Dale', 95, 'dale@gmail.com');
    expect(employee.getId()).toBe(95)
})

test('testing to make sure we get correct email', ()=> {
    const employee = new Employee('Dale', 95, 'dale@gmail.com');
    expect(employee.getEmail()).toBe('dale@gmail.com')
})

test('testing to make sure we get correct role', ()=> {
    const employee = new Employee('Dale', 95, 'dale@gmail.com');
    expect(employee.getRole()).toBe('Employee')
})
