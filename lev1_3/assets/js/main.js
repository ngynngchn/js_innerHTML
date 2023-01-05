const gallery = document.getElementById("gallery");

gallery.innerHTML +=
  '<figure><img width ="100%" src="./assets/img/harboer.avif" alt="Harbor"><figcaption>Fig. 1</figcaption></figure>' +
  '<figure><img width ="100%" src="./assets/img/harboer.avif" alt="Harbor"><figcaption>Fig. 2</figcaption></figure>' +
  '<figure><img width ="100%" src="./assets/img/harboer.avif" alt="Harbor"><figcaption>Fig. 3</figcaption></figure>';

gallery.style.display = "flex";
