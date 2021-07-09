const Engineer = require('../lib/Engineer.js');

test('testing to get the id of engineer', ()=> {
    const engineer = new Engineer('Dale', 95, 'dale@gmail.com');
    expect(engineer.getId()).toBe(95)
})

test('testing to make sure we get correct email', ()=> {
    const engineer = new Engineer('Dale', 95, 'dale@gmail.com');
    expect(engineer.getEmail()).toBe('dale@gmail.com')
})

test('testing to make sure we get correct role', ()=> {
    const engineer = new Engineer('Dale', 95, 'dale@gmail.com');
    expect(engineer.getRole()).toBe('Engineer')
})

test('testing to make sure we get correct github', ()=> {
    const engineer = new Engineer('Dale', 95, 'dale@gmail.com', 'dalesgithub');
    expect(engineer.getGithub()).toBe('dalesgithub')
})




