function takeMe(){
    const createResumeSection = document.getElementById("create-Resume");
    createResumeSection.classList.add('smooth-scroll');
    createResumeSection.scrollIntoView({behavior:'smooth'});
    console.log("script Working");
}

const textarea = document.getElementById('summary');
const workHistory = document.getElementById('workHistory');
function adjustTextareaHeight(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';

    const containerDiv = textarea.closest('.w-full');
    containerDiv.style.height = (textarea.scrollHeight) + 'px';
}

document.getElementById('summary').addEventListener('input', function() {
    adjustTextareaHeight(this);
});
document.getElementById('workHistory').addEventListener('input', function() {
    adjustTextareaHeight(this);
});
document.getElementById('education').addEventListener('input',function(){
    adjustTextareaHeight(this);
});
document.getElementById("skills").addEventListener('input',function(){
    adjustTextareaHeight(this);
})


function generatePDF(){
    const element = document.getElementById("create-Resume");
    var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      console.log(element);
      console.log(window);
    html2pdf().from(element).set(opt).save();
}
