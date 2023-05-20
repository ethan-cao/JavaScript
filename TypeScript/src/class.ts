abstract class Organization {
    // 3 types of access modifiers: public, private and protected.
    // by default, class member (property, method) is public
    taxId: string;

    // accessible from child class
    protected name: string;

    // a class that has an abstract method must be abstract class
    abstract describe(this: Organization): void;
}

class Department extends Organization {
    // by default, filed is public, private property can only be accessed in class
    private readonly id: string;  // readonly: marks the entire object immutable
    protected employees: string[];
    static location: string = "US"; // default value

    private revenue: number;
    private cost: number;

    private _profit: number;

    // getter defines a ready-only property, that can be dynamically computed
    // it cannot have parameter
    get profit(): number {
        this._profit = this.revenue - this.cost;
        return this._profit;
    }

    // setter defines write-only property, it requires backing property
    // it must have 1 and only 1 param, it has no return type 
    set profit(value: number) {
        this._profit = value;   
    }

    // property alias set in constructor param is also the class property
    // shorten way to initialize property
    constructor(id: string, name: string, private alias: string) {
        super();

        this.id = id;
        this.name = name;
    }

    // restrict this must be of type Department
    describe(this: Department): void {
        console.log(`Department: ${this.name}`);
    }

    addEmployee(employee: string): void {
        this.employees.push(employee);
    }

    // static method
    static sayWelcome(): void {
        console.log("welcome");
    }
}

// class can only inherit from 1 class
class ITDepartment extends Department {
    private static instance: ITDepartment;
    admins?: string[]; // optional property

    // private constructor
    private constructor(id: string, ...admins: [string]) {
        // super() must be invoked in the very beginning of child constructor
        super(id, "IT", "IT Department");

        this.admins = [...admins];
        this.employees = [...admins];
    }

    // single
    static getInstance() {
        if (ITDepartment.instance === null) {
            ITDepartment.instance = new ITDepartment("1", "Ethan");
        }

        return ITDepartment.instance;
    }
}

const it = ITDepartment.getInstance();
it.profit= 200;   // setter, use it without ()
console.log(it.profit); // getter, use it without ()