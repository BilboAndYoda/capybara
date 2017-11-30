var lis = document.querySelectorAll("li");

lis.forEach(function(li){
	li.addEventListener("mouseover", function(){
		this.classList.toggle('green');
	});

	li.addEventListener("mouseout", function(){
		this.classList.remove('green');
	});

	li.addEventListener("click", function(){
		this.classList.toggle('done');
	})
});
