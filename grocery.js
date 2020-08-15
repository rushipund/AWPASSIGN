

function submit() {
 
    let usergrocery = document.querySelector("#inputid1").value;
  
        const newElement = document
      .querySelector("#refgrocery")
      .cloneNode(true);
    
    newElement.style.visibility = "visible";
    newElement.children[0].innerHTML = usergrocery;
  
    
    const grocerybox = document.querySelector("#gbox");
  
    
    grocerybox.insertBefore(newElement, gbox.firstChild);
  
    
    document.querySelector("#inputid1").value = "";
  }

  function deletegrocery(btnElement) {
    btnElement.parentElement.remove();
  }

  function clr()
  {
    
    document.querySelector("#gbox").remove();
    

    
    
  }