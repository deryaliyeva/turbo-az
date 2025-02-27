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
const seher =document.getElementById('seher');
const ban =document.getElementById('ban');
const moneys = document.getElementById('moneys');
const hearts = document.querySelectorAll('#heart');
const years = document.getElementById('years');
const maksi = document.getElementById('maksi');
const heart2 = document.getElementById('heart2');
const openLink = document.getElementById('openLink');




let dilim = 8;

      function show(){
        content.innerHTML = "";
        data
        .slice(0, dilim)
        .map((item, i) => {
          content.innerHTML += `
          <article class="flex flex-col rounded-md bg-white group">
              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum" class="relative">
                       <img alt="car" class="object-cover w-full max-h-42 rounded-[8px_8px_0_0] dark:bg-gray-500"
                                    src="${item.images[0]}" />
                                    <i onclick="addToWish(event, ${item.id}, ${item.price}, '${item.model}', '${item.brand}', '${item.currency}', '${item.images[0]}', ${i})" id="heart" class="fa-solid fa-heart ${item.status == false ? 'text-white' : 'text-[#ca1016]'} absolute right-2 top-2 text-[22px] cursor-pointer"></i>
                            
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


        function siifirla(){
          data = zapaz;
          show();
        }

        const basket = [];
        function addToWish(e, id, price, currency, brand, model, images, index){
          e.preventDefault();
          data[index].status = true
          show()
          const obj = {id, price, currency, brand, model, images, count: 1}
          basket.push(obj)
        
        }

     

        function handleSelect(){
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
      
        function artir(){
          if(dilim < data.length){
            dilim += 8;
            show();
          }else{
           duyme.style.display = 'none';
        }
      }
      artir();

      function go(axtaris, select){
        // e.preventDefault();
        const yeniArr = zapaz.filter(item => item[axtaris] == select.value);
        data = yeniArr;
        show();
        
      }

      let flag = true;
      const openClose = document.getElementById("sidebar");
  
      function likeOpen() {
          openClose.style.right = flag ? "0" : "-100%";
          flag = !flag;
      }
      function closeSidebar() {
        openClose.style.right = "-100%";
        flag = true;
    }

    