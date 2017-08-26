import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'movietitle'
})
export class TitlePipe implements PipeTransform {
    transform(value: string): string {
        let reToReplaceOf = /(\sof\s|\sof$)/gi;
        let reToReplaceThe = /(\sthe\s|\sthe$)/gi;
        let reToReplaceAnd = /(\sand\s|\sand$)/gi;

        if(!value)
            return "";
        else
            return value.replace(reToReplaceOf, " of")
                         .replace(reToReplaceThe, " the")
                         .replace(reToReplaceAnd, " and");
    }
    
}