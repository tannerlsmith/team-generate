const Intern = require('../lib/Intern.js');

test('testing to get the id of intern', ()=> {
    const intern = new Intern('Dilbert', 81, 'dilbert@theoffice.com', 'University of Vermont');
    expect(intern.getId()).toBe(81)
})

test('testing to make sure we get correct school name', ()=> {
    const intern = new Intern('Dilbert', 81, 'dilbert@theoffice.com', 'University of Vermont');
    expect(intern.getSchool()).toBe('University of Vermont')
})

test('testing to make sure we get correct role', ()=> {
    const intern = new Intern('Dilbert', 81, 'dilbert@theoffice.com', 'University of Vermont');
    expect(intern.getRole()).toBe('Intern')
})



