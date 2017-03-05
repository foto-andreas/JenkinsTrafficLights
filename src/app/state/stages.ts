import { State } from './state';

export class Stages {

    private baseUrl : string;
    private job : string;
    private stageSelection? : string[];

    private array : Array<State> = new Array<State>();


    constructor() {
    }

    isConfigured() : boolean {
        return this.baseUrl != null && this.job != null;
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

    setBaseUrl(url : string) {
        this.baseUrl = url;
    }

    getBaseUrl() {
        return this.baseUrl;
    }

    setJob(job : string) {
        this.job = job;
    }

    getJob() {
        return this.job;
    }

    setStageSelection(stages : string[]) {
        this.stageSelection = stages;
    }

    isInSelection(name : string) : boolean {
        return this.stageSelection == null || this.stageSelection.indexOf(name) >= 0;
    }
    
}