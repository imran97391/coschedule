        function submitForm(e){
            e.preventDefault();
            //console.log(e);
            var paymentDetails =[];
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
            paymentDetails.push(obj);
            localStorage.setItem('proMembers', JSON.stringify(paymentDetails));
            

            let fullContent = document.getElementById("container-body");
            let overLay = document.getElementById("overLay");
           function alertCustomer(){
            e.preventDefault()
            setTimeout(() =>{fullContent.style.display='none',overLay.style.display='unset'}, 2000);
            setTimeout(() => (window.location.href = "../Html/congrats.html"), 8000);
            } setTimeout(alertCustomer, 1000);
        }