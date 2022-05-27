function telephoneCheck(str) {
    const phoneNumberPattern = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g
    
    return phoneNumberPattern.test(str);
}
  
telephoneCheck("555-555-5555");