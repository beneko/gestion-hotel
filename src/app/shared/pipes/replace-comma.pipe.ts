import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replaceComma'
})
export class ReplaceComma implements PipeTransform{
    transform(value: string | null ): string {
        // variable isn't null or undifined
        if(!! value){
            return value.replace(/,/g, '.');
        } else{
            return '';
        }
    }

}