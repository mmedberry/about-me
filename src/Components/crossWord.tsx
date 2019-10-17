import React from "react";
import { Grommet, TextInput } from "grommet";
import file from "../Public/dictionary.json";
import { DictionaryEntry } from "../types";
//Thanks to Mr. Dataconverter at https://shancarter.github.io/mr-data-converter/ for converting my .txt into JSON
interface ICrosswordProps {}
interface ICrosswordState {
    wordList?: DictionaryEntry[];
}
export class Crossword extends React.Component<
    ICrosswordProps,
    ICrosswordState
> {
    state: ICrosswordState = {};
    getRandomInt(max: number): number {
        return Math.floor(Math.random() * Math.floor(max));
    }
    getRandomLetter(sourceWord: string): string {
        const randomInt = this.getRandomInt(sourceWord.length);
        return sourceWord.charAt(randomInt);
    }
    getWord(targetLetter?: string): DictionaryEntry {
        const rand = this.getRandomInt(5182);
        const startWord = new DictionaryEntry(file[rand]);
        if (targetLetter) {
            if (startWord.name.includes(targetLetter)) {
                return startWord;
            } else return this.getWord(targetLetter);
        }
        return startWord;
    }
    componentDidMount() {
        let i = 0;
        let result = new Array<DictionaryEntry>();
        let letter;
        while (i < 10) {
            const currentWord = this.getWord(letter);
            result.push(currentWord);
            letter = this.getRandomLetter(currentWord.name);
            i++;
        }
        this.setState({
            wordList: result,
        });
        console.log(result);
    }

    vocabQuiz(element: DictionaryEntry): JSX.Element {
        return (
            <div>
                <TextInput></TextInput>
                {element.definition}
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.wordList
                    ? this.state.wordList!.map(element =>
                          this.vocabQuiz(element)
                      )
                    : undefined}
            </div>
        );
    }
}
