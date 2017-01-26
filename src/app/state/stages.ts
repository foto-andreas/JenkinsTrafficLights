import { State } from './state';

export class Stages {

    private host : string;
    private port : number;
    private path : string;
    private job : string;

    private array : Array<State> = new Array<State>();


    constructor() {
    }

    isConfigured() : boolean {
        return this.host != null && this.port != null && this.job != null;
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

    setHost(host : string) {
        this.host = host;
    }

    getHost() {
        return this.host;
    }

    setPort(port : number) {
        this.port = port;
    }

    getPort() {
        return this.port;
    }

    setPath(path : string) {
        this.path = path;
    }

    getPath() {
        return this.path;
    }

    setJob(job : string) {
        this.job = job;
    }

    getJob() {
        return this.job;
    }

    
}