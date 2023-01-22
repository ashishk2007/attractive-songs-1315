    let userData = JSON.parse(localStorage.getItem("userData"))|| [];
    let body = document.querySelector("body");
    let qr = document.getElementById("qr");
    let main = document.getElementById("qrparent");
    let click = document.getElementById("click");
    let Close = document.getElementById("Closeqr");
    let opt;
    
    if(userData.id){
      click.innerText=userData.id;
    }
    
    Close.addEventListener("click", () =>{
      main.setAttribute("id","a");
      body.removeAttribute("id","body");
    })
    
        click.addEventListener("click", () => {
          if(click.innerText == "Login/SignUp"){
            main.setAttribute("id", "show");
            main.style.position="fixed";
            body.setAttribute("id","body");
          }
        
        })
        qr.addEventListener("click", () => {
            main.innerHTML = null;
            body.setAttribute("id","body");
            otp();
        })
    
    
    
    
    
    
        function otp() {
            let form =`<div class="otpContainer">
            <input type="text" id="name" placeholder="Enter Your Name..."/>
            <input type="number" id="mobileNumber" placeholder="Enter Mob No."/>
            <button id="getotp"> Get OTP </button>
            <header>
              <i class="bx bxs-check-shield"></i>
            </header>
            <h4>Enter OTP Code</h4>
            <form id="otpform" >
              <div class="input-field">
                <input class="otpInput" type="number" />
                <input class="otpInput" type="number"/>
                <input class="otpInput" type="number"/>
                <input class="otpInput" type="number"/>
              </div>
            <input   id="otpbutton" type="submit" value="Verify OTP"/>
            </form>
            <button class="otpclose" id="closeotp" style="text-align: center;margin-top:10px">Close</button>
          </div>`;
          main.innerHTML = form;
          
          let close   = document.getElementById("closeotp");
          close.addEventListener("click", () =>{
            main.setAttribute("id","a");
            body.removeAttribute("id","body");
          })
          
          let mobNootp = document.getElementById("getotp");
          let mobNo = document.getElementById("mobileNumber");
          mobNootp.addEventListener("click", () =>{
           if(mobNo.value.length!==10){
            window.alert("Please Enter 10 Digit Mob no.")
           }else{
             setTimeout(()=>{
               otp = Math.floor(Math.random() * 10)+""+Math.floor(Math.random() * 10)+""+Math.floor(Math.random() * 10)+""+Math.floor(Math.random() * 10);
             window.alert(otp);
             },1)
           }
          })
    
    
          let submit  = document.getElementById("otpform");
          let name  = document.getElementById("name");
          let otparray = document.getElementsByClassName("otpInput")
          submit.addEventListener("submit",(e) =>{
            e.preventDefault();
            let obj = {
              id: name.value,
              mob:mobNo.value
            }
            let otpMatch = otparray[0].value+""+otparray[1].value+""+otparray[2].value+""+otparray[3].value;
           if(otpMatch=== otp){
            userData=obj;
            localStorage.setItem("userData",JSON.stringify(userData));
             window.location.reload();
           }else{
            window.alert("OTP is Wrong");
           }
          })
    }