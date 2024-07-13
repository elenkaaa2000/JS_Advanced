class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`
        } else {
            this.goals[peak] = altitude
            return `You have successfully added a new goal - ${peak}`
        }
    }
    hike(peak, time, difficultyLevel) {
        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`)
        } else {
            if (this.resources === 0) {
                throw new Error("You don't have enough resources to start the hike")
            } else {
                let difference = this.resources - (time * 10);
                if (difference < 0) {
                    return "You don't have enough resources to complete the hike"
                } else {
                    this.resources -= time * 10
                    this.listOfHikes.push({ peak, time, difficultyLevel })
                    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
                }
            }
        }
    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`

    }

    showRecord(criteria) {


        if (criteria === 'all') {
            let result = `All hiking records:\n`
            this.listOfHikes.map(p => {
                result += `${this.username} hiked ${p.peak} for ${p.time} hours\n`
            })

            return result.trim()
        } else if (criteria === "hard" || criteria === "easy") {
            let allHikes = this.listOfHikes.filter(
                (hike) => hike.difficultyLevel === criteria
            );
            let sortedHikes = allHikes.sort((a, b) => a.time - b.time);
            let bestHike = sortedHikes[0];

            if (bestHike === undefined) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        }
    }
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));


