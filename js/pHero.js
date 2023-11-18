const displayNav = (category_id=1000) =>{
    const headerSection =document.getElementById('header-section');
    headerSection.innerHTML='';
    
    headerSection.innerHTML = 
    `
    <div class="flex flex-col md:flex-row justify-center md:justify-between ">
            <img class="max-w-[165px] mx-auto md:mx-0 max-h-10"  src="./images/Logo.png" alt="logo">
            <button onclick="displayItems(true,${category_id},1000)" class="btn mt-4 md:mt-0 mx-auto md:mx-0 text-lg font-medium">Sort by view</button>
            <a href="blog.html" class="btn px-10   mt-4 md:mt-0 mx-auto md:mx-0 text-lg font-medium bg-[#FF1F3D] text-white">Blog</a>
        </div>
    `
   
}


const handleCategories =async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    console.log(categories)

   
    const categoryContainer = document.getElementById('category-container')
    
    categories.forEach(category => { 
        const singleCategory = document.createElement('div');
        singleCategory.classList=`flex justify-center`
        singleCategory.innerHTML= 
        `<button onclick="displayItems(false,${category.category_id});displayNav(${category.category_id})" class="btn text-base font-medium">${category.category}</button>
        `
        categoryContainer.appendChild(singleCategory)
        
    });

    // displayItems(categories.category_id)
} 

const displayItems = async (isSorted=false,category_id) =>{
    
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${category_id}`);
    const data = await res.json();
    const items = data.data ;
    console.log( isSorted,category_id ,items)

    


    // sorting if sort by button is clicked 
    if(isSorted==true){
        items.sort((a,b)=>{  //here sorting is done and sliced till previous last latter because last latter contains k like 44k
            return b.others.views.slice(0,(b?.others?.views?.length-1)) - a.others.views.slice(0,a.others.views.length-1);
            
        }
         );
    }
// end of sorting 
//    if it has no data 
// if categories has no data 

if(items.length==0){
   
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML='';

    const nothing = document.getElementById('nothing-div');
    nothing.innerHTML='';
    const nothingDiv = document.createElement('div');
    
    nothingDiv.innerHTML=

    
    `
    <div class="flex flex-col my-10 md:my-40 justify-center items-center gap-8">
        <img class="w-[140px] h-[140px]" src="./images/Icon.png" alt="No Data">
        <h2 class=" text-2xl font-bold text-center">Oops!! Sorry, There is no <br>content here</h2>
    </div>
    
    `;
    nothing.appendChild(nothingDiv);
}
else{

    // adding card 
    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML='';

    // clearing the error  field 
    const nothing = document.getElementById('nothing-div');
    nothing.innerHTML='';

    const verifiedBadge= "/images/fi_10629607.png"

    items.forEach(item => {
         // time calculation 
         
         let timeString='';

         if(item.others?.posted_date){
            let seconds = item.others.posted_date;
            let year = Math.floor(seconds/31536000);
            let month = Math.floor((seconds%31536000)/2628000);
            let day = Math.floor((seconds%31536000)%2628000/ 86400);
            let hour = Math.floor((((seconds % 31536000) % 2628000) % 86400)/3600);
            let minute = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60);
             if(year==0){
                if(month==0){
                    if(day==0){
                        if(hour==0){
                            if(minute==0){
                                timeString=seconds+"sec ago ";
                            }else{timeString=minute+"min "+seconds+"sec ago "}
                        }else{timeString=hour+"hrs "+minute+" min ago "}
                    }else{timeString=day+"days "+hour+" hrs ago"}
                }
                else{timeString= month+"mths "+day+" days ago"}
             }
             else{
                timeString= year+"yrs "+month+" mths ago "
             }
         }
    
        const itemCard = document.createElement('div');
        itemCard.classList= `flex justify-center`
        itemCard.innerHTML= 
        `
        <div class="card  max-w-[312px]">
                    <figure>
                        <div class="relative">
                            <img class="w-[312px] h-[200px] object-cover" src="${item?.thumbnail}" alt="Shoes" />
                                <span class=" absolute  bg-black rounded-[2px] text-white  text-xs right-4 bottom-4 "><span>${item.others?.posted_date ? timeString : ""}</span></span>
                        </div>
                    </figure>
                    
                      <div class="flex gap-3 mt-5">
                        <div>
                            <img class="w-[40px] h-[40px] rounded-full" src="${item?.authors[0]?.profile_picture}" alt="">
                        </div>
                        <div>
                            <div>
                                <h2 class="text-base font-bold">${item?.title}</h2>
                            </div>
                            <div class="flex gap-2 items-center mt-2">
                                <div><p class=" text-sm text-[#171717b3]">${item?.authors[0]?.profile_name}</p></div>
                               <div> <img class="" src="${item.authors[0]?.verified ? verifiedBadge : "no"}" alt=""></div>
                            </div>
                            <div class="mt-2">
                                <p class=" text-sm text-[#171717b3] "><span >${item?.others?.views}</span> views</p>
                            </div>
                          </div>
                      </div>
                   
                  </div>
        `;
        itemsContainer.appendChild(itemCard);
    })

}
}







displayNav();
handleCategories();
displayItems(false,"1000")
