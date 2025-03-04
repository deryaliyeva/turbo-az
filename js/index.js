const content = document.getElementById('content');
const duyme = document.getElementById('duyme');
const markalarArr = Array.from(new Set(data.map(item => item.brand)));
const modellerArr = Array.from(new Set(data.map(item => item.model)));
const seherlerArr = Array.from(new Set(data.map(item => item.city)));
const banTypeArr = Array.from(new Set(data.map(item => item.banType)));
const currencyArr = Array.from(new Set(data.map(item => item.currency)));
const yearArr = Array.from(new Set(data.map(item => item.year)));
const maksArr = Array.from(new Set(data.map(item => item.year)));

const marka = document.getElementById('marka');
const model = document.getElementById('model');
const seher = document.getElementById('seher');
const ban = document.getElementById('ban');
const moneys = document.getElementById('moneys');
const hearts = document.querySelectorAll('#heart');
const years = document.getElementById('years');
const maksi = document.getElementById('maksi');
const heart2 = document.getElementById('heart2');
const openLink = document.getElementById('openLink');
const sidebarDiv = document.getElementById('sidebarDiv');
const main = document.querySelector('#mains');



let dilim = 8;
function show() {
  content.innerHTML = "";
  data
    .slice(0, dilim)
    .map((item, i) => {
      const { id, images, brand, model, banType, odometer, odometerUnit, price, currency, year, engine } = item;
      content.innerHTML += `
          <article onclick="openDetails('${id}', '${images}', '${brand}', '${model}', '${banType}','${odometer}', '${odometerUnit}', '${price}', '${currency}', '${year}', '${engine}')"
          class="flex flex-col rounded-md bg-white group">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum" class="relative">
                       <img alt="car" class="object-cover w-full max-h-42 rounded-[8px_8px_0_0] dark:bg-gray-500"
                                    src="${item.images[0]}" />
                            <span onclick="event.stopPropagation()">
                                  <i onclick="addToWish(event, ${item.id}, ${item.price}, '${item.currency}', '${item.brand}', '${item.model}',  '${item.images[0]}', ${i})" id="heart" class="fa-solid fa-heart ${item.status == false ? 'text-white' : 'text-[#ca1016]'} absolute right-2 top-2 text-[22px] cursor-pointer"></i>
                            </span>
                   <span id="heart2" class="absolute bottom-1 right-2 bg-white rounded-md px-1 text-l opacity-100">
                      👑 💎
                  </span>
              </a>
              <div class="flex flex-col flex-1 p-6">
                  <a class="font-bold" rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                      ${item.brand} ${item.model}
                  </a>
                  <h3>${item.price} ${item.currency}</h3>
                  <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                      <span>${item.year} ${item.city}</span>
                      <span>2.1K views</span>
                  </div>
              </div>
          </article>
      `;
    })
}
show();
function siifirla() {
  data = zapaz;
  show();
}

let basket = JSON.parse(localStorage.getItem("basket")) || []
function addToWish(e, id, price, currency, brand, model, images, index) {
  e.preventDefault();
  data[index].status = true
  const obj = { id, price, currency, brand, model, images, count: 1 };
  const yoxla = basket.find(item => item.id == id)
  if (yoxla == undefined) basket.push(obj)
  else yoxla.count += 1
  show()
  localStorage.setItem("basket", JSON.stringify(basket));
  showBasket()
}

function openDetails(id, images, brand, model, banType, odometer, odometerUnit, price, currency, year, engine) {
  main.innerHTML = "";

  main.innerHTML = `
  <div class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
        <img src="${images}" alt="${brand}" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
        <div class="p-6 space-y-2 lg:col-span-5">
          <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">${brand}, ${model}</h3>
          <span class="text-xs dark:text-gray-600">${year}</span>
          <p>${banType}, ${odometer}, ${odometerUnit}, ${price}, ${currency}</p>
        </div>
  </div> `

}

function showBasket() {
  Closebars.innerHTML = "";
  basket.forEach((item, index) => {
    Closebars.innerHTML += `
          <article class="flex flex-col rounded-md bg-white mt-10">
                        <div class="relative">
                            <img alt="car" class="object-cover w-full h-52 rounded-[8px_8px_0_0] dark:bg-gray-500"
                                src="${item.images}" />
                                <i onclick="deleteBasket(${item.id})"
                                class="fa-solid fa-trash text-[#ca1016] absolute right-2 top-2 text-lg cursor-pointer"></i>
                        </div>
                        <div class="flex flex-col flex-1 p-3">
                        <h3 class="flex-1 pt-2 pb-[2px] text-[18px] font-[700] leading-snug">
                        <button onclick="basketAzalt(${index})">-</button>
                        Say: ${item.count}
                        <button onclick="basketArtir(${index})">+</button></h3>
                            <h3 class="flex-1 pt-2 pb-[2px] text-[18px] font-[700] leading-snug">${item.price} ${item.currency}</h3>
                            <span class="text-[16px] capitalize hover: dark:text-default-600">${item.brand} ${item.model}</span>
                            </div>
                        </div>
                    </article>
            `;
  })
}
showBasket()

function deleteBasket(id) {
  data.find( item => item.id == id).status = false

  const newArr = basket.filter((item, i) => item.id !== id);
  basket = newArr;
  localStorage.setItem("basket", JSON.stringify(newArr))
  showBasket();
  show()

}

function basketAzalt(index) {
  const element = basket[index];
  let say = element.count - 1;
  if (say == 0) {
    deleteBasket(element.id)
  } else {
    element.count = say;
  }
  showBasket()
}

function basketArtir(index) {
  const element = basket[index];
  element.count = element.count + 1;
  showBasket()
}

function deleteAll() {
  basket.length = 0;
  localStorage.removeItem("basket");
  Closebars.innerHTML = "";
  show()
}

function handleSelect() {
  markalarArr.map(item => {
    marka.innerHTML += `<option> ${item} </option>`;
  })
  modellerArr.map(item => {
    model.innerHTML += `<option> ${item} </option>`;
  })
  seherlerArr.map(item => {
    seher.innerHTML += `<option> ${item} </option>`;
  })
  banTypeArr.map(item => {
    ban.innerHTML += `<option> ${item} </option>`;
  })

  currencyArr.map(item => {
    moneys.innerHTML += `<option> ${item} </option>`;
  })
  yearArr.map(item => {
    years.innerHTML += `<option> ${item} </option>`;
  })
  maksArr.map(item => {
    maksi.innerHTML += `<option> ${item} </option>`;
  })
}
handleSelect();

function artir() {
  if (dilim < data.length) {
    dilim += 8;
    show();
  } else {
    duyme.style.display = 'none';
  }
}
artir();

function go(axtaris, select) {
  // e.preventDefault();
  const yeniArr = zapaz.filter(item => item[axtaris] == select.value);
  data = yeniArr;
  show();

}

let flag = false;
function likeOpen() {
  if (!flag) {
    openClose.classList.add("right-0");
    openClose.classList.remove("right-[-100vw]");
  } else {
    openClose.classList.add("right-[-100vw]");
    openClose.classList.remove("right-0");
  }
  flag = !flag;
}




