/******************** add class card-pick ********************/
$(".card-pick").on("click", function(){
	let cardList = $(".card-pick")
	for (let index = 0; index < cardList.length; index++) {
		$(cardList[index]).removeClass("clicked");
	}
	$(this).addClass("clicked");
});
/********************* add class card-option ********************/
// $(".card-option").on("click", function(){
// 	let cardList = $(".card-option")
// 	for (let index = 0; index < cardList.length; index++) {
// 		$(cardList[index]).removeClass("clicked");
// 	}
// 	$(this).addClass("clicked");
// });
