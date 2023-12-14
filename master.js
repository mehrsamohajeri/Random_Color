let div2 = document.querySelectorAll("body>div>div")
        div2.forEach((val) => {
            val.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        });
        for (let i = 1; i <= 10; i++) {
            for (let k = 1; k <= 10; k++) {
                document.querySelector(`body>div:nth-of-type(${i})>div:nth-of-type(${k})`).innerText = i * k
            }
        }