// 按壓貓咪
//**************************************
function catdown(obj) {
    obj.src = obj.id + "_inverse.jpg";
}
function catup(obj) {
    obj.src = obj.id + ".jpg";
}
//**************************************

// 選擇,輸入,餵食
//**************************************
// 選所有貓
function radio_all(obj) {
  remove_all_radio(obj);
  remove_animation();
  var all = document.getElementById("all");
  if (all.checked === true) {
    var all_image = document.querySelectorAll("img");
    for (var i = 0; i < all_image.length; i++) {
      all_image[i].style.animation = 'bigger 1s linear 0.1s infinite alternate';
    }
  }
}

// 選單一隻
function radio_name(obj) {
  remove_all_radio(obj);
  remove_animation();
  var img = document.querySelectorAll("#"+obj.value);
  img[0].style.animation = 'bigger 1s linear 0.1s infinite alternate';
}

// 餵食按鈕
function feed() {
  // radio 餵食
  var all_radio = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < all_radio.length; i++) {
    if (all_radio[i].checked === true) {
        var feed_cat = all_radio[i];

        if (feed_cat.id == 'all') {
          var img = document.querySelectorAll("img");
          for (var i = 0; i < img.length; i++) {
            img[i].src = img[i].id + "_inverse.jpg";
          }
        } else {
          var img = document.querySelectorAll("#"+feed_cat.value);
          img[0].src = img[0].id + "_inverse.jpg";
        }
    }
  }

  // 輸入餵食
  var input = document.querySelectorAll('input[type="text"]');
  var img = document.querySelectorAll("." + input[0].value);
  for (var i = 0; i < img.length; i++) {
    img[i].src = img[i].id + "_inverse.jpg";
    img[i].style.animation = 'bigger 1s linear 0.1s infinite alternate';
  }
}
//**************************************

// useful functions
function remove_all_radio(obj) {
  var all_radio = document.querySelectorAll('input[type="radio"]');
  for (var i = 0; i < all_radio.length; i++) {
    all_radio[i].checked = false;
  }
  obj.checked = true;
}
function remove_animation() {
  var all_image = document.querySelectorAll("img");
  for (var i = 0; i < all_image.length; i++) {
    all_image[i].style.animation = '';
  }
}
