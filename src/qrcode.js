let body = document.querySelector("body");
let qr = document.getElementById("qr");
let main = document.getElementById("qrparent");
let click = document.getElementById("click");
let Close = document.getElementById("Closeqr");

Close.addEventListener("click", () =>{
  window.location = "index.html";
})

    click.addEventListener("click", () => {
        main.setAttribute("id", "show")
        main.style.position="fixed";
    })
    qr.addEventListener("click", () => {
        main.innerHTML = null;
        body.setAttribute("id","body");
        otp();
    })






    function otp() {
        let form =`<div class="otpContainer">
        <header>
          <i class="bx bxs-check-shield"></i>
        </header>
        <h4>Enter OTP Code</h4>
        <form id="otpform" action="#">
          <div class="input-field">
            <input class="otpInput" type="number" />
            <input class="otpInput" type="number"/>
            <input class="otpInput" type="number"/>
            <input class="otpInput" type="number"/>
          </div>
          <button id="otpbutton">Verify OTP</button>
        </form>
        <button class="otpclose" id="closeotp" style="text-align: center;margin-top:10px">Close</button>
      </div>`;
      main.innerHTML = form;
      
      let close   = document.getElementById("closeotp");

      close.addEventListener("click", () =>{
        window.location = "index.html"
      })

}