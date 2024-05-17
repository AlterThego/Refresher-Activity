const data = [
    {
        education: `
            <p class="text-cyan-400 font-bold">searching database. </p>
            <p class="text-cyan-400 font-bold">preparing for knowledge injection.  </p>
            <p class="text-green-500 font-bold">ready for access. </p>
            >> database\\U2FsdGVkX19/+CTHVXZa+qkPvgMB9GgZ\\Education: <br>&nbsp[<br> 
            &nbsp&nbsp--nursery-school: Baguio Cathedral Nursery School; <br> 
            &nbsp&nbsp--elementary: Saint Louis School (Center), ED; <br> 
            &nbsp&nbsp--high-school: Saint Louis School (Center), HD; <br> 
            &nbsp&nbsp--senior-high-school: Saint Louis School (Center), HD; <br> 
            &nbsp&nbsp--college-br: University of Cordilleras, Inc.<br> 
            <p class="text-yellow-500 text-center font-bold">Data compilation successful.</p> ]`
    },
    {
        experience: `C:\\User\\U2FsdGVkX19/+CTHVXZa+qkPvgMB9GgZ\\Experience: <br>&nbsp[<br> 
            &nbsp&nbsp--nursery-school: Baguio Cathedral Nursery School; <br> 
            &nbsp&nbsp--elementary: Saint Louis School (Center), ED; <br> 
            &nbsp&nbsp--high-school: Saint Louis School (Center), HD; <br> 
            &nbsp&nbsp--senior-high-school: Saint Louis School (Center), HD; <br> 
            &nbsp&nbsp--college-br: University of Cordilleras, Inc.<br> 
            <p class="text-yellow-500 text-center font-bold">RENDERING COMPLETE!</p>]`
    },
    {
        skills: `C:\\User\\Theodore\\Skills: [<br> 
            --programming-languages: JavaScript, PHP, HTML, CSS, SAP ABAP<br> 
            --frameworks-Libraries: Laravel, Node.js<br> 
            --databases: MySQL, SQLite<br> 
            --tools: Git, Visual Studio Code, Github, Composer<br> 
            --soft-skills: Problem-solving, Critical Thinking, Communication<br> 
            <p class="text-yellow-500 text-center font-bold">RENDERING COMPLETE!</p>]`
    },
    {
        projects: `C:\\User\\Theodore\\Projects: [<br> 
            --personal-portfolio Website<br> 
            --socio-economic-profile-of-benguet<br>
            <p class="text-yellow-500 text-center font-bold">RENDERING COMPLETE!</p> ]`
    }
];

const allElements = document.getElementsByClassName("typeing");
const element = document.getElementById("AboutDevTypeText");

let currentContent = ">>> start by pressing any of the buttons...";
let i = 0, isTag, text;

(function type() {
    if (i === currentContent.length) {
        return;
    }

    text = currentContent.slice(0, i) + (i === currentContent.length - 1 ? currentContent.charAt(i) : '');
    element.innerHTML = text + `<span class='blinker'>&#32;</span>`;

    const char = text.slice(-1);
    if (char === "<") isTag = true;
    if (char === ">") isTag = false;

    if (isTag) {
        i++;
        return type();
    }

    i++;
    setTimeout(type, 10);
})();

document.querySelectorAll(".btn").forEach((button, index) => {
    button.addEventListener("click", function () {
        const section = this.dataset.section;
        const content = data[index][section] || "";

        currentContent = content;
        i = 0;
        element.innerHTML = "";

        (function type() {
            if (i === currentContent.length) {
                return;
            }

            text = currentContent.slice(0, i) + (i === currentContent.length - 1 ? currentContent.charAt(i) : '');
            element.innerHTML = text + `<span class='blinker'>&#32;</span>`;

            const char = text.slice(-1);
            if (char === "<") isTag = true;
            if (char === ">") isTag = false;

            if (isTag) {
                i++;
                return type();
            }

            i++;
            setTimeout(type, 10);
        })();
    });
});