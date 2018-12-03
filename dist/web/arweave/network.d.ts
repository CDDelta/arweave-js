import { Api } from "./lib/api";
export interface NetworkInfoInterface {
    hosnetworkt: string;
    version: number;
    release: number;
    height: number;
    current: string;
    blocks: number;
    peers: number;
    queue_length: number;
    node_state_latency: number;
}
export interface PeerList extends Array<string> {
}
export declare class Network {
    private api;
    constructor(api: Api);
    info(): Promise<NetworkInfoInterface>;
    peers(): Promise<PeerList>;
}
