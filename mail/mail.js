const mailer=require('nodemailer')

const getmaildata=async(req,res)=>{
    const {frommail,getmail,file}=req.body;

    const info=await transporter.sendMail({
        from:'',
        to:'',
        subject:'這是作業',
        text:""
    })
}