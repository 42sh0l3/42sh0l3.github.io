document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            let [name, telephone, email] = [this.elements.name.value, this.elements.telephone.value,
                                            this.elements.email ? this.elements.email.value : undefined];

            let validated = validator.isAlpha(name) && validator.isMobilePhone(telephone) 
                            && email === undefined ? true : validator.isEmail(email);

            if (validated) {
                var xhr = new XMLHttpRequest();

                var params = `name=${encodeURIComponent(name)}&telephone=${encodeURIComponent(telephone)}`;
                if (email !== undefined) {
                    params += `&email=${encodeURIComponent(email)}`;
                }

                if (document.forms['form-1'] === this) {
                    params += `&gender=${encodeURIComponent(this.elements.gender.value)}`;
                    this.elements.career.forEach(checkbox => {
                        if (checkbox.checked) {
                            params += `&career=${encodeURIComponent(checkbox.value)}`;
                        }
                    });
                    params += `&message=${encodeURIComponent(this.elements.message.value)}`;
                }

                xhr.open("GET", '/submit?' + params);
                xhr.onload = () => {
                    if (xhr.status != 200) {
                        alert('Произошла ошибка! Пожалуйста, обновите страницу.');
                    } else {
                        console.log("SUCCESS");
                    }
                };

                xhr.send();
            } else {
                alert("Форма заполнена неверно.");
            }
        });
    });
});