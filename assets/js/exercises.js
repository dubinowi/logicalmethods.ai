document.addEventListener('DOMContentLoaded', function () {
  const rules = [
    {
      className: 'homework',
      iconClass: 'bi bi-house-gear-fill',
      colorClass: 'text-danger'
    },
    // {
    //   className: 'discussion',
    //   iconClass: 'bi bi-chat-dots-fill',
    //   colorClass: 'text-success'
    // },
    // {
    //   className: 'research',
    //   iconClass: 'bi bi-search-heart-fill',
    //   colorClass: 'text-warning'
    // },
    // {
    //   className: 'application',
    //   iconClass: 'bi bi-gear',
    //   colorClass: 'text-warning'
    // },
    // Add more rules here as needed
    ];

  rules.forEach(rule => {
    const headers = document.querySelectorAll(`h5.${rule.className}`);
    headers.forEach(header => {
      const space = document.createTextNode('\u00A0'); // Non-breaking space
      const icon = document.createElement('i');
      icon.className = `${rule.iconClass} ${rule.colorClass}`;
      header.appendChild(space); // Insert a non-breaking space
      header.appendChild(icon);  // Insert the icon after the space
    });
  });


    rules.forEach(rule => {
        const headers = document.querySelectorAll(`h6.${rule.className}`);
        headers.forEach(header => {
            const space = document.createTextNode('\u00A0'); // Non-breaking space
            const icon = document.createElement('i');
            icon.className = `${rule.iconClass} ${rule.colorClass}`;
            header.appendChild(space); // Insert a non-breaking space
            header.appendChild(icon);  // Insert the icon after the space
        });
    });
});

function showPasswordModal(solutionId,tutorialId) {

  var targetElement = document.getElementById(solutionId);

  if (targetElement.classList.contains('show')) {
    var collapseElement = new bootstrap.Collapse(targetElement, {
      toggle: false
    });
    collapseElement.hide();
  } else {
    var passwordModal = new bootstrap.Modal(document.getElementById('passwordModal'));
    var submitButton = document.getElementById('passwordSubmitButton');
    submitButton.onclick = function() {
      checkPassword(solutionId, tutorialId);
    };

    passwordInput.onkeydown = function(event) {
      if (event.key === 'Enter') {
        checkPassword(solutionId, tutorialId);
      }
    };

    passwordModal.show();
  }
}

function checkPassword(solutionId,tutorialId) {
  var correctPassword = passwords[tutorialId];
  var userPassword = document.getElementById('passwordInput').value;
  var targetElement = document.getElementById(solutionId);

  if (userPassword === correctPassword) {
    var collapseElement = new bootstrap.Collapse(targetElement, {
      toggle: false
    });
    collapseElement.show();

    var passwordModal = bootstrap.Modal.getInstance(document.getElementById('passwordModal'));
    passwordModal.hide();
  } else {
    alert("Incorrect password!");
  }
}

const passwords = {
  "exc-laa": "logicROCKS!",
  // Add more solutionId: password pairs here
};
