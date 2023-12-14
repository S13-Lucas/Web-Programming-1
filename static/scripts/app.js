
/*

function loadAccount() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {


/////////////////////////////////////////////////////////////////////////      
      let info =  <?php echo getAccount() ?>

////////////////////////////////////////////////////////////////////////////////


      // updating DOM accordingly
      console.log(profile);
      
      
      
///////////////////////////////////////////////////////////      
      if (  info =                     ) {
///////////////////////////////////////////////////////////        
        
        
        
        
        ulListings.innerHTML = `


        <div class="aboutBox">  
        <form>
          <div class="about">Account</div>
            <input type="fullname" name="fullname" placeholder="Name">
            <input type="phoneNumber" name="phoneNumber" placeholder="phone number">

            <textarea id= "details" name="about" placeholder="About me"></textarea>
            <button id="edit">EDIT DETAILS</button> 
            <button id="save">SAVE CHANGES</button>  
            <button id="delete">DELETE ACCOUNT</button>
        </form>
    </div>








        `;

        document.getElementById("edit").addEventListener("click", editProfile);
        document.getElementById("save").addEventListener("click", saveProfile);
      } else {
        // updating DOM accordingly
        ulListings.innerHTML = `
        
        



        <div class="aboutBox">  
            <form method="POST">
              <div class="about">About Me</div>
                <input type="fullname" name="fullname" value="${profile.name}" readonly>
                <input type="university" name="university" value="${profile.university}" readonly>
                <button type="button" id="viewCV">VIEW CV</button>
                <textarea id="details" name="about" readonly>${profile.description}</textarea>
                <button type="button" id="edit">EDIT DETAILS</button> 
                <button type="button" id="save">SAVE CHANGES</button>  
                <button type="button" id="delete">DELETE ACCOUNT</button>
            </form>
            </div>


        





        `;

        document.getElementById("edit").addEventListener("click", editProfile);
        document.getElementById("viewCV").addEventListener("click", function() {
          viewCV(profile.cv);
        });
      }
    } else {
      console.log("xhttp request problem occurred");
    }
  };

  xhttp.open("GET", "student_profile_update", true);
  xhttp.send();
}