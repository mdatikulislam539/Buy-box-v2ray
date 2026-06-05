function copyText(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text)
      .then(function () {
        showToast("Copied: " + text);
      })
      .catch(function () {
        fallbackCopy(text);
      });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);

  showToast("Copied: " + text);
}

function showToast(message) {
  const toast = document.getElementById("toast");

  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(function () {
    toast.classList.remove("show");
  }, 2200);
}

const installBtn = document.getElementById("installBtn");

if (installBtn) {
  installBtn.addEventListener("click", function () {
    showToast("APK download started...");
  });
}