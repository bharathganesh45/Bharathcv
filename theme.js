const themes = document.getElementsByClassName("theme");

Array.from(themes).forEach((theme) => {
    theme.addEventListener("click", (e) => {
        document
            .querySelector("body")
            .setAttribute("data-theme", e.target.dataset.theme);
            localStorage.setItem("theme", e.target.dataset.theme);
      });
    });

    function getThemeOnload(){
       const theme = localStorage.getItem("theme");

       if (theme) {
        document.querySelector("body").setAttribute("data-theme" , theme);
       }
    }


    getThemeOnload();




