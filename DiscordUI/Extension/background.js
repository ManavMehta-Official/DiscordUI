//Make the script run 
function work(){
    if(document.URL == "https://entrar.in/login/login"){
        chrome.storage.sync.get("autofill", (value)=>{
            var a = JSON.stringify(value).split(":")[1]
            a = a.substring(0, a.length - 1)
            console.log(a);
            if(a == "true"){
                chrome.storage.sync.get("accounts", function (values){
                    if(JSON.stringify(values).toString().includes('username')){
                        console.log(JSON.stringify(values).split('"')[9])
                        document.getElementById("username").value =  JSON.stringify(values).split('"')[9]
                        document.getElementById("password").value = JSON.stringify(values).split('"')[5]
                    }
                    console.log(values)
                })
            }
        })
        chrome.storage.sync.get("captcha", (value)=>{
            var a = JSON.stringify(value).split(":")[1]
            a = a.substring(0, a.length - 1)
            console.log(a);
            if(a == "true"){
                var raw = document.getElementsByClassName("label-input100")[0].innerHTML
                var processed = raw.substring(0, parseInt(raw.length - 2))
                var processedArray = processed.split(" ")
                var solved = parseInt(parseInt(processedArray[0]) + parseInt(processedArray[2]))
                document.getElementById("captcha").value = solved
            }
        })



        
        document.getElementsByClassName("col-md-8")[0].innerHTML = 
        `
            <img class="hero" src="https://miro.medium.com/max/1838/1*1vX0F1PhUFH9qChYv0qIEw.png" style="width: 80%">
            <a class="open-disc" href="https://discord.com/channels/@me" target="_blank">Open Discord</a>
        `
        
    }



    // Entrar homepage/dashboard 
    else if(document.URL == "https://entrar.in/"){
        console.log("Homepage")
        setTimeout(() => {
            document.getElementsByClassName("close")[0].click()
        }, 1000);


        document.querySelector("#pcoded > div.pcoded-container.navbar-wrapper > div.pcoded-main-container > div > div > div > div > div").innerHTML = 
        `
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.1/font/bootstrap-icons.css">
            <div class="welcome-container mx-auto text-center" style="margin-top: 2%;">
            <img src="https://cdn.discordapp.com/attachments/908738844042600478/917597669885620234/ServerChannelHeaders_Welcome1.png" class="img-fluid welcome mx-auto text-center">
            </div>
                <div class="box-container">
                <div class="box-inner-container">
                    <div class="row">

                        <div class="col-sm-6">
                            <a href="https://entrar.in/pp_announcement/announcement">
                                <div class="announce">
                                    <h1 class="mx-auto text-center card-title"><i class="bi bi-megaphone"></i> Announcements</h1>
                                </div>
                            </a>
                        </div>

                        <div class="col-sm-6">
                        <a href="https://entrar.in/pp_assignment/classassignment">
                            <div class="assign">
                                <h1 class="mx-auto text-center card-title"><i class="bi bi-journals"></i> Assignments</h1>
                            </div>
                        </a>
                        </div>
                    </div>

                    <div class="row">

                        <div class="col-sm-6">
                            <a href="https://entrar.in/classroom_creation_crm_new/s_display">
                                <div class="class">
                                    <h1 class="mx-auto text-center card-title"><i class="bi bi-display"></i> Online Classroom</h1>
                                </div>
                            </a>
                        </div>

                        <div class="col-sm-6">
                            <a href="https://entrar.in/pp_news_letter/news_letter">
                                <div class="news">
                                    <h1 class="mx-auto text-center card-title"><i class="bi bi-newspaper"></i> Newsletters</h1>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        `


   
        chrome.storage.sync.get("theme", (value)=>{
            console.log(value);
                //Make loading page dark
            if(document.getElementsByClassName("theme-loader")[0]){
                document.getElementsByClassName("theme-loader")[0].style.backgroundColor = "#2F3136"
            }
            //Sidebar
            document.getElementById("pcoded").style.backgroundColor = "#2F3136"
            document.getElementById("student_menu").style.backgroundColor = "#2F3136"
            document.getElementsByClassName("pcoded-item pcoded-left-item")[0].style.backgroundColor = "#2F3136"
            for(var i = 0; i < document.getElementsByClassName("pcoded-item pcoded-left-item")[0].getElementsByTagName("li").length; i++){
                document.getElementsByClassName("pcoded-mtext")[i].style.color = "white"
                document.getElementsByClassName("pcoded-mtext")[i].style.backgroundColor = "#2F3136"
            }
            document.getElementById('mCSB_1_container_wrapper').style.backgroundColor = "#2F3136"

            document.getElementsByClassName("pcoded-main-container")[0].style.backgroundColor = "#36393F"
            document.getElementsByClassName("pcoded-main-container")[0].style.color = "white"
            document.getElementsByClassName("pcoded-inner-content")[0].style.backgroundColor = "#36393F"
            document.getElementsByClassName("pcoded-inner-content")[0].style.color = "white"

        
            for(var j = 0; j < document.getElementsByClassName("card").length; j++){
                document.getElementsByClassName("card")[j].style.backgroundColor = "#fff"
                document.getElementsByClassName("card")[j].style.color = "#36393f"
            }
        })

        
    } 


    //Change UI for the url starting with entrar.in/
    else if(document.URL.startsWith("https://entrar.in/")){


        document.getElementById("pcoded").style.backgroundColor = "#2F3136"
        document.getElementById("student_menu").style.backgroundColor = "#2F3136"
        document.getElementsByClassName("pcoded-item pcoded-left-item")[0].style.backgroundColor = "#2F3136"
        for(var i = 0; i < document.getElementsByClassName("pcoded-item pcoded-left-item")[0].getElementsByTagName("li").length; i++){
            document.getElementsByClassName("pcoded-mtext")[i].style.color = "white"
            document.getElementsByClassName("pcoded-mtext")[i].style.backgroundColor = "#2F3136"
        }
        document.getElementById('mCSB_1_container_wrapper').style.backgroundColor = "#2F3136"

        document.getElementsByClassName("pcoded-main-container")[0].style.backgroundColor = "#36393F"
        document.getElementsByClassName("pcoded-main-container")[0].style.color = "white"
        document.getElementsByClassName("pcoded-inner-content")[0].style.backgroundColor = "#36393F"
        document.getElementsByClassName("pcoded-inner-content")[0].style.color = "white"

        for(var j = 0; j < document.getElementsByClassName("card").length; j++){
            document.getElementsByClassName("card")[j].style.backgroundColor = "#fff"
            document.getElementsByClassName("card")[j].style.color = "#36393f"
        }
    }  
}


chrome.tabs.onUpdated.addListener(function(tabId){
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        function : work
      })
})
