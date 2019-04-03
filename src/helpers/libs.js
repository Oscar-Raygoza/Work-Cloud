const helpers = {};

helpers.randomName = ()=>{
    const possible = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let randomName = 0;
    for(let i = 0; i < 6; i++){
        randomName +=possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return randomName;
}

/*
helpers.MoveFile = (req, res) =>{
    function randomName(){
        const possible = 'abcdefghijklmnopqrstuvwxyz1234567890';
        let randomName = 0;
        for(let i = 0; i < 6; i++){
            randomName +=possible.charAt(Math.floor(Math.random() * possible.length))
        }
        return randomName;
    }
    //Nethod Save
    const saveFile = async ()=>{
        console.log("entre al savefile()")
        const fileUrl = randomName();
        const filesRepet = await Publications.find({ filename: fileUrl });
        if(filesRepet.length > 0){
            saveFile();
        }
        else{
            console.log(fileUrl); 
            const tempPath = req.file.path;

            const ext = path.extname(req.file.originalname).toLowerCase();
            const targerPath = path.resolve(`src/public/upload/${fileUrl}${ext}`);
        
            if(ext === '.png' || ext === '.jpeg' 
            || ext === '.jpg' || ext === '.gif' ){
                await fs.rename(tempPath,targerPath);
                return fileUrl+ext;
            }
            else{
                await fs.unlink(tempPath);
                res.status(500).json({ error: 'Only files Images'})
            }    
        
        }
    };
    
    saveFile();

}
*/  
module.exports = helpers;
