class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = []

    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        if (!this.possibleArticles.hasOwnProperty(articleModel)) {
            throw new Error("This article model is not included in this gallery!")
        }

        let existArticle = this.listOfArticles.find(a=>a.articleName===articleName && a.articleModel===articleModel);
        if(existArticle){
            existArticle.quantity+=quantity
        } else {
            this.listOfArticles.push({ articleModel, articleName, quantity: quantity })
        }
       
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        let existGuest = this.guests.find(g => g.guestName === guestName)
        if (existGuest) {
            throw new Error(`${existGuest.guestName} has already been invited.`)
        } else {
            let points = 0
            if (personality === 'Vip') {
                points = 500
            } else if (personality === 'Middle') {
                points = 250
            } else {
                points = 50
            }

            this.guests.push({
                guestName,
                points: points,
                purchaseArticle: 0
            })

            return `You have successfully invited ${guestName}!`
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        let existArticle = this.listOfArticles.find(a => a.articleName === articleName && a.articleModel === articleModel);
        if (!existArticle) {
            throw new Error("This article is not found.")
        }

        if (existArticle.quantity === 0) {
            return `The ${existArticle.articleName} is not available.`
        }

        let existGuest = this.guests.find(g => g.guestName === guestName)

        if (!existGuest) {
            return `This guest is not invited.`
        }

        let necessaryPoints = this.possibleArticles[articleModel];
        if (existGuest.points < necessaryPoints) {
            return "You need to more points to purchase the article."
        } else {
            existGuest.points -= necessaryPoints;
            existArticle.quantity -= 1
            existGuest.purchaseArticle += 1
            return `${existGuest.guestName} successfully purchased the article worth ${necessaryPoints} points.`
        }
    }

    showGalleryInfo(criteria) {
        if (criteria === 'article') {
            let result = [];
            result.push("Articles information:");

            this.listOfArticles.map(article => {
                result.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`)
            });

            return result.join('\n')
        } else if (criteria === 'guest') {
            let result = [];
            result.push("Guests information:");
            this.guests.map(g=>{
                result.push(`${g.guestName} - ${g.purchaseArticle}`);

            });

            return result.join('\n')
        }
    }
}
const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));



