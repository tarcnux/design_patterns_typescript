// https://www.typescriptlang.org/
// Padrão Estrutural Facade (Fachada) https://refactoring.guru/pt-br/design-patterns/facade
// Curso Udemy <https://www.udemy.com/course/design-patterns-em-typescript/>

class ParseHTMML {
    private filePath: string;
    private htmlBuffer: string;

    constructor(filePath: string) {
        this.filePath = filePath;
        this.htmlBuffer = '';
    }

    public getHTMLFileFromPath() {
        console.log(`Pegando o arquivo ${this.filePath} HTML do caminho indicado.`);
        return this;
    }

    public parseHTML() {
        console.log(`Parsenado o arquivo HTML ${this.filePath}`)
        return this.htmlBuffer;
    }
}

class HTMLToPDFConverter {
     private htmlBuffer: string;

     constructor(htmlBuffer: string) {
         this.htmlBuffer = htmlBuffer;
     }

     public convert() {
         console.log('Arquivo convertido com sucesso');
         return this.htmlBuffer;
     }
}

//Fachada
class ConverteFacade {
    public convert(htmlPath: string) {
        const parseHTML = new ParseHTMML(htmlPath);
        const htmlBuffer = parseHTML
            .getHTMLFileFromPath()
            .parseHTML();
        
        const htmlToPdfConverter = new HTMLToPDFConverter(htmlBuffer);

        return htmlToPdfConverter.convert();
    }
}
//Uso da Fachada
function clientCode() {
    const converter = new ConverteFacade();
    converter.convert('caminho/arquivo/html/index.html');
}

clientCode();
  
