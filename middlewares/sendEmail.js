const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    // service: process.env.SMPT_SERVICE,
    // port:process.env.SMPT_PORT,
    // host:process.env.SMPT_HOST,
    // auth: {
    //   user: process.env.SMPT_MAIL,
    //   pass: process.env.SMPT_PASSWORD,
    // },

    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
    user: "7b8ba798fa4186",
    pass: "c42d030bf4d47a"
  },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject:options.subject ,
    text: options.message
  };

  
  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

