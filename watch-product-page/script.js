const bton = document.getElementsByClassName('bton');

const productImg= document.getElementById('product-img');


bton[0].onclick = function(){
    productImg.src = "/watch-product-page/images/SSCU09B100_li3_ec001.avif"
}

bton[1].onclick = function(){
    productImg.src = "/watch-product-page/images/SSCU09B100_li1_ec001.avif" 
}

bton[2].onclick = function(){
    productImg.src = "/watch-product-page/images/SSCU09B100_li2_ec001.avif" 
}
bton[3].onclick = function(){
    productImg.src = "/watch-product-page/images/SSCU09B100_sa000_er003m.avif" 
}
bton[4].onclick = function(){
    productImg.src = "/watch-product-page/images/SSCU09B100_sa280_er003m.avif" 
}
