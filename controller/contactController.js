const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'aryanshukla080301@gmail.com',
        pass: "leibscafywcdbucu" // here
    },
    post: 465,
    host: 'stmp.gmail.com'
});



exports.contactDetails = (req, res, next) => {
    res.render('contact', {
        home: false,
        education: false,
        experience: false,
        project: false,
        contact: true
    })
}
exports.sendMessage = (req, res, next)=>{
    const msg = {
        from: 'aryanshukla080301@gmail.com',
        to: 'aryanshukla1313@gmail.com',
        subject: `Message from Portfolio`,
        html: `<h3>Dear Aryan Shukla,</h3>
        <p>I am ${req.body.name} had visited your portfolio website.</p>
        <p>${req.body.message}</p><br>
        <p>Email :  ${req.body.email}</p>
        <p>Phone No :  ${req.body.phone}</p>
        `
    };
    transport.sendMail(msg, (err)=>{
        if(err)
            console.log(err);
    })
    res.render('contact-success', {
        home: false,
        education: false,
        experience: false,
        project: false,
        contact: true
    })
}