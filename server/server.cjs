const express = require('express')
const cors = require('cors')
const URLS = require('./config/urls.cjs')
const generateEmailHTML = require('./util/generateEmailHTML.cjs')
const sendEmail = require('./util/sendEmail.cjs')
const path = require('path')
const EMAIL = require('./config/email.cjs')

const app = express()

app
  .use(cors())
  .use(express.json())
  .use(express.static(path.join(__dirname, '../server/build/')))

app
  .get('/product_data', (req, res) => {
    fetch(req.query.productURL, {
      headers: {
        Cookie:
          'ih-experiment=eyJ1Z2MtdGFncy1lY3RqYSI6eyJDaG9zZW5WYXJpYW50IjowLCJFbmREYXRlIjoiMjAyMy0wOS0wMVQwMDowMDowMCJ9LCJpbnRlcm1lZGlhcnlSZWNzIjp7IkNob3NlblZhcmlhbnQiOjAsIkVuZERhdGUiOiIyMDI0LTAxLTAxVDAwOjAwOjAwIn0sImwxQ2F0ZWdvcnlTdG9yZVJlZGlyZWN0Ijp7IkNob3NlblZhcmlhbnQiOjAsIkVuZERhdGUiOiIyMDI0LTAxLTAxVDAwOjAwOjAwIn0sInJlYy1yZWNmb3J5b3UiOnsiQ2hvc2VuVmFyaWFudCI6MSwiRW5kRGF0ZSI6IjIwMjMtMDMtMjFUMDA6MDA6MDBaIn0sInJlYy1uZXdwcm9kdWN0cyI6eyJDaG9zZW5WYXJpYW50IjoxLCJFbmREYXRlIjoiMjAyMy0wNi0yMVQwMDowMDowMFoifSwicmVjLXNwZWNpYWxzIjp7IkNob3NlblZhcmlhbnQiOjEsIkVuZERhdGUiOiIyMDIzLTA2LTIxVDAwOjAwOjAwWiJ9fQ%3D%3D; ih-preference=store=0&country=KZ&language=ru-RU&currency=KZT; ih-cc-pref=eyJmdW5jdGlvbmFsIjowLCJhbmFseXRpY3MiOjB9; dscid=a2f0aaf4-efbb-49ad-b164-07e97e9e828f; ih-hp-vp=40; user-related={"HasNavigatedSite":{"timestamp":1679152171114}}; _pxvid=071cf8e8-9cdb-11ed-b520-4b74664d6170; iher-vps=23216.22640.54089.519; __pxvid=096693b1-9cdb-11ed-a0d8-0242ac120002; ForceTrafficSplitType=B; __cfruid=b391d17ff32eab68e33253becdca35284d911d77-1678910652; pxcts=0881876e-9cdb-11ed-a77f-456d67574e5a; ih-search-hist-1=W3siayI6Ik5PVy0wNDY1NSIsInQiOjB9XQ==; _pxhd=Nq8PTZL54PxgHis7Vp1G1XkT2nCY2ac1mbQHML8cp6F1EbWnzbvqiJOE6SWjDkZDouPoO13lIv9U-RxrW-b7bw; iher-pref1=storeid=0&sccode=KZ&lan=ru-RU&scurcode=KZT&wp=2&lchg=1&ifv=1&accsave=0; __cf_bm=xExqLjakPM6YhRBFiZ54.oAzDQNZvTWWxIIdxayIFF8-1679154810-0-AfEPbuKQgcgZx8aqLp3Ry91bhafXR4FF1IvwpGbq2+hr9S7lQ4fRo3TmPxV6A43j+LKx1NUonX29W/y0Gr0mMcSoLpZ0GKbSIyH4EzqesS7q; ihr-temse=expires%3D18%2520Mar%25202023%252017%3A09%3A17Z; _px3=66b689ba476e1f742e3f2507f8ef3b8d2eaed893dedbdf1f99a2772b96c00add:sHGXB2BLf9c7i8Nim+qtwX1lo9UIDHComtnHBkvncmc4b6yvWgJiY4kuKEenbLx74zXgSrsqZSKMO338uDlnUQ==:1000:vp8TJYR6NyRPFa11vM/s0iEYk+6TLTCI7Rck516m2tj1n2NFTSFWwn4zrqbYNc63v4xaYPm163gjLvXNii2c6bK6eO+KCg98qGWEie+6rpmlpeRP3UP1celfo4/IsEoU3OTILmIwzJ9E/pJlHXyn2FC+xnPEs7TUQqmgj9rv1x8IGccOhmzxwymdD2Wx4mW2LOPlXS1OKdpjfVGLm0Y8xQ==; cf_clearance=uZfhk8PFag00N0YThI0EJ8FpyXh_sq.ws.DUrGLp9p4-1679150441-0-250; pref-saved=2; _gcl_au=1.1.990999343.1679147038; _ga_SW3NJP516F=GS1.1.1679151223.2.0.1679151228.55.0.0; _ga=GA1.2.2129905466.1679147038; _scid=f9fd7722-24d0-46d5-b605-073944e20822; sd_client_id=6685d76f-98fe-4d7c-b68d-d72e14a26b55; FPLC=RmSv9kX%2B0UhhrpWhQOKkwLJeEayoKpXozVSB2FLRw9O8t9Lh2a%2FfbkJHoeViwA8hVHScZa8CgBOz4qW7MSmcZFSo5gr%2FPxQvyFrneUu3v%2BvCZPJXlWlyd2H0SM%2FD8Q%3D%3D; FPID=FPID2.2.YS9CxJI8hc2Qffub3R%2FULVfCSdEETqpOskGMbBANi08%3D.1679147038; FPAU=1.1.990999343.1679147038; _li_dcdm_c=.iherb.com; _lc2_fpi=93d7398a661d--01gvtfcyaptz4b56fxpvgjfdpx; _pin_unauth=dWlkPU1qTTNaVEE0TVRjdFpXUTFZeTAwTlRNMExUazRZakF0T0dWaU1qaG1OR1k1TTJKaw; _gid=GA1.2.121746809.1679147041; _sctr=1|1679079600000; cto_bundle=uQar8V9TSGg3c3pyOTBkJTJCcHpLOWJtam00Nko3VllETWF2ZkFpdEFxcmd4YWpQbDRnRTdKU0lSVmRSdVY0Wml4bEppWFlqWFpkdXBXbGJKcjBYaVRhbjYyNGdSemlBMmU4Q1lCWm1MMDc4YXJkbmNQZDRXU3ElMkJvMk1pNlYwQSUyQnJNZCUyQlJVam1YN0I3VlNMQktYRnFPcGRoTWZmQSUzRCUzRA; _cc_id=9723497453c89abd6cf533a831e72956; panoramaId_expiry=1679237033479; _tt_enable_cookie=1; _ttp=KnUWhUKBdv81Uao_kB4IXKbLpRX; sd_identity={"userId":"","traits":{"personId":null,"properties":{"country":"US","currency":"USD","language":"en-US"}}}; ihr-ds-vps=23216,22640,54089,519; _uetsid=ef5a0c30c59211ed990297a09ffbb2ff; _uetvid=ef5a01b0c59211edb33861565f01523d',
      },
    })
      .then(function (response) {
        return response.text()
      })
      .then(function (string) {
        res.json(string)
        res.end()
      })
      .catch(error => {
        console.log(error)
      })
  })
  .get('/cb_rates', (req, res) => {
    fetch(URLS.CB_RATES_URL)
      .then(response => {
        return response.text()
      })
      .then(string => {
        res.json(string)
        res.end()
      })
  })
  .post('/mail_request', (req, res) => {
    try {
      const emailMessageJSON = req.query

      const userInfo = JSON.parse(emailMessageJSON.userInfo)
      let addressDelivery
      emailMessageJSON.addressDelivery !== 'undefined'
        ? (addressDelivery = JSON.parse(emailMessageJSON.addressDelivery))
        : (addressDelivery = false)
      const orderProducts = JSON.parse(emailMessageJSON.orderProducts)
      const operatorEmailHTML = generateEmailHTML({
        userInfo,
        addressDelivery,
        orderProducts,
        recipientType: 'operator',
      })
      const userEmailHTML = generateEmailHTML({
        userInfo,
        addressDelivery,
        orderProducts,
        recipientType: 'user',
      })

      sendEmail({
        html: userEmailHTML,
        subject: 'Заявка принята',
        recipient: userInfo.email,
      }).then(result => {
        if (result) {
          res.statusCode = 200
        } else res.statusCode = 500
      })
      sendEmail({
        html: operatorEmailHTML,
        subject: 'Заявка на заказ',
        recipient: EMAIL.OPERATOR_ADDRESS,
      }).then(result => {
        if (result) {
          res.statusCode = 200
        } else res.statusCode = 500
      })
    } catch (err) {
      res.statusCode = 500
      console.log(err)
    }
    res.end()
  })

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`)
})

module.exports = app
