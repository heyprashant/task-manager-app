const sgMail = require('@sendgrid/mail')
const img = '../../assests/checked.png'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.SGMAIL_EMAIL,
        subject: 'Thanks for joining in!',
        html: `
        <p>Welcome to the Task Manager app, ${name}.
        Let me know how you get along with the app.</p>
        <br>
        <h3>Task Manager </h3>
        Prashant`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: process.env.SGMAIL_EMAIL,
        subject: 'Sorry to see you go!',
        html: `
            <p>Goodbye, ${name}.
            I hope to see you back sometime soon.</p>
            <br>
            <h3>Task Manager </h3>
            Prashant`
    })
}

const sendPasswordResetEMail = (email, name, token) => {
    sgMail.send({
        to: email,
        from: process.env.SGMAIL_EMAIL,
        subject: 'Password Reset Link.',
        html: `
            <p>Hi ${name}</p>
            <p>Sorry to hear that you're having trouble with logging in to Task Manager. We can help you get straight back into your account.</p>
            <p><a href='${process.env.CLIENT_URL}/user/password/reset/${token}'>Click here to reset password</a></p>
            <br>
            <h3>Task Manager </h3>
            Prashant`
            
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail,
    sendPasswordResetEMail
}