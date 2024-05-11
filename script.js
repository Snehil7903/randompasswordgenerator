function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NumberChars = "0123456789";
    const SymbolChars = "@!#$%^&*()_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? NumberChars : "";
    allowedChars += includeSymbols ? SymbolChars : "";

    // to check if allowedChars is working fine or not?
    // console.log(allowedChars);

    if (length <= 0) {
        return `(Password length must be at least 1)`;
    }

    if (allowedChars.length === 0) {
        return `(At least 1 set of charaters needs to be selected)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;

}


document.getElementById("submit").onclick = function () {
    let passwordLength = document.getElementById("digits").value;
    passwordLength = Number(passwordLength);


    let includeLowercase = true;
    let includeUppercase = true;
    let includeNumbers = true;
    let includeSymbols = true;
    document.getElementById("includeLowercase").checked ? includeLowercase = true : includeLowercase = false;
    document.getElementById("includeUpperercase").checked ? includeUppercase = true : includeUppercase = false;
    document.getElementById("includeNumbers").checked ? includeNumbers = true : includeNumbers = false;
    document.getElementById("includeSymbols").checked ? includeSymbols = true : includeSymbols = false;







    let password = generatePassword(passwordLength,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols);

    const output = document.getElementById("output");
    output.textContent = password;
}

// to see the code in console:-

// const passwordLength=1000;
// const includeLowercase=true;
// const includeUppercase=true;
// const includeNumbers=true;
// const includeSymbols=true;

// let password = generatePassword(passwordLength,
//                                   includeLowercase, 
//                                   includeUppercase,
//                                   includeNumbers,
//                                   includeSymbols);

// // console.log(`Generated Password:${password}`);    



