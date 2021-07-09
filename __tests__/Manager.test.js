const Manager = require('../lib/Manager.js');

test('testing to get the id of manager', ()=> {
    const manager = new Manager('Dale', 95, 'dale@gmail.com', 123);
    expect(manager.getId()).toBe(95)
})

test('testing to make sure we get correct email', ()=> {
    const manager = new Manager('Dale', 95, 'dale@gmail.com', 123);
    expect(manager.getEmail()).toBe('dale@gmail.com')
})

test('testing to make sure we get correct office number.', ()=> {
    const manager = new Manager('Dale', 95, 'dale@gmail.com', 123);
    expect(manager.getOfficeNumber()).toBe(123)
})




