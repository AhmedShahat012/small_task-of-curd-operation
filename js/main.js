
var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCatergryInput = document.getElementById("productCatergryInput");
var productDescriptionInput = document.getElementById("productDescriptionInput");
var serechItems = document.getElementById("serechItems");
var addproduct=document.getElementById("addproduct");
var updateproduct=document.getElementById("updateproduct");
var idexforUpdate=0;
var allProduct = [];
// check array is  not a empty and loaded data from localstorage to array and display it when wedoing refresh
if (localStorage.getItem("allProduct") != null) {
  allProduct = JSON.parse(localStorage.getItem("allProduct"));
  displayData();
}
function addProduct() {
    if(vailditionName()==true&&vailditionPrice()==true&&vailditioncategry()==true&&vailditiondesc()==true){
        var product = {
            Name: productNameInput.value,
            price: productPriceInput.value,
            categry: productCatergryInput.value,
            desc: productDescriptionInput.value,
          };
        
          allProduct.push(product);
          localStorage.setItem("allProduct", JSON.stringify(allProduct)); //storage array in localsotage and JSON.stringify(allProduct) conver all arr to one string
          displayData();
          clearData();
    }
 
}

function clearData() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCatergryInput.value = "";
  productDescriptionInput.value = "";
}

function displayData() {
  var items = "";
  for (var i = 0; i < allProduct.length; i++) {
    items += `
       <tr>
       <td>${allProduct[i].Name}</td>
       <td>${allProduct[i].price}</td>
       <td>${allProduct[i].categry}</td>
       <td>${allProduct[i].desc}</td>
       <td><button onclick="setDate(${i})" class="btn btn-success">Update</button></td>
       <td><button onclick="deletdata(${i}) " class="btn btn-success">delet</button></td>
       </tr>
        `;
  }
  document.getElementById("tablebody").innerHTML = items;
}
function deletdata(idx) {
  allProduct.splice(idx, 1);
  localStorage.setItem("allProduct", JSON.stringify(allProduct)); // here we call it when you delet from website storege from first to delet data from localsotarge
  displayData();
}
function serechProduct(){
    var term= serechItems.value;
    var items=``
    for (var i = 0; i < allProduct.length; i++) {
        if (allProduct[i].Name.toLowerCase().includes(term.toLowerCase()) == true) {
    items += `
    <tr>
    <td>${allProduct[i].Name}</td>
    <td>${allProduct[i].price}</td>
    <td>${allProduct[i].categry}</td>
    <td>${allProduct[i].desc}</td>
    <td><button class="btn btn-success">Update</button></td>
    <td><button onclick="deletdata(${i}) " class="btn btn-success">delet</button></td>
    </tr>
     `;
}
}
document.getElementById("tablebody").innerHTML = items;
}
function setDate(indx) {
    idexforUpdate=indx;
    var data=allProduct[indx];
    productNameInput.value=data.Name;
    productPriceInput.value=data.price;
    productCatergryInput.value=data.categry;
    productDescriptionInput.value=data.desc;
 

    addproduct.classList.add("d-none")
    updateproduct.classList.remove("d-none")
}

function updatfun(){
    var product = {
    Name: productNameInput.value,
    price: productPriceInput.value,
    categry: productCatergryInput.value,
    desc: productDescriptionInput.value,
  };
  allProduct.splice(idexforUpdate,1,product);
  localStorage.setItem("allProduct", JSON.stringify(allProduct));
  displayData();
  addproduct.classList.remove("d-none");
updateproduct.classList.add("d-none");
}



function vailditionName(){
    var massageName=document.getElementById("NameInput");
    var regexName=/^[A-Z][a-z]{3,8}$/
    var text=productNameInput.value;
    if(regexName.test(text)==true){
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid")
        massageName.classList.add("d-none")
        return true
    }
    else{
        productNameInput.classList.add("is-invaild")
        productNameInput.classList.remove("is-vaild")
        massageName.classList.remove("d-none")
        return false
       

    }

    
} 
function vailditionPrice(){
    var massageprice=document.getElementById("PriceInput");
    var regexName=/^[1-9]{3,5}$/
    var text=productPriceInput.value;
    if(regexName.test(text)==true){
        productPriceInput.classList.add("is-valid");
        productPriceInput.classList.remove("is-invalid")
        massageprice.classList.add("d-none")
        return true
    }
    else{
        productPriceInput.classList.add("is-invaild")
        productPriceInput.classList.remove("is-vaild")
        massageprice.classList.remove("d-none")
        return false
       

    }

    
} 
function vailditioncategry(){
    var massagecategry=document.getElementById("categryInput");
    var regexName=/^[a-z]{3,10}$/
    var text=productCatergryInput.value;
    if(regexName.test(text)==true){
        productCatergryInput.classList.add("is-valid");
        productCatergryInput.classList.remove("is-invalid")
        massagecategry.classList.add("d-none")
      
        return true
    }
    else{
        productCatergryInput.classList.add("is-invaild")
        productCatergryInput.classList.remove("is-vaild")
        massagecategry.classList.remove("d-none")
        return false
       

    }

    
} 
function vailditiondesc(){
    var massagedesc=document.getElementById("descInput");
    var regexName=/^[a-z]{3,30}$/
    var text=productDescriptionInput.value;
    if(regexName.test(text)==true){
        productDescriptionInput.classList.add("is-valid");
        productDescriptionInput.classList.remove("is-invalid")
        massagedesc.classList.add("d-none")
      
        return true
    }
    else{
        productDescriptionInput.classList.add("is-invaild")
        productDescriptionInput.classList.remove("is-vaild")
        massagedesc.classList.remove("d-none")
        return false
       

    }

    
} 

