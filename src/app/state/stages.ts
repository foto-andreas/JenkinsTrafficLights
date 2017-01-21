import { State } from './state';

export class Stages {

    private job : string;
    private array : Array<State> = new Array<State>()


    constructor() {
    }

    put(state : State) {
        this.array.push(state);
    }

    getStages() {
        return this.array;
    }

    clear() {
        this.array = [];
    }

    setJob(job : string) {
        this.job = job;
    }

    getJob() {
        return this.job;
    }
}