/**
 * Created by johan on 23/05/2015.
 */
var MailListener = require("mail-listener2");

var mailListener = new MailListener({
    username: "johan.pujol@gmail.com",
    password: "pujol160689",
    host: "imap.gmail.com",
    port: 993, // imap port
    tls: true,
    tlsOptions: {rejectUnauthorized: false}
});


// stop listening
//mailListener.stop();

mailListener.on("server:connected", function () {
    console.log("imapConnected");
});

mailListener.on("server:disconnected", function () {
    console.log("imapDisconnected");
});

mailListener.on("error", function (err) {
    console.log(err);
});

mailListener.on("mail", function (mail, seqno, attributes) {
    // do something with mail object including attachments
    console.log("emailParsed", mail);
    // mail processing code goes here
});

mailListener.on("attachment", function (attachment) {
    console.log(attachment.path);
});


exports.init = function () {
    //mailListener.start(); // start listening
}