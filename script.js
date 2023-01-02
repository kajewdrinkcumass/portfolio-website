var b = 0,text2
var k = 0,text3
var j = 0,text4
var g = 0,text5


text2 = " cd /home/about_me"
text3 = "  ls -a"
text4 = " about_me.txt"
text5 = "  sudo nano about_me.txt"
const terminal = document.querySelector('.terminal');



function typing2() {
  if (b < text2.length) {
    document.getElementById("text2").innerHTML += text2.charAt(b)
    b++
    if (b === 1) {
      setTimeout(typing2, 0)
    } else {
      setTimeout(typing2, 100)
    }
  } else {
    // function is done being executed
    document.getElementById("text3").innerHTML = "kajus@kajuswebsite:/home/about_me$"
    typing3();
  }
}

const observer = new IntersectionObserver((entries) => {
  // If the element is visible on the screen, call the function
  if (entries[0].isIntersecting) {
    typing2();
  }
});

observer.observe(terminal);

function typing3() {
  if (k < text3.length) {
    document.getElementById("text3").innerHTML += text3.charAt(k)
    k++
    if (b === k) {
      setTimeout(typing3, 0)
    } else {
      setTimeout(typing3, 100)
    }
  } else {
    typing4();
  }
}

function typing4() {
  if (j < text4.length) {
    document.getElementById("text4").innerHTML += text4.charAt(j)
    j++
    if (b === k) {
      setTimeout(typing4, 0)
    } else {
      setTimeout(typing4, 0)
    }
  } else {
    // function is done being executed
    document.getElementById("text5").innerHTML = "kajus@kajuswebsite:/home/about_me$"
    typing5();
  }
}

function typing5() {
  if (g < text5.length) {
    document.getElementById("text5").innerHTML += text5.charAt(g)
    g++
    if (b === k) {
      setTimeout(typing5, 0)
    } else {
      setTimeout(typing5, 100)
    }
  }
}
