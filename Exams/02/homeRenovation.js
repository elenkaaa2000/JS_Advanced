class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`
        } else {
            this.tasks.push({
                description,
                cost: cost,
                priority: priority
            });
            this.budget -= cost

            return `The task '${description}' has been successfully added to the renovation plan.`
        }
    }

    markTaskAsCompleted(description) {
        const existTask = this.tasks.find(t => t.description === description)
        if (!existTask) {
            throw new Error(`Task '${description}' not found in the renovation plan.`)
        }

        const existTaskIndex = this.tasks.findIndex(t => t.description === description)
        const completedTaskDescription = existTask.description;
        const completedTaskCost = existTask.cost;
        const completedTaskPriority = existTask.priority;

        this.completedTasks.push({
            description: completedTaskDescription,
            cost: completedTaskCost,
            priority: completedTaskPriority
        })

        this.tasks.splice(existTaskIndex, 1);

        return `The task '${existTask.description}' has been successfully completed.`
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return "The priority cannot be zero or negative."
        } else {
            const priorityArray = this.tasks.filter(t => t.priority >= minimalPriority);
            if (priorityArray.length === 0) {
                return `No tasks found with priority ${minimalPriority} or higher.`
            } else {
                return `You have ${priorityArray.length} tasks to prioritize.`
            }
        }
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error("No tasks have been completed yet!")
        }

        let result = [];
        result.push(`Budget left $${this.budget}.`)
        result.push(`You have completed ${this.completedTasks.length} tasks.`);
        result.push("Pending tasks in the renovation plan:");
        this.tasks.map(t=>{
            result.push(`${t.description} - Cost: ${t.cost}, Priority: ${t.priority}`)
        });

        return result.join('\n')
    }

}
const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2));
console.log(renovation.addTask("Install new windows", 5000, 1));
console.log(renovation.markTaskAsCompleted("Paint walls"));
console.log(renovation.renovationSummary());



