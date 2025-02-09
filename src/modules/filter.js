import { hotSaleFilter, priceFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";


const filter = () => {
  const minInput = document.getElementById('min');
  const maxInput = document.getElementById('max');
  const checkboxInput = document.getElementById('discount-checkbox');
  const checkboksSpan = document.querySelector('.filter-check_checkmark');
  
  minInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
    });
   
    
  });
  maxInput.addEventListener('input', () => {
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
    });
  });
  
  checkboxInput.addEventListener('change', () => {
    if(checkboxInput.checked) {
      checkboksSpan.classList.add('checked');
    } else {
      checkboksSpan.classList.remove('checked');
    }
    getData().then((data) => {
      renderGoods(priceFilter(hotSaleFilter(data, checkboxInput.checked), minInput.value, maxInput.value));
    });
  });
}

export default filter