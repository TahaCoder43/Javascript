var nodemailer = require('nodemailer');
var http = require('http');

var transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
        user: "TahaMunawar43@outlook.com",
        pass: "511t1X3gt3F37CIVi9iQooZ5"
    }
});

// can also put the coma with the "to" string value to send to multiple recievers
var mailOptions = {
    from: "TahaMunawar43@outlook.com",
    to: "CodeDude43@outlook.com",
    subject: 'Sending Email using Node.js',
    text: "This was really hard!"
};

transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log("Email sent: " + info.response);
    }
});