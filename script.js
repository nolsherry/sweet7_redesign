function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

let selectedLocation = "Select Location";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function handleSelect(locationName) {
    console.log(locationName);
    selectedLocation=locationName;
    const btn = document.getElementById('location_btn');
    btn.innerHTML = `${locationName} 
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
            <path d="M12.2692 1.38108L7.05351 6.76258C6.98083 6.83783 6.89446 6.89754 6.79937 6.93828C6.70427 6.97903 6.60231 7 6.49935 7C6.39638 7 6.29442 6.97903 6.19933 6.93828C6.10423 6.89754 6.01787 6.83783 5.94519 6.76258L0.729542 1.38108C0.582569 1.22943 0.5 1.02376 0.5 0.809297C0.5 0.594837 0.582569 0.38916 0.729542 0.237513C0.876515 0.0858668 1.07585 0.000672833 1.2837 0.000672831C1.49155 0.000672828 1.69089 0.0858668 1.83787 0.237513L6.5 5.0479L11.1621 0.236841C11.3091 0.0851945 11.5084 0 11.7163 0C11.9241 0 12.1235 0.0851945 12.2705 0.236841C12.4174 0.388488 12.5 0.594164 12.5 0.808625C12.5 1.02309 12.4174 1.22876 12.2705 1.38041L12.2692 1.38108Z" fill="#7E7E7E"/>
        </svg>`;
    document.getElementById("myDropdown").classList.remove("show");
}


function searchMenu() {
  document.querySelectorAll(".menu-content").forEach(menu => {
    menu.style.display = "none";
  });
  
  const menuToShow = document.getElementById("menu_" + selectedLocation);

  if (menuToShow) {
    menuToShow.style.display = "block";
  } else {
    alert("Error");
  }
}

