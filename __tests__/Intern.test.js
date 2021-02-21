const Intern = require('../lib/Intern'); 

test("creates intern object", () => {
//test to see if employee name is a string
        expect(Intern.name).toEqual(expect.any(String)); 
    }); 
    
//test to get id value from a string 
    const idnumber = {
        name: 'employeeA',
        id: 'A12345'
    }; 
    
    test("get employee id", () => {
        expect(idnumber.id).toBe('A12345');
    })
    
//test for email to return a string value
    const email = {
        name: 'employeeA',
        email: 'employeeA@company.com'
    }; 
    
    test("get employee email", () => {
        expect(email.email).toBe('employeeA@company.com');
    })

//test to get school information 
const school = {name:'UCLA'}

test("get school name", () => {
    expect(school.name).toBe('UCLA'); 
})