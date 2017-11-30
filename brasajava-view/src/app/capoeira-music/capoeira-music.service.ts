import { Injectable } from '@angular/core';
import { CapoeiraMusic } from './capoeira-music';
import { MusicPart} from './capoeira-music-part';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable()
export class CapoeiraMusicService {
    private _musics = new Array<CapoeiraMusic>();
    serviceMusics = new Array<CapoeiraMusic>();

    constructor(private http: HttpClient) {  }

    getFromService() {
        this.http.get<CapoeiraMusic[]>('http://jsonplaceholder.typicode.com/posts').subscribe(
            musics => {
                musics.forEach(m => {console.log(m.name); });
            },
            err => {
                console.log('Error occured.');
             });
    }
    getSpring(): CapoeiraMusic[] {
        let result: CapoeiraMusic[];
        this.http.get<CapoeiraMusic[]>('http://localhost:8080/public/capoeira/music', {
            headers: { 'Content-Type': 'application/json', 'Access-Control-Request-Method' : 'GET', 'Content-Length': '20'},
            params: {}
            }).subscribe(
            musics => {
                console.log(musics);
                result = musics;
            },
            err => {
                console.log('Error occured.');
             });
             return result;
    }

    get musics(): CapoeiraMusic[] {
        const lemba = new CapoeiraMusic();
                    lemba.capoeiraMusicId = 1,
                    lemba.name = 'História de Lemba';
                    lemba.tags = ['Lemba', 'Ciúmes'];
                    lemba.musicPartSequence = [1, 2, 3, 4];
                    lemba.author = 'Boa Voz';
                    lemba.observations = 'Realmente Boa Voz não é o autor dessa musica, mas na minha opinião, é o melhor interprete';
                    lemba.musicParts = [
                        new MusicPart(1, 'Historia de Lemba Lemba eu LembaHistória de Lemba Lemba eu Lemba'),
                        new MusicPart(2, 'Lemba fora mal tratadocomo era de custumeo feitor matou ser Lembapor causa do seu ciumes'),
                        new MusicPart(3, 'Arrancaran sua linguatiraram a pele do negrolhe deram um banho de mele jogaron al formiguero'),
                        new MusicPart(4, 'Os antigos comentavamnão me canso de lembrarno terrero de dona Analemba foi ressucitar')
                        ];
        const music1 = new CapoeiraMusic();
        music1.capoeiraMusicId = 1,
                    music1.name = 'História de Lemba';
                    music1.tags = ['Lemba', 'Ciúmes'];
                    music1.musicPartSequence = [4, 3, 2, 1];
                    music1.author = 'Boa Voz';
                    music1.observations = 'Realmente Boa Voz não é o autor dessa musica, mas na minha opinião, é o melhor interprete';
                    music1.musicParts = [
                        new MusicPart(1, 'Historia de Lemba Lemba eu LembaHistória de Lemba Lemba eu Lemba'),
                        new MusicPart(2, 'Lemba fora mal tratadocomo era de custumeo feitor matou ser Lembapor causa do seu ciumes'),
                        new MusicPart(3, 'Arrancaran sua linguatiraram a pele do negrolhe deram um banho de mele jogaron al formiguero'),
                        new MusicPart(4, 'Os antigos comentavamnão me canso de lembrarno terrero de dona Analemba foi ressucitar')
                        ];
      this._musics = [lemba, music1];
        return this._musics;
    }

}
