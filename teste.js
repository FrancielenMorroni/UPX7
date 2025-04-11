const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = fruits.indexOf("Appleeeeeeeeee");
console.log(index)


if (emailsCadastrados.indexOf(email) == -1 && emailsCadastrados.indexOf(email) != 0) {
    console.log(emailsCadastrados);
    console.log(email);
    console.log(emailsCadastrados.indexOf(email))
    alert('Email ja cadastrado! Verifique os dados digitados.');
    emailsCadastrados.pop();   // Deleta o e-mail recém cadastrado em duplicidade
}
