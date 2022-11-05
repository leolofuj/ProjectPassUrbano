import { Pipe } from '@angular/core'

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida {

    transform(texto: string, truncarEm: number, iniciarEm: number): string {

        if(texto.length > truncarEm) {
            return texto.substr(iniciarEm, truncarEm) + ' ... '
        }

        return texto

    }

}