const Manager = require("../lib/Manager"); 

test("creates manager object", () => {
//test to see if employee name is a string
    expect(Manager.name).toEqual(expect.any(String)); 
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

//test for office phone number 
const office = {
    phone:'123-456-7890'
}; 

test("get phone number", () =>{
    expect(office.phone).toBe('123-456-7890')
}); 