let qr = document.getElementById("qr");
    let main = document.getElementById("qrparent");
    let click = document.getElementById("click");
    let body = document.querySelector("body");

    click.addEventListener("click", () => {
        main.setAttribute("id", "show")
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
        <button class="otpclose" style="text-align: center;margin-top:10px">Close</button>
      </div>`;
      main.innerHTML = form;
      

}