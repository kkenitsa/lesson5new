var city = 'Lviv';
  city = 'London';
  let userName = 'Ivan';
  const year = 2021;
  function showMessage() {
  let userName = "Oleg";
  let message = 'Hi ' + userName;
  alert(message);
}
  showMessage();
  let message = function(from, text) {
    alert(from + ': ' + text);
  }
  message('Olga', 'Hi,how are you?');
  message('Rostyslav', "how are you. Better than ever");

  let age = prompt("How old are you?", 18);

  let welcome = (age < 18) ?
    () => alert('Hi') :
    () => alert("Hello!");
  
  welcome(); 
