module.exports.config = {
	name: "Madhab",
	version: "1.0.1", 
	permssion: 0,
  premium: false,
  prefix: false,
	credits: "Madhab",
	description: "Admin info",
	category: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =[
  "https://i.postimg.cc/fy1y2xLG/FB-IMG-1705421713595.jpg ", 
            
            "https://postimg.cc/kRF7DRWs", 
            
"https://postimg.cc/kRF7DRWs",
            
            "https://i.imgur.com/N2tNu0u.jpg"
					];
  
var callback = () => api.sendMessage({body:`𝗡𝗮𝗺𝗲       : Madhab Datta\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : Madhab\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : Hindu\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : ❤️‍🔥Chattogram🔥\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : NO NEED TO KNOW \n𝗚𝗲𝗻𝗱𝗲𝗿     : Male\n𝗔𝗴𝗲            :  21\n𝗪𝗼𝗿𝗸         :  Student  \n𝗚𝗺𝗮𝗶𝗹        :madhabdatta07@gmail.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+8801897769514\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : \n𝗙𝗯 𝗹𝗶𝗻𝗸   :https://www.facebook.com/share/RHQj8Y7imu9tncqJ/?mibextid=qi2Omg
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
