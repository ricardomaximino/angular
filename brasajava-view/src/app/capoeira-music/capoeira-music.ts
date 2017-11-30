import { MusicPart } from './capoeira-music-part';

export class CapoeiraMusic {
capoeiraMusicId: number;
name: string;
musicParts: MusicPart[];
tags: string[];
musicPartSequence: number[];
author: string;
observations: string;

constructor(capoeiraMusicId?: number, name?: string) {
this.capoeiraMusicId = capoeiraMusicId;
this.name = name;
}

}
