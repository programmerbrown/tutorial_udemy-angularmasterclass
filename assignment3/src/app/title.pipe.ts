import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'movietitle'
})
export class TitlePipe implements PipeTransform {
    transform(value: string): string {
        /*
        * A list of words that I want to be lower case in the 
        * title unless they are the first word.
        */
        let wordList = [
            'of',
            'the',
            'and',
            'to'
        ];
        
        if(!value)
            return "";  // if the value is null return an empty string
        else {
            /*
            * Goal: Walk through the list of words
            * generating a regular expression and replace
            * any matches with that word preceded by a whitespace.
            * Notes:
            * - Ex regular expression for the word 'of': /\sof(?=\s|$)/gi
            * - the preceding whitespace character lets us know if the
            *   word is the first word in the title or not. 
            */
            wordList.forEach(function(word) {
                let re = '\\s' + word + '(?=\\s|$)';
                let regExp = new RegExp(re, "gi");
                value = value.replace(regExp, " "+word);
            });
            return value;
        }
    }
}