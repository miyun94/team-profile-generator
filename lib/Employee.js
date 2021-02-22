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
        `<div class = "card">
        <div class = "card-header">
            <div>${this.role}</div>
            <div>${this.name}</div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>`
            if (this.role === 'Manager') {
                this.card += `<li class="list-group-item">Office number: ${this.officenumber}</li>`
            } else if (this.role === 'Engineer') {
                this.card += `<li class="list-group-item">Gihub: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>`
            } else if (this.role === 'Intern') {
                this.card += `<li class="list-group-item">School: ${this.school}</li>`
            }
        this.card +=`</ul></div>`
    }
}



module.exports = Employee

// ` <div class = "column">
// <div class = "card">      
// <div class = "container">
//     <div>${this.role}</div>
//     <div>${this.name}</div>
//     <div>${this.id}</div>
//     <div>${this.email}</div>`
//     if (this.role === 'Manager') {
//         this.card += `<div>${this.officenumber}</div>`
//     } else if (this.role === 'Engineer') {
//         this.card += `<div>${this.github}</div>`
//     } else if (this.role === 'Intern') {
//         this.card += `<div>${this.school}</div>`
//     }
// this.card +=`</div></div></div>`