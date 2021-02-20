class Employee {
    constructor(name, id, email){
        this.name = name; 
        this.id = id; 
        this.email = email; 
        this.role = this.getRole()
        this.card
        // this.getCard()
    }   

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return this.role
    }

    getCard(){
        this.card = 
        `<div>
            <div>${this.role}</div>
            <div>${this.name}</div>
            <div>${this.id}</div>
            <div>${this.email}</div>`
            if (this.role === 'Manager') {
                this.card += `<div>${this.officenumber}</div>`
            } else if (this.role === 'Engineer') {
                this.card += `<div>${this.github}</div>`
            } else if (this.role === 'Intern') {
                this.card += `<div>${this.school}</div>`
            }
        this.card +=`</div>`
    }
}



module.exports = Employee