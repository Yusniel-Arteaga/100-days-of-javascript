const para = document.querySelector('p')
const image = document.querySelector('img')
const bgColor = document.querySelector('main')


function setColor() {
    bgColor.classList.add("online");
}


async function connectionStatus() {
    try {
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
        image.src = "./images/online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
    } catch (error) {
        console.error(error);
        para.textContent = "OOPS!!! Your Internet Connection is Down.";
        image.src = "./images/offline.png";
        bgColor.classList.remove("online");
    }
}
    
setInterval(async () => {
    const result = await connectionStatus();
    if ( result ) {
        para.textContent = "You're ONLINE!!! Connection looks good.";
        setColor(); 
    } 
  }, 5000);
  
//   Check Connection When Page Loads
   window.addEventListener("load", async (event) => {
     if ( connectionStatus() ) {
    	para.textContent = "Online"
    } else {
    	para.textContent = "OFFline"
    }
  });