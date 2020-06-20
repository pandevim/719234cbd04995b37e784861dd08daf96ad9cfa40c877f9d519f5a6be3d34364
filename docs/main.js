



document.addEventListener('DOMContentLoaded', () => {
	data.forEach( project => {
		let article = document.createElement("article")
		article.innerHTML = `${project.name}`
		document.body.appendChild(article)
	})
})




