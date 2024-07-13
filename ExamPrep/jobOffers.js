class JobOffers {
    constructor(employee, position) {
        this.employee = employee;
        this.position = position;
        this.jobCandidates = []
    }

    jobApplication(candidates) {
        const names = []
        for (let candidate of candidates) {
            let [name, education, yearExp] = candidate.split('-');
            yearExp = Number(yearExp)
            let foundedName = this.jobCandidates.find(x => x.name == name);
            if (foundedName) {
                if (yearExp > foundedName.yearExperience) {
                    foundedName.yearExperience = yearExp
                }
            } else {
                this.jobCandidates.push({ name, education, yearExperience: yearExp })
            }
        }
        this.jobCandidates.forEach(x => names.push(x.name));
        return `You successfully added candidates: ${names.join(', ')}.`
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience)
        let foundName = this.jobCandidates.find(x => x.name == name);

        if (!foundName) {
            throw new Error(`${name} is not in the candidates list!`)
        } else {
            if (minimalExperience > foundName.yearExperience) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
            } else {
                foundName.yearExperience = 'hired';
                return `Welcome aboard, our newest employee is ${name}.`
            }
        }
    }

    salaryBonus(name) {
        let foundName = this.jobCandidates.find(x => x.name == name);
        if (!foundName) {
            throw new Error(`${name} is not in the candidates list!`)
        } else {
            if (foundName.education === 'Bachelor') {
                return `${name} will sign a contract for ${this.employee}, as ${this.position} with a salary of $50,000 per year!`
            } else if (foundName.education === 'Master') {
                return `${name} will sign a contract for ${this.employee}, as ${this.position} with a salary of $60,000 per year!`

            } else if(foundName.education != 'Master' || foundName.education != 'Bachelor') {
                return `${name} will sign a contract for ${this.employee}, as ${this.position} with a salary of $40,000 per year!`
            }
        }
    }

    candidatesDatabase(){
        if(this.jobCandidates.length == 0){
            throw new Error ("Candidate Database is empty!")
        }else {
            let buff = 'Candidate list:\n'
            let sorted = this.jobCandidates.sort((a,b)=>a.name.localeCompare(b.name))
            sorted.forEach(x=>buff += `${x.name}-${x.yearExperience}\n`);
            return buff.trim()
        }
    }
}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());


