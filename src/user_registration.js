class UserRegistration{
    constructor(fname, lname, email, mobile, password){

        let email_rgx = /^([a-zA-Z0-9_])+(@)(\w)+(.)([a-zA-Z]){2,3}(.)?(\w){2,3}?$/ 
        let mobile_rgx = /^[\d]{2}[ ][6789][\d]{9}$/
        let name_rgx = /^([A-Z])([\w]){1}([\w])+$/
        let password_rgx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]{1}).{8,}$/ //help taken from https://ihateregex.io/expr/password

        this.validateRegexWithProm(fname, name_rgx).then(
            () => this.validateRegexWithProm(lname, name_rgx).then(
                () => this.validateRegexWithProm(mobile, mobile_rgx).then(
                    () => this.validateRegexWithProm(email, email_rgx).then(
                        () => this.validateRegexWithProm(password, password_rgx).then(
                            (result) => console.log(result)
                        ).catch((err) => console.log(err))
                    ).catch((err) => console.log(err))
                ).catch((err) => console.log(err)))
            .catch((err) => console.log(err)))
        .catch((err) => console.log(err))
        
        // this.validateRegex(fname, lname, email, mobile, password)
        
        this.fname = fname
        this.lname = lname
        this.email = email
        this.mobile = mobile
        this.password = password
    }

    validateRegex(...params){
        // name@website.domain.in
        // name@website.domain
        let email_rgx = /^([a-zA-Z0-9_])+(@)(\w)+(.)([a-zA-Z]){2,3}(.)?(\w){2,3}?$/ 
        let mobile_rgx = /^[\d]{2}[ ][6789][\d]{9}$/
        let name_rgx = /^([A-Z])([\w]){1}([\w])+$/
        let password_rgx = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]{1}).{8,}$/ //help taken from https://ihateregex.io/expr/password/

        if(!mobile_rgx.test(params[3])){
            throw("Invalid Mobile Number! Enter a valid mobile number")
        }

        if(!email_rgx.test(params[2])){
            throw("Invalid Email ID! Enter a valid email id")
        }

        if(!name_rgx.test(params[0])){
            throw("Invalid First Name!")
        }

        if(!name_rgx.test(params[1])){
            throw("Invalid First Name!")
        }

        if(!password_rgx.test(params[4])){
            throw("Invalid Password!")
        }
    }

    validateRegexWithProm(test_str, regex_str){
        return new Promise((resolve, reject) => {
            if(regex_str.test(test_str)){
                resolve(true)
            } else {
                reject(`Input ${test_str} is wrong`)
            }
        })
    }
}

try{
    newEmployee = new UserRegistration("Am", "Test", "am23@gmail.co.in", "91 9191919191", "oas123")
} catch(error){
    console.log(error)
}

try{
    newEmployee = new UserRegistration("Am2", "T", "am23@gmail.c", "91 9191919191", "oas123")
} catch(error){
    console.log(error)
}

try{
    newEmployee = new UserRegistration("Am2", "Test", "am23@gmail.com", "91 9191919191", "oas123")
} catch(error){
    console.log(error)
}

try{
    newEmployee = new UserRegistration("Am2", "Test", "am23@gmail.com", "91 9191919191", "oas123$Z")
} catch(error){
    console.log(error)
}