function footer(e) {
    const Products = document.getElementById('Products');
    const Productsp = document.getElementById('Productsp');
    const Contact = document.getElementById('Contact');
    const Contactp = document.getElementById('Contactp');
    const Help = document.getElementById('Help');
    const Helpp = document.getElementById('Helpp');
    const About = document.getElementById('About');
    const Aboutp = document.getElementById('Aboutp');
    if (e == 0) {
        if (Productsp.innerText == '-') {
            Products.style.display = 'none';
            Productsp.innerText = '+';
        }
        else {
            Products.style.display = 'block';
            Productsp.innerText = '-';
            Contact.style.display = 'none';
            Contactp.innerText = '+';
            Help.style.display = 'none';
            Helpp.innerText = '+';
            About.style.display = 'none';
            Aboutp.innerText = '+';
        }
    }
    else if (e == 1) {
        if (Contactp.innerText == '-') {
            Contact.style.display = 'none';
            Contactp.innerText = '+';
        }
        else {
            Products.style.display = 'none';
            Productsp.innerText = '+';
            Contact.style.display = 'block';
            Contactp.innerText = '-';
            Help.style.display = 'none';
            Helpp.innerText = '+';
            About.style.display = 'none';
            Aboutp.innerText = '+';
        }
    }
    if (e == 2) {
        if (Helpp.innerText == '-') {
            Help.style.display = 'none';
            Helpp.innerText = '+';
        }
        else {
            Products.style.display = 'none';
            Productsp.innerText = '+';
            Contact.style.display = 'none';
            Contactp.innerText = '+';
            Help.style.display = 'block';
            Helpp.innerText = '-';
            About.style.display = 'none';
            Aboutp.innerText = '+';
        }
    }
    if (e == 3) {
        if (Aboutp.innerText == '-') {
            About.style.display = 'none';
            Aboutp.innerText = '+';
        }
        else {
            Products.style.display = 'none';
            Productsp.innerText = '+';
            Contact.style.display = 'none';
            Contactp.innerText = '+';
            Help.style.display = 'none';
            Helpp.innerText = '+';
            About.style.display = 'block';
            Aboutp.innerText = '-';
        }
    }
}