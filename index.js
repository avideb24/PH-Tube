
const loadCetagory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    console.log(data.data)

    // const categories = data.data.map(item => item.category);
    // console.log(categories);

    const categoryContainer = document.getElementById('category-container');

    data.data.forEach((category) => {
        const btn = document.createElement('button');
        btn.innerHTML = `
        <button <a onclick="getCategory('${category.category_id}')" class="btn btn-active">${category.category}</button>
        `;
        categoryContainer.appendChild(btn);
    });


};


const getCategory = async(catagoryId) => {

    const response = await fetch(` https://openapi.programming-hero.com/api/videos/category/${catagoryId}`);
    const data = await response.json();
    // console.log(data.data)
    
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';

    data.data.forEach((video) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div>
                <div class="relative h-44 bg-black rounded-xl">
                    <img src=${video.thumbnail} class="object-fill object-center w-full h-full rounded-xl " alt="">
                </div>
                <div class="flex gap-3 mt-5">
                    <div class="author-image w-8 h-8 rounded-full">
                        <img src=${video.authors[0].profile_picture} class="rounded-full object-cover w-8 h-8 " alt="">
                    </div>
                    <div class="video-details space-y-2">
                        <h1 class="font-bold">${video.title}</h1>
                        <div class="flex items-center justify-start gap-1">
                            <h3 class="text-[13px] font-medium text-[#17171795]">${video.authors[0].profile_name}</h3>
                            <span class="hidden">
                                
                            </span>
                        </div>
                        <p class="text-[13px] font-medium text-[#17171795]">${video.others.views} Views</p>
                    </div>
                </div>
            </div>
        `;
        videoContainer.appendChild(div);
    })

};



loadCetagory();






