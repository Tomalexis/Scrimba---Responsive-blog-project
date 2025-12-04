import { articles } from './articles.js'

const articlesList = document.getElementById('articles');

function renderList(list) {
    const content = list.map((el) => {
        return `
                <li>
                    <img src="${el.image}" class="article-img">
                    <p>${el.date}</p>
                    <p class="article-title">${el.title}</p>
                    <p>${el.description}</p>
                </li>
        `
    })
    articlesList.innerHTML = content.join('')
}

renderList(articles);