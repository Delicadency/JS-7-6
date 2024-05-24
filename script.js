/* Stwórz funkcję selectItem tworzącą element <select> (użyj document.createElement), o identyfikatorze “level”, który będzie posiadał trzy elementy <option> z atrybutami value z cyframi od 1 do 3 i dodaj go do elementu <body>. Funkcja powinna także zwracać element <select>. Dodaj w środku tej funkcji obsługę zdarzenia change elementu <select>, która po zajściu zdarzenia wywoła funkcję window.alert z wybraną opcją z elementu <select>. a
 */
const selectItem = () => {
  const select = document.createElement("select");
  select.id = "level";
  select.innerHTML = `
  <option value = "1">Poziom 1 </option>
  <option value = "2">Poziom 2</option>
  <option value = "3">Poziom 3</option>`;
  document.body.appendChild(select);
  return select;
};
