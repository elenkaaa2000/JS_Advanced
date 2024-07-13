class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {
        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`
        } else {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`

        }
    }

    completeness(participantName, condition) {
        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`)
        } else {
            if (condition < 30) {
                throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
            } else {
                let completedCount = Math.floor(condition / 30);
                if (completedCount === 1 || completedCount === 2) {
                    return `${participantName} could only complete ${completedCount} of the disciplines`
                } else {
                    let participantGender = this.participants[participantName];
                    this.listOfFinalists.push({ participantName, participantGender })
                    return `Congratulations, ${participantName} finished the whole competition`
                }
            }
        }
    }
    rewarding(participantName) {
        const participant = this.listOfFinalists.find(p => p.participantName === participantName);
        if (!participant) {
            return `${participantName} is not in the current finalists list`
        }
        return `${participant.participantName} was rewarded with a trophy for his performance`
    }

    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`
        }
        if (criteria !== 'all') {
            const finalistWithCriteria = this.listOfFinalists.find(f => f.participantGender === criteria)
            if (!finalistWithCriteria) {
                return `There are no ${criteria}'s that finished the competition`
            } else {
                return `${finalistWithCriteria.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
            }
        } else {
            let result = [];
            result.push(`List of all ${this.competitionName} finalists:`);
            this.listOfFinalists.map(f => {
                result.push(`${f.participantName}`)
            })

            return result.join('\n')
        }
    }

}
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));




