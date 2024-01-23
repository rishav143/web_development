import inquirer from 'inquirer';
import fs from 'fs';
import qr from 'qr-image';

inquirer.prompt([{
        type: 'input',
        name: 'URL',
        message : 'please enter the valid URL ?'
    },
])
.then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('url_img.png'));

    fs.writeFile("URL.txt", url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
})
.catch((error) => {
    if(error.isTtyError) {
        console.log('There was an TTY error.');
    } else {
        console.log('please try again later.');
    }
});