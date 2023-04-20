const btn =document.querySelector('.btn')
const pasteLink = document.getElementById('paste-link')
const googleLink = document.getElementById('google-drive-link')
const copy = document.querySelector('.copy')

btn.addEventListener('click', generateLink)

function generateLink(e){
    e.preventDefault();
    const linkValue = googleLink.value;
    const confirmLink = linkValue.includes("https://docs.google.com/spreadsheets/d/");
    
    if(confirmLink == true){
        const downloadLink = linkValue
        .replace("https://docs.google.com/spreadsheets/d/", "https://drive.google.com/uc?export=download&id=")
        .replace("/edit?usp=share_link&ouid=108989555139298860237&rtpof=true&sd=true", "")
        
        pasteLink.value = downloadLink;

        function copyText(target) {
            if(target.value == ""){
                alert('Please Generate A Link')
            } else {
                
                target.select();
                navigator.clipboard.writeText(target.value).then(()=>{
                    alert("Link has been copied to clipboard");
                });
            }
        }
        copy.addEventListener('click', () => {
            return  copyText(pasteLink)
        })
        
        // Embed Audio
        const audio1 = '<audio width="300" height="32" controls="controls" src="';
        const audio2 ='"type="audio/mp3"></audio>'
        const embedAudio = document.getElementById('embed-audio')
        embedAudio.value = `${audio1}${pasteLink.value}${audio2}`

        const copyAudio = document.querySelector('.copy-audio')
        copyAudio.addEventListener('click', () => {
            return  copyText(embedAudio)
        })

        // Embed Video/Docs
        const video1 = '<iframe src="'
        const video2 = '/preview" width="560" height="315"></iframe>'
        const embedVideo = document.getElementById('embed-video')
        embedVideo.value = `${video1}${pasteLink.value}${video2}`
        
        const copyVideo = document.querySelector('.copy-video')
        copyVideo.addEventListener('click', () => {
            return  copyText(embedVideo)
        })
    } else {
        alert('Please A Google Drive Link')
    }
}

