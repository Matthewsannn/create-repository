const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('index', { title: 'Ana Sayfa' });
});

app.get('/hakkimizda', (req, res) => {
  res.render('hakkimizda', { title: 'Hakkımızda' });
});



app.get('/uzmanlik-alanlarimiz', (req, res) => {
   res.render('uzmanlik-alanlarimiz',{title: 'Uzmanlık Alanlarımız'});
});


app.get('/iletisim', (req, res) => {
     res.render('iletisim',{title: 'İletişim'});
     });
     app.post('/send-email', (req, res) => {
         let mailOpts, smtpTrans;
             smtpTrans = nodemailer.createTransport({
                     service: 'Gmail',
                             auth: {
                                         user: 'YOUR_EMAIL@gmail.com',
                                                     pass: 'YOUR_GMAIL_PASSWORD'
                                                             }
                                                                 });

                                                                     mailOpts = {
                                                                             from: req.body.name + ' &lt;' + req.body.email + '&gt;',
                                                                                     to: 'YOUR_EMAIL@gmail.com',
                                                                                             subject: req.body.subject,
                                                                                                     text: `${req.body.name} ${req.body.surname} (${req.body.email}) şunları yazdı: "${req.body.message}"`
                                                                                                         };

                                                                                                             smtpTrans.sendMail(mailOpts, (error, response) => {
                                                                                                                     if (error) {
                                                                                                                                 res.render('iletisim', { msg: 'Hata oluştu, e-posta gönderilemedi.' });
                                                                                                                                         } else {
                                                                                                                                                     res.render('contact', { msg: 'E-posta başarıyla gönderildi!' });
                                                                                                                                                             }
                                                                                                                                                                 });
                                                                                                                                                              });

app.listen(port, () => {
  console.log(`Server ${port} portunda başlatıldı.`);
});

