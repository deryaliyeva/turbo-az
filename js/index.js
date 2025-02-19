const content = document.getElementById('content');
const duyme = document.getElementById('duyme');
const markalarArr = Array.from(new Set(data.map(item => item.brand)));
const modellerArr = Array.from(new Set(data.map(item => item.model)));
const seherlerArr = Array.from(new Set(data.map(item => item.city)));
const banTypeArr = Array.from(new Set(data.map(item => item.banType)));
const currencyArr = Array.from(new Set(data.map(item => item.currency)));
const yearArr = Array.from(new Set(data.map(item => item.year)));
const maksArr = Array.from(new Set(data.map(item => item.year)));

let dilim = 8;

        function show(){
        content.innerHTML = "";
        data
        .slice(0, dilim)
        .map((item, i) => {
          content.innerHTML += `<article class="flex flex-col rounded-md bg-white">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img id="imgs" alt="" class="object-cover max-h-[150px] rounded-md h-52 w-full dark:bg-gray-500"
                                src="${item.images}"/>
                        </a>
                        <div class="flex flex-col flex-1 p-6">
                            <a class="font-bold" rel="noopener noreferrer" href="#"
                                aria-label="Te nulla oportere reprimique his dolorum">${item.brand} ${item.model}</a>
                            <a rel="noopener noreferrer" href="#"
                                class="text-lg uppercase"></a>
                            <h3>${item.price} ${item.currency}</h3>
                            <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
                                <span>${item.year} ${item.city}</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </article>`;
        })
        }
        show();

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

      // const mininp = document.getElementById('mininp');
      // const maksinp = document.getElementById('maksinp');
      
      // function go(){
      //   data.filter((item, i) => {
      //     if(+mininp.value >= 2005 && +maksinp.value <= 2019){
      //       content.innerHTML += `<article class="flex flex-col rounded-md bg-white">
      //                   <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
      //                       <img id="imgs" alt="" class="object-cover max-h-[150px] rounded-md h-52 w-full dark:bg-gray-500"
      //                           src="${item.images}"/>
      //                   </a>
      //                   <div class="flex flex-col flex-1 p-6">
      //                       <a class="font-bold" rel="noopener noreferrer" href="#"
      //                           aria-label="Te nulla oportere reprimique his dolorum">${item.brand} ${item.model}</a>
      //                       <a rel="noopener noreferrer" href="#"
      //                           class="text-lg uppercase"></a>
      //                       <h3>${item.price} ${item.currency}</h3>
      //                       <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
      //                           <span>${item.year} ${item.city}</span>
      //                           <span>2.1K views</span>
      //                       </div>
      //                   </div>
      //               </article>`;
      //     }

      //   })
      // }



    