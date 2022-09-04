//
// Anthony Allen - Week 5 Coding Assignment
//
class Job { 
    constructor(job, weapon) {
        this.job = job;
        this.weapon = weapon;
    }
    describe() {
        return `${this.job} requires ${this.weapon}`;
    }
}
class jobClass { 
    constructor(job) {
        this.job = this.job;
        this.job = [];
    }
    addJob(job) {
        if (job instanceof Job) {
            this.job.push(job);
        } else {
            throw new Error(`You are required to be this level beforehand.  
            This argument is not the job class: ${job}`);
        }
    }
    describe() {
        if (this.job.length == 1) {
            return `${this.job} uses ${this.job.length} weapon.`;
        }  else {
            return `${this.job} uses ${this.job.length} weapon.`;
        }
    }
}
class Menu { 
    constructor() {
        this.job = []; 
        this.selectedJob = null; 
    }
    start() { 
        let selection = this.showMainMenuOptions(); 
        while (selection != 0) {
            switch(selection) {
                case '1' :
                    this.createJob();
                    break;
                case '2' :
                    this.viewJob();
                    break;
                case '3' :
                    this.deleteJob();
                    break;
                case '4' :
                    this.displayJob();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('What job class will you play next?!');
    }
    showMainMenuOptions() {
        return prompt(`       
        Job Class Menu:
        ------------------------------------
            0) Exit
            1) Create A New Job Class
            2) View A Job Class
            3) Delete A Job Class
            4) Display All Classes
        ------------------------------------
            `);
    }
    showJobMenuOptions(JobInfo) {
        return prompt(`
        Primary Job Class Menu:
        ------------------------------------
            0) Return to Job Class Main Menu
            1) Add A New Job Class
            2) Delete A Job Class
        ------------------------------------
            \t${JobInfo}
        `);
    }
    displayJob() {
        let jobString = '';
        for (let i = 0; i < this.job.length; i++) {
            jobString += i+ ') ' + this.job[i].describe() + '\n';
        }
        alert("All Job Classes:\n"+ jobString);
    }
    createJobClass() {
        let name = prompt('Enter the name of desired Job Class: ');
        this.job.push(new JobClass(name, weapon));
        console.log("Created A New Job Class!")
    }
    viewJob() {
        let index = prompt("Enter the index of the Job Class you want to view:");
        if (index > -1  && index < this.job.length) {
            this.selectedJob = this.job[index];
            console.log(`Chosen job class: ${this.selectedJob.describe()}`);
            var newSelect1 = 0;
            do {
                let description = "\n Job Name: " + this.selectedJob.name + "\n";
                if (this.selectedJob.job.length >0) {
                    description += "\tJob Class:\n";
                }
                for (let i = 0; i < this.selectedJob.job.length; i++) {
                    console.log(this.selectedJob.describe());
                   description +=  `\t\t  ${i})  ${this.selectedJob.job[i].describe()} \n`; 
                }
            
           
                var selection1 = this.showJobMenuOptions(description);
                if (selection1 >= 0 && selection1 <=2 ) {
                    switch (selection1) {
                        case '1' : 
                            this.createJobClass();
                            break;
                        case '2' :
                            this.deleteJobClass();
                    }
                } else {
                    console.log("Wrong Job Class!");
                }    
                newSelect1 = selection1;
            } while (newSelect1 != 0);    

        } else {
            throw new Error(`Index: ${index} is an invalid Jobs index!`);
            console.log(`Index: ${index} is an invalid Jobs index!`);
            alert(`Index: ${index} is an invalid Jobs index!`);
        }  
    }

    deleteJob() {
        let index = prompt('Enter the index of the Job Class that you wish to delete: ');
        if (index > -1  && index < this.job.length) {
            this.job.splice(index,1);
        }  else {
            throw new Error(`Index: ${index} is an invalid Jobs index!`);
        }  
        console.log("Job Class has been deleted!")
    }
    createWeapon() {
        let name = prompt('Enter weapon for given job class: ');
        let section = prompt('Enter wepon for new job class: ');
        this.selectedWeapon.weapon.push(new Weapon(job, weapon));
        console.log(this.selectedWeapon.describe() + "\n\tWeapon has been created!")
    }
    deleteWeapon() {
        let index = prompt('Enter the index of the weapon that you wish to delete: ');
        if (index > -1 && index < this.selectedWeapon.weapon.length) {
            this.selectedWeapon.weapon.splice(index,1);
        } else {
            throw new Error(`Index: ${index} is an invalid Weapon index!`);
        }
        console.log(this.selectedJob.describe() + "\n\tWeapon has been deleted!")
    }
}
let menu = new Menu();
menu.start();