const scriptURL = 'https://script.google.com/macros/s/AKfycbz7gOeSDTJYRrghNeLII1LzGRFpBIufhUlm0q_9i17WhyqdhRJqmRRQJcuQiBBsr0Gu/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})


document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".learn-more-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const service = this.closest(".service");
            const dots = service.querySelector(".dots");
            const moreText = service.querySelector(".more");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                this.innerHTML = "Learn More";
                moreText.style.display = "none";
            } else {
                dots.style.display = "none";
                this.innerHTML = "Show Less";
                moreText.style.display = "inline";
            }
        });
    });
});



let tabLinks = document.getElementsByClassName('tab-links');
let tabContents = document.getElementsByClassName('tab-contents');

function opentab(tabName){
    for (tablink of tabLinks){
        tablink.classList.remove('active-link')         
    }
    for (tabContent of tabContents){
        tabContent.classList.remove('active-tab')         
        event.currentTarget.classList.add('active-link')
        document.getElementById(tabName).classList.add('active-tab')
    }
}


let sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = "0"
}
function closemenu(){
    sidemenu.style.right = "-200px"
}



document.getElementById('showLessBtn').addEventListener('click', function() {
    let additionalProjects = document.querySelector('.additional-projects');
    additionalProjects.style.display = 'none';
    this.style.display = 'none';
    document.getElementById('seeMoreBtn').style.display = 'block';
});

document.getElementById('seeMoreBtn').addEventListener('click', function() {
    let additionalProjects = document.querySelector('.additional-projects');
    additionalProjects.style.display = "grid";
    this.style.display = 'none';
    document.getElementById('showLessBtn').style.display = 'block';

});
