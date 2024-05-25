const selectItem = () => {
  const select = document.createElement("select");
  select.id = "level";
  select.innerHTML = `
  <option value = "1">Poziom 1 </option>
  <option value = "2">Poziom 2</option>
  <option value = "3">Poziom 3</option>`;
  document.body.appendChild(select);
  select.addEventListener("change", function () {
    window.alert("Wybrano poziom " + select.value);
  });
  return select;
};
console.log(selectItem());
