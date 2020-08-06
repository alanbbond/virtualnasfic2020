let submitted = false;

window.onload = (event) => {
  let coc_checked = false;
  let recording_checked = false;
  let name_entered = false;

  const submit_agreement_btn = document.getElementById("submit-agreement-btn");
  
  const coc_checkbox = document.getElementById("coc-agreement");
  coc_checkbox.addEventListener("change", function (e) {
    coc_checked = e.target.checked;
  });
  
  const recording_checkbox = document.getElementById("recording-agreement");
  recording_checkbox.addEventListener("change", function (e) {
    recording_checked = e.target.checked;
    submit_agreement_btn.disabled = !(coc_checked && recording_checked && name_entered); 
  });
  
  const agreement_name = document.getElementById("agreement-name");
  agreement_name.addEventListener("keyup", function (e) {
    const name = e.target.value;
    name_entered = name.length > 2 && name.includes(" ") && name.slice(-1) != " ";
    if (name_entered) {
      setTimeout(function () {
        const name_checkbox = document.getElementById("agreement-signature");
        name_checkbox.checked = name_entered;
        const valid = (coc_checked && recording_checked && name_entered);
        submit_agreement_btn.disabled = !valid; 
    }, 500);
    }
  });

  // If the user already signed the agreement, display all the content.
  const already_agreed = localStorage.getItem('NASFiC_2020_agreement');
  if (already_agreed) {
    const form = document.getElementById('agreement-form');
    if (form) {
      form.style.display = "none";
    }
    const agreement_container = document.getElementById('agreement-container');
    if (agreement_container) {
      agreement_container.style.display = "none";
    }
    const accesscontainer = document.getElementsByClassName("accesscontrol-container")[0];
    if (accesscontainer) {
      accesscontainer.style.display = "block";
    }
    const accesscontrolnav = document.getElementsByClassName('accesscontrol');
    if (accesscontrolnav) {
      Array.from(accesscontrolnav).forEach((li) => {
        li.style.display = "block";
      })
    }
    const staff_btn = document.getElementsByClassName('reveal-agreement-form-btn')[0];
    if (staff_btn) {
      staff_btn.addEventListener('click', function () {
        if (agreement_container) {
          agreement_container.style.display = "block";
        }
      })
    }
  }

  // Explain Internet Explorer is not supported.
  if (window.document.documentMode) {
    const main = document.getElementsByClassName('main')[0];
    const iesupportmsg = document.createElement('div');
    iesupportmsg.innerText = "We're sorry, but Internet Explorer is not supported."
    main.appendChild(iesupportmsg);
  }

} // end window.onload