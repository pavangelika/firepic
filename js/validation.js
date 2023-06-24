(function () {
    'use strict'
  
    // Получите все формы, к которым мы хотим применить пользовательские стили проверки Bootstrap
  let forms = document.querySelectorAll('.needs-validation')
  
    // Зацикливайтесь на них и предотвращайте отправку
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  else{
        const name = form.querySelector('#idName').value;
        const tel = form.querySelector('#idTel').value;
        const messager = form.querySelector('#idMess').value;
        const what = form.querySelector('#idWhat').value;
        const size = form.querySelector('#idSize').value;
        const date = form.querySelector('#idDate').value;
        const city = form.querySelector('#idCity').value;
        fetch('/receiveForm', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name, tel, messager, what, size, date, city})
        })
        .then(resp => resp.text())
        .then(text => form.querySelector('#success').innerText="Сообщение отправлено!")
        .catch(ex => alert("Упс! Что-то пошло не так... Попробуйте снова! " + error));
        event.preventDefault()
        event.stopPropagation()
  }
          form.classList.add('was-validated')
        }, false)
      })

  })()