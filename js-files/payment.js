 function linkedinHome(){
        window.location.href ="home.html"
    }

        function submitForm(e){
            e.preventDefault();
            //console.log(e);
            var proMembershipDetails =[];
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var creditNumber = document.getElementById('creditNum').value;
            var expiryDate = document.getElementById('expiryDate').value;
            var cvvNumber = document.getElementById('cvvNumber').value;
            var country = document.getElementById('country').value;
            var postalCode = document.getElementById('postalCode').value;
            var gstNumber = document.getElementById("gstNumber").value;
           let obj={
               FirstName:firstName,
               LastName:lastName,
               creditDebitDetail:creditNumber,
               ExpiryDate:expiryDate,
               CVV:cvvNumber,
               Country:country,
               PostalCode:postalCode,
               GSTdetails:gstNumber,
           }
            proMembershipDetails.push(obj);
           localStorage.setItem('proMembers',JSON.stringify(proMembershipDetails));
           function alertCustomer(){
            alert("Pro Membership Activated!");
                window.location.href ="../Html/index.html"
           }
           setTimeout(alertCustomer,2000)
        }