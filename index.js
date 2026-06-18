import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer.prompt([
    {
    name: "url" ,
    message: "enter URL"
    }
])
.then((answer)=>{
    var URL = answer.url;
    const qr_svg = qr.image(URL);       //QR data stream
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));   //QR data stream converted to image data

    fs.writeFile("URL.txt", URL , (err)=>   //storing QR data inside .txt file
    {
        if (err) throw err;
        console.log(URL);
    })
});




