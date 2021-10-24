const linksSocialMedia = {
    github : "jakeliny", 
    youtube:  "jakelinygracielly",
    facebook : "maikbrito",
    instagram : "jakeliny.gracielly",
    twitter : "jakelinytec"
}

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')
        
    li.children[0].herf = `https://${social}.com/${LinksSocialMedia[social]}`
        }
    }

    changeSocialMediaLinks()


    function getGitHubProfileInfos() {
        const url= `https://api.github.com/users/${LinksSocialMedia.github}`
        fetch(url)
        .then(respense => respose.json())
        .then(data =>{
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.herf = data.html_url
            userImage.src = data.avatar_url
            userLogin. textContent = data.login
        })
    }
    getGitHubProfileInfos ()