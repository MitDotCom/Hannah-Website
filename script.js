const imageThumbs = document.getElementById("image-thumbs");

let currentImage = document.getElementById("current-image");

for (let i = 1; i <= 21; i++) {
  let thumb = document.createElement("img");
  thumb.src = "./images/image" + i + ".JPG";
  thumb.alt = "Image " + i;
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);

  thumb.addEventListener("click", function () {
    currentImage.src = this.src;
    currentImage.alt = this.alt;
  });
}
