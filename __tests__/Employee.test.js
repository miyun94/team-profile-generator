const Employee = require("../lib/Employee"); 

test("creates employee object", () => {
//test to see if employee name is a string
    expect(Employee.name).toEqual(expect.any(String)); 
}); 

//test to get id value from a string 
const idnumber = {id: 'A12345'}; 

test("get employee id", () => {
    expect(idnumber.id).toBe('A12345');
})

//test for email to return a string value
const email = {email: 'employeeA@company.com'}; 

test("get employee email", () => {
    expect(email.email).toBe('employeeA@company.com');
})

//test to get role  
test("should return role title", () =>{
    expect(Employee.role).toBe(); 
})