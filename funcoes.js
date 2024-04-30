const quizzes = [
    {
        title: "Substantivo",
        text: "Os substantivos são palavras que dão nome a seres, objetos, lugares, sentimentos, entre outros. Podem ser classificados em comuns, próprios, concretos, abstratos simples, composto, primitivo, derivado e coletivos.",
        questions: [
            { question: "Qual é um substantivo próprio?", options: ["Cachorro", "Brasil"], correctAnswer: "Brasil" },
            
            { question: "Qual é um exemplo de substantivo comum simples?", options: ["Cachorro", "Rio", "Montanha"], correctAnswer: "Rio" },

            { question: "Qual é um exemplo de substantivo próprio?", options: ["Cachorro", "Brasil", "Árvore"], correctAnswer: "Brasil" },

            { question: "O que é um substantivo concreto?", options: ["Substantivo que representa algo abstrato", "Substantivo que representa algo tangível"], correctAnswer: "Substantivo que representa algo tangível" },

            { question: "O que é um substantivo abstrato?", options: ["Substantivo que representa algo tangível", "Substantivo que representa algo abstrato"], correctAnswer: "Substantivo que representa algo abstrato" },

            { question: "O que é um substantivo coletivo?", options: ["Substantivo que representa um conjunto de seres ou objetos", "Substantivo que representa algo único"], correctAnswer: "Substantivo que representa um conjunto de seres ou objetos" },

            { question: "Qual é um exemplo de substantivo próprio de lugar?", options: ["Cachorro", "Brasil", "Praça"], correctAnswer: "Brasil" },

            { question: "Qual é um exemplo de substantivo próprio de pessoa?", options: ["Aluno", "Maria", "Gato"], correctAnswer: "Maria" },

            { question: "O que é um substantivo primitivo?", options: ["Substantivo que deriva de outra palavra", "Substantivo que é a origem de outras palavras"], correctAnswer: "Substantivo que é a origem de outras palavras" },

            { question: "O que é um substantivo derivado?", options: ["Substantivo que deriva de outra palavra", "Substantivo que é a origem de outras palavras"], correctAnswer: "Substantivo que deriva de outra palavra" },

            { question: "O que é um substantivo simples?", options: ["Substantivo que possui apenas uma sílaba", "Substantivo formado por apenas um radical"], correctAnswer: "Substantivo formado por apenas um radical" },

            { question: "O que é um substantivo composto?", options: ["Substantivo formado pela união de duas ou mais palavras", "Substantivo que representa algo único"], correctAnswer: "Substantivo formado pela união de duas ou mais palavras" },

            { question: "O que são substantivos comuns de dois gêneros?", options: ["Substantivos que possuem apenas um gênero", "Substantivos que podem ser utilizados no masculino e no feminino sem alteração"], correctAnswer: "Substantivos que podem ser utilizados no masculino e no feminino sem alteração" },

            { question: "O que são substantivos epicenos?", options: ["Substantivos que possuem apenas um gênero", "Substantivos que se referem a seres animados e inanimados, possuindo um único gênero"], correctAnswer: "Substantivos que se referem a seres animados e inanimados, possuindo um único gênero" },

            { question: "O que são substantivos sobrecomuns?", options: ["Substantivos que possuem apenas um gênero", "Substantivos que se referem a seres animados e inanimados, possuindo um único gênero"], correctAnswer: "Substantivos que se referem a seres animados e inanimados, possuindo um único gênero" },

            { question: "O que são substantivos heterônimos?", options: ["Substantivos que possuem apenas um gênero", "Substantivos que se referem a seres animados e inanimados, possuindo dois gêneros diferentes"], correctAnswer: "Substantivos que se referem a seres animados e inanimados, possuindo dois gêneros diferentes" },

            { question: "O que são substantivos uniformes?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o masculino e para o feminino"], correctAnswer: "Substantivos que possuem formas diferentes para o masculino e para o feminino" },

            { question: "O que são substantivos biformes?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o masculino e para o feminino"], correctAnswer: "Substantivos que possuem formas diferentes para o masculino e para o feminino" },

            { question: "Qual é um exemplo de substantivo próprio de animal?", options: ["Flor", "Leão", "Casa"], correctAnswer: "Leão" },

            { question: "O que são substantivos comuns de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos uniformes de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos epicenos de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos biformes de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos sobrecomuns de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos heterônimos de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos coletivos de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos primitivos de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos derivados de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos compostos de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos concretos de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },

            { question: "O que são substantivos abstratos de dois números?", options: ["Substantivos que possuem apenas uma forma", "Substantivos que possuem formas diferentes para o singular e para o plural"], correctAnswer: "Substantivos que possuem formas diferentes para o singular e para o plural" },
        ]
    },
    {
        title: "Verbo",
        text: "Os verbos são palavras que indicam ações, estados, processos, ou fenômenos naturais.",
        questions: [
            { question: "Qual é a forma correta do verbo no presente do indicativo: eu (comer)?", options: ["como", "como"], correctAnswer: "como" },

            { question: "O que são verbos regulares?", options: ["Verbos que seguem um padrão fixo de conjugação", "Verbos que possuem várias irregularidades na conjugação"], correctAnswer: "Verbos que seguem um padrão fixo de conjugação" },

            { question: "O que são verbos irregulares?", options: ["Verbos que seguem um padrão fixo de conjugação", "Verbos que possuem várias irregularidades na conjugação"], correctAnswer: "Verbos que possuem várias irregularidades na conjugação" },

            { question: "O que são verbos transitivos?", options: ["Verbos que não necessitam de complemento", "Verbos que necessitam de complemento para ter sentido completo"], correctAnswer: "Verbos que necessitam de complemento para ter sentido completo" },

            { question: "O que são verbos intransitivos?", options: ["Verbos que não necessitam de complemento", "Verbos que necessitam de complemento para ter sentido completo"], correctAnswer: "Verbos que não necessitam de complemento" },

            { question: "O que são verbos de ligação?", options: ["Verbos que indicam uma ação", "Verbos que estabelecem uma relação de ligação entre o sujeito e o predicativo do sujeito"], correctAnswer: "Verbos que estabelecem uma relação de ligação entre o sujeito e o predicativo do sujeito" },

            { question: "O que são verbos auxiliares?", options: ["Verbos que indicam uma ação principal", "Verbos que auxiliam na formação dos tempos compostos e na voz passiva"], correctAnswer: "Verbos que auxiliam na formação dos tempos compostos e na voz passiva" },

            { question: "Qual é a conjugação correta do verbo 'amar' na terceira pessoa do singular do presente do indicativo?", options: ["Amo", "Ama", "Amas"], correctAnswer: "Ama" },

            { question: "Qual é a conjugação correta do verbo 'fazer' na primeira pessoa do singular do pretérito perfeito?", options: ["Fez", "Fiz", "Fazes"], correctAnswer: "Fiz" },

            { question: "Qual é um exemplo de verbo transitivo direto?", options: ["Gostar", "Comer", "Acontecer"], correctAnswer: "Comer" },

            { question: "Qual é um exemplo de verbo transitivo indireto?", options: ["Pegar", "Obedecer", "Receber"], correctAnswer: "Receber" },

            { question: "O que são verbos pronominais?", options: ["Verbos que indicam uma ação reflexiva", "Verbos que não podem ser conjugados com pronomes"], correctAnswer: "Verbos que indicam uma ação reflexiva" },

            { question: "O que são verbos defectivos?", options: ["Verbos que possuem um defeito na conjugação", "Verbos que não possuem todas as formas conjugadas"], correctAnswer: "Verbos que não possuem todas as formas conjugadas" },

            { question: "O que são verbos abundantes?", options: ["Verbos que possuem várias formas sinônimas", "Verbos que possuem mais de uma forma de particípio"], correctAnswer: "Verbos que possuem mais de uma forma de particípio" },

            { question: "Qual é a forma correta do verbo 'correr' no imperativo afirmativo?", options: ["Corra", "Corre", "Corri"], correctAnswer: "Corre" },

            { question: "Qual é a forma correta do verbo 'comer' no gerúndio?", options: ["Comendo", "Comido", "Comem"], correctAnswer: "Comendo" },

            { question: "Qual é a forma correta do verbo 'escrever' no particípio?", options: ["Escrevendo", "Escrito", "Escreva"], correctAnswer: "Escrito" },

            { question: "Qual é a forma correta do verbo 'partir' no futuro do presente?", options: ["Partirei", "Partiu", "Partiremos"], correctAnswer: "Partirei" },

            { question: "Qual é a forma correta do verbo 'beber' no pretérito mais-que-perfeito?", options: ["Beberia", "Bebia", "Bebera"], correctAnswer: "Bebera" },

            { question: "Qual é a forma correta do verbo 'poder' no futuro do pretérito?", options: ["Poderá", "Podia", "Poderia"], correctAnswer: "Poderia" },

            { question: "Qual é a forma correta do verbo 'dar' no futuro do subjuntivo?", options: ["Darei", "Dê", "Daremos"], correctAnswer: "Dê" },

            { question: "Qual é a forma correta do verbo 'ler' no pretérito imperfeito?", options: ["Lia", "Leia", "Leria"], correctAnswer: "Lia" },

            { question: "Qual é a forma correta do verbo 'estar' no presente do subjuntivo?", options: ["Esteja", "Estou", "Estava"], correctAnswer: "Esteja" },

            { question: "Qual é a forma correta do verbo 'ter' no pretérito perfeito do subjuntivo?", options: ["Tivera", "Terei", "Tivesse"], correctAnswer: "Tivesse" },

            { question: "Qual é a forma correta do verbo 'ir' no imperfeito do subjuntivo?", options: ["Fosse", "Irei", "Vou"], correctAnswer: "Fosse" },

            { question: "Qual é a forma correta do verbo 'pular' no infinitivo?", options: ["Pulou", "Pulando", "Pular"], correctAnswer: "Pular" },

            { question: "Qual é a forma correta do verbo 'cantar' no futuro composto?", options: ["Tenho cantado", "Cantarei", "Cantava"], correctAnswer: "Tenho cantado" },

            { question: "Qual é a forma correta do verbo 'beber' no pretérito perfeito composto?", options: ["Bebi", "Bebendo", "Beberia"], correctAnswer: "Bebi" },

            { question: "Qual é a forma correta do verbo 'ir' no mais-que-perfeito composto?", options: ["Ira", "Havia ido", "Irá"], correctAnswer: "Havia ido" },

            { question: "Qual é a forma correta do verbo 'fazer' no subjuntivo imperfeito composto?", options: ["Fizesse", "Fiz", "Fazendo"], correctAnswer: "Fizesse" }
        ]
    },
    {
        title: "Adjetivo",
        text: "Os adjetivos são palavras que caracterizam ou qualificam os substantivos, atribuindo-lhes qualidades, estados ou características.",
        questions: [
            { question: "Qual é um exemplo de adjetivo?", options: ["Belo", "Correr"], correctAnswer: "Belo" },
            
            { question: "O que são adjetivos qualificativos?", options: ["Adjetivos que indicam uma qualidade do substantivo", "Adjetivos que indicam uma quantidade do substantivo"], correctAnswer: "Adjetivos que indicam uma qualidade do substantivo" },

            { question: "O que são adjetivos demonstrativos?", options: ["Adjetivos que indicam posse", "Adjetivos que indicam proximidade ou distância em relação ao falante"], correctAnswer: "Adjetivos que indicam proximidade ou distância em relação ao falante" },

            { question: "O que são adjetivos possessivos?", options: ["Adjetivos que indicam posse", "Adjetivos que indicam quantidade"], correctAnswer: "Adjetivos que indicam posse" },

            { question: "O que são adjetivos indefinidos?", options: ["Adjetivos que indicam posse", "Adjetivos que indicam uma quantidade não especificada"], correctAnswer: "Adjetivos que indicam uma quantidade não especificada" },

            { question: "O que são adjetivos numerais?", options: ["Adjetivos que indicam posse", "Adjetivos que indicam quantidade em números"], correctAnswer: "Adjetivos que indicam quantidade em números" },

            { question: "O que são adjetivos pátrios?", options: ["Adjetivos que indicam nacionalidade", "Adjetivos que indicam cor"], correctAnswer: "Adjetivos que indicam nacionalidade" },

            { question: "O que são adjetivos compostos?", options: ["Adjetivos formados pela junção de duas ou mais palavras", "Adjetivos que indicam uma qualidade"], correctAnswer: "Adjetivos formados pela junção de duas ou mais palavras" },

            { question: "O que são adjetivos simples?", options: ["Adjetivos formados pela junção de duas ou mais palavras", "Adjetivos que não são formados pela junção de outras palavras"], correctAnswer: "Adjetivos que não são formados pela junção de outras palavras" },

            { question: "O que são adjetivos uniformes?", options: ["Adjetivos que possuem apenas uma forma", "Adjetivos que possuem formas diferentes para o masculino e para o feminino"], correctAnswer: "Adjetivos que possuem apenas uma forma" },

            { question: "O que são adjetivos biformes?", options: ["Adjetivos que possuem apenas uma forma", "Adjetivos que possuem formas diferentes para o masculino e para o feminino"], correctAnswer: "Adjetivos que possuem formas diferentes para o masculino e para o feminino" },

            { question: "O que são adjetivos pátrios de dois gêneros?", options: ["Adjetivos que indicam nacionalidade", "Adjetivos que possuem formas diferentes para o masculino e para o feminino"], correctAnswer: "Adjetivos que possuem formas diferentes para o masculino e para o feminino" },

            { question: "O que são adjetivos uniformes de dois gêneros?", options: ["Adjetivos que possuem apenas uma forma", "Adjetivos que possuem formas diferentes para o masculino e para o feminino"], correctAnswer: "Adjetivos que possuem apenas uma forma" },

            { question: "O que são adjetivos flexionais?", options: ["Adjetivos que não sofrem flexão em gênero e número", "Adjetivos que sofrem flexão em gênero e número"], correctAnswer: "Adjetivos que sofrem flexão em gênero e número" },

            { question: "O que são adjetivos invariáveis?", options: ["Adjetivos que não sofrem flexão em gênero e número", "Adjetivos que sofrem flexão em gênero e número"], correctAnswer: "Adjetivos que não sofrem flexão em gênero e número" },

            { question: "O que são adjetivos comparativos?", options: ["Adjetivos que estabelecem uma comparação entre dois seres ou objetos", "Adjetivos que indicam uma qualidade"], correctAnswer: "Adjetivos que estabelecem uma comparação entre dois seres ou objetos" },

            { question: "O que são adjetivos superlativos?", options: ["Adjetivos que indicam uma qualidade extrema", "Adjetivos que estabelecem uma comparação entre dois seres ou objetos"], correctAnswer: "Adjetivos que indicam uma qualidade extrema" },

            { question: "O que são adjetivos uniformes comparativos?", options: ["Adjetivos que possuem apenas uma forma comparativa", "Adjetivos que possuem formas diferentes para o comparativo"], correctAnswer: "Adjetivos que possuem apenas uma forma comparativa" },

            { question: "O que são adjetivos biformes comparativos?", options: ["Adjetivos que possuem apenas uma forma comparativa", "Adjetivos que possuem formas diferentes para o comparativo"], correctAnswer: "Adjetivos que possuem formas diferentes para o comparativo" },

            { question: "O que são adjetivos uniformes superlativos?", options: ["Adjetivos que possuem apenas uma forma superlativa", "Adjetivos que possuem formas diferentes para o superlativo"], correctAnswer: "Adjetivos que possuem apenas uma forma superlativa" },

            { question: "O que são adjetivos biformes superlativos?", options: ["Adjetivos que possuem apenas uma forma superlativa", "Adjetivos que possuem formas diferentes para o superlativo"], correctAnswer: "Adjetivos que possuem formas diferentes para o superlativo" },

            { question: "O que são adjetivos pátrios comparativos?", options: ["Adjetivos que indicam nacionalidade", "Adjetivos que estabelecem uma comparação entre dois seres ou objetos"], correctAnswer: "Adjetivos que estabelecem uma comparação entre dois seres ou objetos" },

            { question: "O que são adjetivos pátrios superlativos?", options: ["Adjetivos que indicam nacionalidade", "Adjetivos que indicam uma qualidade extrema"], correctAnswer: "Adjetivos que indicam uma qualidade extrema" },

            { question: "O que são adjetivos demonstrativos de dois gêneros?", options: ["Adjetivos que indicam proximidade ou distância em relação ao falante", "Adjetivos que possuem formas diferentes para o masculino e para o feminino"], correctAnswer: "Adjetivos que possuem formas diferentes para o masculino e para o feminino" },

            { question: "O que são adjetivos possessivos de dois gêneros?", options: ["Adjetivos que indicam posse", "Adjetivos que possuem formas diferentes para o masculino e para o feminino"], correctAnswer: "Adjetivos que possuem formas diferentes para o masculino e para o feminino" },

            { question: "O que são adjetivos indefinidos de dois gêneros?", options: ["Adjetivos que indicam uma quantidade não especificada", "Adjetivos que possuem formas diferentes para o masculino e para o feminino"], correctAnswer: "Adjetivos que possuem formas diferentes para o masculino e para o feminino" }
        ]
    },
    {
        title: "Pronome",
        text: "Os pronomes são palavras que substituem ou acompanham o substantivo, indicando a pessoa do discurso, quantidade, lugar, tempo, entre outros. Podem ser classificados em pessoais, possessivos, demonstrativos, interrogativos, indefinidos e relativos.",
        questions: [
            { question: "Qual é um exemplo de pronome pessoal?", options: ["Eu", "Rápido"], correctAnswer: "Eu" },
            
            { question: "O que são pronomes pessoais do caso reto?", options: ["Pronomes que indicam posse", "Pronomes que funcionam como sujeito da frase"], correctAnswer: "Pronomes que funcionam como sujeito da frase" },

            { question: "O que são pronomes pessoais do caso oblíquo?", options: ["Pronomes que indicam posse", "Pronomes que funcionam como complemento da frase"], correctAnswer: "Pronomes que funcionam como complemento da frase" },

            { question: "O que são pronomes de tratamento?", options: ["Pronomes que indicam posse", "Pronomes que são utilizados para se dirigir a alguém de forma formal ou respeitosa"], correctAnswer: "Pronomes que são utilizados para se dirigir a alguém de forma formal ou respeitosa" },

            { question: "O que são pronomes possessivos?", options: ["Pronomes que indicam posse", "Pronomes que indicam uma ação"], correctAnswer: "Pronomes que indicam posse" },

            { question: "O que são pronomes demonstrativos?", options: ["Pronomes que indicam posse", "Pronomes que indicam proximidade ou distância em relação ao falante"], correctAnswer: "Pronomes que indicam proximidade ou distância em relação ao falante" },

            { question: "O que são pronomes indefinidos?", options: ["Pronomes que indicam posse", "Pronomes que se referem a algo de forma genérica ou indeterminada"], correctAnswer: "Pronomes que se referem a algo de forma genérica ou indeterminada" },

            { question: "O que são pronomes interrogativos?", options: ["Pronomes que indicam posse", "Pronomes que são utilizados para fazer perguntas"], correctAnswer: "Pronomes que são utilizados para fazer perguntas" },

            { question: "O que são pronomes relativos?", options: ["Pronomes que indicam posse", "Pronomes que introduzem uma oração subordinada"], correctAnswer: "Pronomes que introduzem uma oração subordinada" },

            { question: "Qual é o pronome pessoal do caso reto na terceira pessoa do singular?", options: ["Ele", "Meu", "Eu"], correctAnswer: "Ele" },

            { question: "Qual é o pronome pessoal do caso oblíquo na primeira pessoa do singular?", options: ["Meu", "Mim", "Eu"], correctAnswer: "Mim" },

            { question: "Qual é o pronome de tratamento utilizado para se dirigir a uma mulher de forma respeitosa?", options: ["Vossa Senhoria", "Vossa Excelência", "Vossa Alteza"], correctAnswer: "Vossa Senhoria" },

            { question: "Qual é o pronome possessivo de segunda pessoa do singular?", options: ["Seu", "Meu", "Teu"], correctAnswer: "Teu" },

            { question: "Qual é o pronome demonstrativo que indica distância média?", options: ["Este", "Esse", "Aquele"], correctAnswer: "Esse" },

            { question: "Qual é o pronome indefinido que indica quantidade?", options: ["Algum", "Todo", "Nenhum"], correctAnswer: "Algum" },

            { question: "Qual é o pronome interrogativo que questiona sobre lugar?", options: ["Onde", "Quando", "Quem"], correctAnswer: "Onde" },

            { question: "Qual é o pronome relativo que se refere a pessoas?", options: ["Que", "Onde", "Qual"], correctAnswer: "Que" },

            { question: "Qual é o pronome pessoal do caso reto na segunda pessoa do singular?", options: ["Tu", "Ele", "Nós"], correctAnswer: "Tu" },

            { question: "Qual é o pronome pessoal do caso oblíquo na terceira pessoa do singular?", options: ["Ele", "Meu", "O"], correctAnswer: "O" },

            { question: "Qual é o pronome de tratamento utilizado para se dirigir a um homem de forma respeitosa?", options: ["Vossa Senhoria", "Vossa Excelência", "Vossa Alteza"], correctAnswer: "Vossa Senhoria" },

            { question: "Qual é o pronome possessivo de segunda pessoa do plural?", options: ["Nosso", "Vosso", "Seu"], correctAnswer: "Vosso" },

            { question: "Qual é o pronome demonstrativo que indica distância longa?", options: ["Este", "Esse", "Aquele"], correctAnswer: "Aquele" },

            { question: "Qual é o pronome indefinido que indica qualidade?", options: ["Algum", "Todo", "Qualquer"], correctAnswer: "Qualquer" },

            { question: "Qual é o pronome interrogativo que questiona sobre tempo?", options: ["Onde", "Quando", "Quem"], correctAnswer: "Quando" },

            { question: "Qual é o pronome relativo que se refere a coisas?", options: ["Que", "Onde", "Qual"], correctAnswer: "Que" },

            { question: "Qual é o pronome pessoal do caso reto na terceira pessoa do plural?", options: ["Eles", "Elas", "Nós"], correctAnswer: "Eles" },

            { question: "Qual é o pronome pessoal do caso oblíquo na segunda pessoa do plural?", options: ["Vós", "Teu", "Nosso"], correctAnswer: "Vós" },

            { question: "Qual é o pronome de tratamento utilizado para se dirigir a pessoas importantes?", options: ["Vossa Senhoria", "Vossa Excelência", "Vossa Alteza"], correctAnswer: "Vossa Excelência" },

            { question: "Qual é o pronome possessivo de terceira pessoa do singular?", options: ["Seu", "Meu", "Dele"], correctAnswer: "Dele" }
        ]
    },
    {
        title: "Artigo",
        text: "Os artigos são palavras que acompanham os substantivos, determinando-os de forma definida (o, a, os, as) ou indefinida (um, uma, uns, umas).",
        questions: [
            { question: "Quantos artigos existem na língua portuguesa?", options: ["Dois", "Cinco"], correctAnswer: "Dois" },
            
            { question: "Qual é o artigo definido masculino singular?", options: ["O", "Os", "Um"], correctAnswer: "O" },

            { question: "Qual é o artigo definido masculino plural?", options: ["Os", "O", "Um"], correctAnswer: "Os" },

            { question: "Qual é o artigo definido feminino singular?", options: ["A", "As", "Um"], correctAnswer: "A" },

            { question: "Qual é o artigo definido feminino plural?", options: ["As", "A", "Um"], correctAnswer: "As" },

            { question: "Qual é o artigo definido que se utiliza antes de uma palavra iniciada com vogal?", options: ["O", "A", "Os"], correctAnswer: "A" },

            { question: "Qual é o artigo definido que se utiliza antes de uma palavra iniciada com vogal, no plural?", options: ["As", "Os", "A"], correctAnswer: "As" },

            { question: "Qual é o artigo definido que se utiliza antes de uma palavra iniciada com consoante?", options: ["O", "A", "As"], correctAnswer: "O" },

            { question: "Qual é o artigo definido que se utiliza antes de uma palavra iniciada com consoante, no plural?", options: ["Os", "A", "As"], correctAnswer: "Os" },

            { question: "Qual é o artigo definido que se utiliza após a preposição 'por'?", options: ["O", "A", "Os"], correctAnswer: "O" },

            { question: "Qual é o artigo definido que se utiliza após a preposição 'por', no plural?", options: ["Os", "A", "As"], correctAnswer: "Os" },

            { question: "Qual é o artigo definido que se utiliza após a preposição 'para'?", options: ["O", "A", "Os"], correctAnswer: "A" },

            { question: "Qual é o artigo definido que se utiliza após a preposição 'para', no plural?", options: ["As", "A", "Os"], correctAnswer: "As" },

            { question: "Qual é o artigo definido que se utiliza após a preposição 'com'?", options: ["O", "A", "Os"], correctAnswer: "O" },

            { question: "Qual é o artigo definido que se utiliza após a preposição 'com', no plural?", options: ["Os", "A", "As"], correctAnswer: "Os" },

            { question: "Qual é o artigo indefinido masculino singular?", options: ["Um", "Uns", "Uma"], correctAnswer: "Um" },

            { question: "Qual é o artigo indefinido masculino plural?", options: ["Uns", "Um", "Uma"], correctAnswer: "Uns" },

            { question: "Qual é o artigo indefinido feminino singular?", options: ["Uma", "Uns", "Um"], correctAnswer: "Uma" },

            { question: "Qual é o artigo indefinido feminino plural?", options: ["Umas", "Uns", "Um"], correctAnswer: "Umas" },

            { question: "Qual é o artigo indefinido que se utiliza antes de uma palavra iniciada com vogal?", options: ["Um", "Uma", "Uns"], correctAnswer: "Uma" },

            { question: "Qual é o artigo indefinido que se utiliza antes de uma palavra iniciada com vogal, no plural?", options: ["Umas", "Uns", "Um"], correctAnswer: "Umas" },

            { question: "Qual é o artigo indefinido que se utiliza antes de uma palavra iniciada com consoante?", options: ["Um", "Uma", "Uns"], correctAnswer: "Um" },

            { question: "Qual é o artigo indefinido que se utiliza antes de uma palavra iniciada com consoante, no plural?", options: ["Uns", "Um", "Uma"], correctAnswer: "Uns" },

            { question: "Qual é o artigo indefinido que se utiliza após a preposição 'por'?", options: ["Um", "Uma", "Uns"], correctAnswer: "Um" },

            { question: "Qual é o artigo indefinido que se utiliza após a preposição 'por', no plural?", options: ["Uns", "Um", "Uma"], correctAnswer: "Uns" },

            { question: "Qual é o artigo indefinido que se utiliza após a preposição 'para'?", options: ["Um", "Uma", "Uns"], correctAnswer: "Uma" },

            { question: "Qual é o artigo indefinido que se utiliza após a preposição 'para', no plural?", options: ["Umas", "Uns", "Um"], correctAnswer: "Umas" },

            { question: "Qual é o artigo indefinido que se utiliza após a preposição 'com'?", options: ["Um", "Uma", "Uns"], correctAnswer: "Um" },

            { question: "Qual é o artigo indefinido que se utiliza após a preposição 'com', no plural?", options: ["Uns", "Um", "Umas"], correctAnswer: "Uns" }
        ]
    },
    {
        title: "Numeral",
        text: "Os numerais são palavras que indicam quantidade, ordem, multiplicação, fração, entre outros.",
        questions: [
            { question: "Qual é um exemplo de numeral cardinal?", options: ["Primeiro", "Cinco"], correctAnswer: "Cinco" },
            
            { question: "O que é um numeral?", options: ["Uma palavra que expressa quantidade, ordem ou posição", "Um tipo de substantivo"], correctAnswer: "Uma palavra que expressa quantidade, ordem ou posição" },

            { question: "O que é um numeral cardinal?", options: ["Um numeral que indica quantidade", "Um numeral que indica ordem"], correctAnswer: "Um numeral que indica quantidade" },

            { question: "O que é um numeral ordinal?", options: ["Um numeral que indica quantidade", "Um numeral que indica ordem"], correctAnswer: "Um numeral que indica ordem" },

            { question: "Qual é um exemplo de numeral cardinal?", options: ["Três", "Terceiro", "Quinto"], correctAnswer: "Três" },

            { question: "Qual é um exemplo de numeral ordinal?", options: ["Três", "Terceiro", "Quinto"], correctAnswer: "Terceiro" },

            { question: "O numeral 'cinco' é um exemplo de qual tipo de numeral?", options: ["Cardinal", "Ordinal"], correctAnswer: "Cardinal" },

            { question: "O numeral 'quinto' é um exemplo de qual tipo de numeral?", options: ["Cardinal", "Ordinal"], correctAnswer: "Ordinal" },

            { question: "Qual é o numeral cardinal na frase: 'Eu tenho três livros.'?", options: ["Três", "Livros"], correctAnswer: "Três" },

            { question: "Qual é o numeral ordinal na frase: 'Ele chegou em terceiro lugar.'?", options: ["Terceiro", "Lugar"], correctAnswer: "Terceiro" },

            { question: "Qual é o numeral cardinal que indica quantidade na frase: 'Eu tenho cinco irmãos.'?", options: ["Cinco", "Irmãos"], correctAnswer: "Cinco" },

            { question: "Qual é o numeral ordinal que indica ordem na frase: 'Ele foi o quinto a chegar.'?", options: ["Quinto", "Chegar"], correctAnswer: "Quinto" },

            { question: "Qual é o numeral cardinal na frase: 'Comprei seis maçãs.'?", options: ["Seis", "Maçãs"], correctAnswer: "Seis" },

            { question: "Qual é o numeral ordinal na frase: 'Ele é o primeiro da fila.'?", options: ["Primeiro", "Fila"], correctAnswer: "Primeiro" },

            { question: "Qual é o numeral cardinal que indica quantidade na frase: 'Havia quatro gatos no quintal.'?", options: ["Quatro", "Gatos"], correctAnswer: "Quatro" },

            { question: "Qual é o numeral ordinal que indica ordem na frase: 'Ela é a segunda da lista.'?", options: ["Segunda", "Lista"], correctAnswer: "Segunda" },

            { question: "Qual é o numeral cardinal na frase: 'Comprei oito ingressos para o cinema.'?", options: ["Oito", "Ingressos"], correctAnswer: "Oito" },

            { question: "Qual é o numeral ordinal na frase: 'Ele é o décimo a ser chamado.'?", options: ["Décimo", "Chamado"], correctAnswer: "Décimo" },

            { question: "Qual é o numeral cardinal que indica quantidade na frase: 'Tenho duas bicicletas.'?", options: ["Duas", "Bicicletas"], correctAnswer: "Duas" },

            { question: "Qual é o numeral ordinal que indica ordem na frase: 'Ela é a quarta da turma.'?", options: ["Quarta", "Turma"], correctAnswer: "Quarta" },

            { question: "Qual é o numeral cardinal na frase: 'Vou comprar cinco livros.'?", options: ["Cinco", "Livros"], correctAnswer: "Cinco" },

            { question: "Qual é o numeral ordinal na frase: 'Ele é o quinto a chegar.'?", options: ["Quinto", "Chegar"], correctAnswer: "Quinto" },

            { question: "Qual é o numeral cardinal que indica quantidade na frase: 'Havia três cachorros no parque.'?", options: ["Três", "Cachorros"], correctAnswer: "Três" },

            { question: "Qual é o numeral ordinal que indica ordem na frase: 'Ela é a terceira da fila.'?", options: ["Terceira", "Fila"], correctAnswer: "Terceira" },

            { question: "Qual é o numeral cardinal na frase: 'Comprei sete pães na padaria.'?", options: ["Sete", "Pães"], correctAnswer: "Sete" },

            { question: "Qual é o numeral ordinal na frase: 'Ele é o segundo a se apresentar.'?", options: ["Segundo", "Apresentar"], correctAnswer: "Segundo" }
        ]
    },
    {
        title: "Preposição",
        text: "As preposições são palavras que estabelecem uma relação entre dois termos da oração, indicando, por exemplo, posição, direção, tempo, causa, finalidade, entre outros.",
        questions: [
            { question: "Qual é um exemplo de preposição de lugar?", options: ["Para", "Sobre"], correctAnswer: "Sobre" },
            
            { question: "O que é uma preposição?", options: ["Uma palavra que liga um substantivo ou pronome a outra palavra na frase", "Um tipo de verbo"], correctAnswer: "Uma palavra que liga um substantivo ou pronome a outra palavra na frase" },

            { question: "Qual é a função das preposições em uma frase?", options: ["Indicar a relação de tempo, lugar, modo, entre outras", "Indicar a ação principal"], correctAnswer: "Indicar a relação de tempo, lugar, modo, entre outras" },

            { question: "Quais são exemplos de preposições?", options: ["Em, para, com, sobre", "Correr, pular, nadar, cantar"], correctAnswer: "Em, para, com, sobre" },

            { question: "Qual é um exemplo de preposição de tempo?", options: ["Na", "Debaixo", "Através"], correctAnswer: "Na" },

            { question: "Qual é um exemplo de preposição de lugar?", options: ["Sobre", "Através", "Atrás"], correctAnswer: "Atrás" },

            { question: "Qual é um exemplo de preposição de modo?", options: ["Com", "Dentro", "Entre"], correctAnswer: "Com" },

            { question: "Qual é um exemplo de preposição de posse?", options: ["De", "Para", "Através"], correctAnswer: "De" },

            { question: "Qual é um exemplo de preposição de causa?", options: ["Por", "Durante", "Através"], correctAnswer: "Por" },

            { question: "Qual é um exemplo de preposição de finalidade?", options: ["Para", "Com", "Sobre"], correctAnswer: "Para" },

            { question: "Qual é um exemplo de preposição de instrumento?", options: ["Com", "Através", "Em"], correctAnswer: "Com" },

            { question: "Qual é um exemplo de preposição de companhia?", options: ["Com", "Para", "Dentro"], correctAnswer: "Com" },

            { question: "Qual é um exemplo de preposição de lugar em movimento?", options: ["Para", "Atrás", "Dentro"], correctAnswer: "Para" },

            { question: "Qual é um exemplo de preposição de lugar estático?", options: ["Em", "Através", "De"], correctAnswer: "Em" },

            { question: "Qual é um exemplo de preposição de lugar relativo?", options: ["Sobre", "Entre", "Ao redor"], correctAnswer: "Ao redor" },

            { question: "Qual é um exemplo de preposição de direção?", options: ["Para", "Através", "Atrás"], correctAnswer: "Para" },

            { question: "Qual é um exemplo de preposição de origem?", options: ["De", "Com", "Em"], correctAnswer: "De" },

            { question: "Qual é um exemplo de preposição de destino?", options: ["Para", "Dentro", "Atrás"], correctAnswer: "Para" },

            { question: "Qual é um exemplo de preposição de localização?", options: ["Em", "Durante", "Com"], correctAnswer: "Em" },

            { question: "Qual é um exemplo de preposição de meio?", options: ["Por", "Através", "Atrás"], correctAnswer: "Por" },

            { question: "Qual é a preposição de tempo na frase: 'Chegarei na segunda-feira.'?", options: ["Na", "Chegarei"], correctAnswer: "Na" },

            { question: "Qual é a preposição de lugar na frase: 'O gato está em cima da mesa.'?", options: ["Em cima", "Está", "Da"], correctAnswer: "Em cima" },

            { question: "Qual é a preposição de modo na frase: 'Ele correu com rapidez.'?", options: ["Com", "Ele", "Correu"], correctAnswer: "Com" },

            { question: "Qual é a preposição de posse na frase: 'O livro é de Maria.'?", options: ["De", "Maria", "É"], correctAnswer: "De" },

            { question: "Qual é a preposição de causa na frase: 'Ele chorou por tristeza.'?", options: ["Por", "Chorou", "Tristeza"], correctAnswer: "Por" },

            { question: "Qual é a preposição de finalidade na frase: 'Ela estudou para o exame.'?", options: ["Para", "Estudou", "Exame"], correctAnswer: "Para" },

            { question: "Qual é a preposição de instrumento na frase: 'Ele escreveu com uma caneta.'?", options: ["Com", "Escreveu", "Caneta"], correctAnswer: "Com" },

            { question: "Qual é a preposição de companhia na frase: 'Eles foram ao cinema com amigos.'?", options: ["Com", "Foram", "Cinema"], correctAnswer: "Com" },

            { question: "Qual é a preposição de lugar em movimento na frase: 'Vou para casa.'?", options: ["Para", "Vou", "Casa"], correctAnswer: "Para" },

            { question: "Qual é a preposição de lugar estático na frase: 'O lápis está em cima da mesa.'?", options: ["Em cima", "Está", "Da"], correctAnswer: "Em cima" },

            { question: "Qual é a preposição de lugar relativo na frase: 'Ele está ao redor da praça.'?", options: ["Ao redor", "Está", "Da"], correctAnswer: "Ao redor" },

            { question: "Qual é a preposição de direção na frase: 'Vou para o parque.'?", options: ["Para", "Vou", "Parque"], correctAnswer: "Para" },

            { question: "Qual é a preposição de origem na frase: 'Ele veio de São Paulo.'?", options: ["De", "Veio", "São Paulo"], correctAnswer: "De" },

            { question: "Qual é a preposição de destino na frase: 'Ela vai para a escola.'?", options: ["Para", "Vai", "Escola"], correctAnswer: "Para" },

            { question: "Qual é a preposição de localização na frase: 'O cachorro está embaixo da cama.'?", options: ["Embaixo", "Está", "Da"], correctAnswer: "Embaixo" },

            { question: "Qual é a preposição de meio na frase: 'Ele viajou por avião.'?", options: ["Por", "Viajou", "Avião"], correctAnswer: "Por" }
        ]
    },
    {
        title: "Conjunção",
        text: "As conjunções são palavras que ligam orações, termos ou proposições, estabelecendo uma relação de coordenação ou subordinação entre eles.",
        questions: [
            { question: "Qual é um exemplo de conjunção coordenativa?", options: ["Porque", "E"], correctAnswer: "E" },
            
            { question: "O que é uma conjunção?", options: ["Uma palavra que liga palavras, frases ou orações", "Um tipo de verbo"], correctAnswer: "Uma palavra que liga palavras, frases ou orações" },

            { question: "Qual é a função das conjunções em uma frase?", options: ["Conectar elementos na frase, como palavras, frases ou orações", "Descrever a ação principal"], correctAnswer: "Conectar elementos na frase, como palavras, frases ou orações" },

            { question: "Quais são exemplos de conjunções coordenativas?", options: ["E, ou, mas, porque", "Correr, pular, nadar, cantar"], correctAnswer: "E, ou, mas, porque" },

            { question: "Qual é um exemplo de conjunção subordinativa causal?", options: ["Porque", "Enquanto", "Logo"], correctAnswer: "Porque" },

            { question: "Qual é um exemplo de conjunção subordinativa temporal?", options: ["Quando", "Mas", "Todavia"], correctAnswer: "Quando" },

            { question: "Qual é um exemplo de conjunção subordinativa concessiva?", options: ["Embora", "Portanto", "Assim"], correctAnswer: "Embora" },

            { question: "Qual é um exemplo de conjunção subordinativa condicional?", options: ["Se", "Enquanto", "Porém"], correctAnswer: "Se" },

            { question: "Qual é um exemplo de conjunção subordinativa final?", options: ["Para que", "Desde que", "Ainda que"], correctAnswer: "Para que" },

            { question: "Qual é um exemplo de conjunção subordinativa consecutiva?", options: ["Que", "Então", "Contudo"], correctAnswer: "Que" },

            { question: "Qual é um exemplo de conjunção coordenativa adversativa?", options: ["Mas", "Porém", "Entretanto"], correctAnswer: "Mas" },

            { question: "Qual é um exemplo de conjunção coordenativa alternativa?", options: ["Ou", "Todavia", "Portanto"], correctAnswer: "Ou" },

            { question: "Qual é um exemplo de conjunção coordenativa explicativa?", options: ["Pois", "Assim", "Portanto"], correctAnswer: "Pois" },

            { question: "Qual é uma conjunção coordenativa que indica adição?", options: ["E", "Mas", "Porém"], correctAnswer: "E" },

            { question: "Qual é uma conjunção coordenativa que indica alternativa?", options: ["Ou", "Portanto", "Assim"], correctAnswer: "Ou" },

            { question: "Qual é uma conjunção subordinativa que indica causa?", options: ["Porque", "Quando", "Enquanto"], correctAnswer: "Porque" },

            { question: "Qual é uma conjunção subordinativa que indica condição?", options: ["Se", "Porém", "Entretanto"], correctAnswer: "Se" },

            { question: "Qual é uma conjunção subordinativa que indica finalidade?", options: ["Para que", "Contudo", "Portanto"], correctAnswer: "Para que" },

            { question: "Qual é uma conjunção subordinativa que indica concessão?", options: ["Embora", "Então", "Pois"], correctAnswer: "Embora" },

            { question: "Qual é uma conjunção subordinativa que indica tempo?", options: ["Quando", "Ou", "Assim"], correctAnswer: "Quando" },

            { question: "Qual é uma conjunção subordinativa que indica proporcionalidade?", options: ["À medida que", "Contudo", "Portanto"], correctAnswer: "À medida que" },

            { question: "Qual é uma conjunção subordinativa que indica finalidade?", options: ["Para que", "Ou", "Portanto"], correctAnswer: "Para que" },

            { question: "Qual é uma conjunção subordinativa que indica comparação?", options: ["Como", "Porém", "Então"], correctAnswer: "Como" },

            { question: "Qual é uma conjunção subordinativa que indica consequência?", options: ["Assim que", "Mas", "Porém"], correctAnswer: "Assim que" },

            { question: "Qual é uma conjunção coordenativa que indica contraste?", options: ["Entretanto", "Portanto", "Assim"], correctAnswer: "Entretanto" },

            { question: "Qual é uma conjunção coordenativa que indica conclusão?", options: ["Logo", "Mas", "Porém"], correctAnswer: "Logo" },

            { question: "Qual é uma conjunção coordenativa que indica explicação?", options: ["Pois", "Portanto", "Assim"], correctAnswer: "Pois" }
        ]
    },
    {
        title: "Interjeição",
        text: "As interjeições são palavras ou expressões que exprimem emoções, sentimentos, sensações, estados de espírito, entre outros.",
        questions: [
            { question: "Qual é um exemplo de interjeição?", options: ["Caramba!", "Correr"], correctAnswer: "Caramba!" },
            
            { question: "O que é uma interjeição?", options: ["Uma palavra ou expressão que expressa emoção ou sentimento", "Um tipo de verbo"], correctAnswer: "Uma palavra ou expressão que expressa emoção ou sentimento" },

            { question: "Qual é a função das interjeições em uma frase?", options: ["Expressar emoções ou sentimentos de forma imediata", "Descrever a ação principal"], correctAnswer: "Expressar emoções ou sentimentos de forma imediata" },

            { question: "Quais são exemplos de interjeições de alegria?", options: ["Uau, Legal, Bravo!", "Triste, Chateado, Desanimado"], correctAnswer: "Uau, Legal, Bravo!" },

            { question: "Qual é um exemplo de interjeição de surpresa?", options: ["Oh!", "Bem, Talvez, Provavelmente"], correctAnswer: "Oh!" },

            { question: "Qual é um exemplo de interjeição de tristeza?", options: ["Ai!", "Eba, Legal, Incrível"], correctAnswer: "Ai!" },

            { question: "Qual é um exemplo de interjeição de dor?", options: ["Ai!", "Uau, Legal, Bravo!"], correctAnswer: "Ai!" },

            { question: "Qual é um exemplo de interjeição de alívio?", options: ["Ufa!", "Bem, Talvez, Provavelmente"], correctAnswer: "Ufa!" },

            { question: "Qual é um exemplo de interjeição de admiração?", options: ["Uau!", "Eba, Legal, Incrível"], correctAnswer: "Uau!" },

            { question: "Qual é um exemplo de interjeição de repulsa?", options: ["Eca!", "Triste, Chateado, Desanimado"], correctAnswer: "Eca!" },

            { question: "Qual é um exemplo de interjeição de concordância?", options: ["Sim!", "Triste, Chateado, Desanimado"], correctAnswer: "Sim!" },

            { question: "Qual é um exemplo de interjeição de descrença?", options: ["Ah!", "Bem, Talvez, Provavelmente"], correctAnswer: "Ah!" },

            { question: "Qual é um exemplo de interjeição de comemoração?", options: ["Bravo!", "Eba, Legal, Incrível"], correctAnswer: "Bravo!" },

            { question: "Qual é uma interjeição de espanto?", options: ["Uau!", "Eba, Legal, Incrível"], correctAnswer: "Uau!" },

            { question: "Qual é uma interjeição de dor?", options: ["Ai!", "Eba, Legal, Incrível"], correctAnswer: "Ai!" },

            { question: "Qual é uma interjeição de susto?", options: ["Ah!", "Eba, Legal, Incrível"], correctAnswer: "Ah!" },

            { question: "Qual é uma interjeição de aprovação?", options: ["Legal!", "Eba, Legal, Incrível"], correctAnswer: "Legal!" },

            { question: "Qual é uma interjeição de reprovação?", options: ["Eca!", "Eba, Legal, Incrível"], correctAnswer: "Eca!" },

            { question: "Qual é uma interjeição de alívio?", options: ["Ufa!", "Eba, Legal, Incrível"], correctAnswer: "Ufa!" },

            { question: "Qual é uma interjeição de felicidade?", options: ["Eba!", "Eca, Legal, Incrível"], correctAnswer: "Eba!" },

            { question: "Qual é uma interjeição de indignação?", options: ["Ah!", "Eba, Legal, Incrível"], correctAnswer: "Ah!" },

            { question: "Qual é uma interjeição de incredulidade?", options: ["Oh!", "Eba, Legal, Incrível"], correctAnswer: "Oh!" },

            { question: "Qual é uma interjeição de desgosto?", options: ["Eca!", "Eba, Legal, Incrível"], correctAnswer: "Eca!" },

            { question: "Qual é uma interjeição de reconhecimento?", options: ["Ah!", "Eba, Legal, Incrível"], correctAnswer: "Ah!" },

            { question: "Qual é uma interjeição de satisfação?", options: ["Legal!", "Eba, Legal, Incrível"], correctAnswer: "Legal!" },

            { question: "Qual é uma interjeição de comemoração?", options: ["Bravo!", "Eba, Legal, Incrível"], correctAnswer: "Bravo!" },

            { question: "Qual é uma interjeição de tristeza?", options: ["Ai!", "Eba, Legal, Incrível"], correctAnswer: "Ai!" }
        ]
    },
    {
        title: "Advérbio",
        text: "Os advérbios são palavras que modificam o sentido de um verbo, de um adjetivo ou de outro advérbio, indicando circunstâncias, como modo, lugar, tempo, intensidade, entre outros.",
        questions: [
            { question: "Qual é um exemplo de advérbio de modo?", options: ["Rapidamente", "Carro"], correctAnswer: "Rapidamente" },
            
            { question: "O que é um advérbio?", options: ["Uma palavra que modifica um verbo, adjetivo ou outro advérbio", "Um tipo de pronome"], correctAnswer: "Uma palavra que modifica um verbo, adjetivo ou outro advérbio" },

            { question: "Qual é a função dos advérbios em uma frase?", options: ["Modificar ou descrever um verbo, adjetivo ou outro advérbio", "Substituir um substantivo"], correctAnswer: "Modificar ou descrever um verbo, adjetivo ou outro advérbio" },

            { question: "Quais são exemplos de advérbios de tempo?", options: ["Agora, depois, sempre", "Rápido, bonito, alto"], correctAnswer: "Agora, depois, sempre" },

            { question: "Qual é um exemplo de advérbio de lugar?", options: ["Aqui", "Bonito, Rápido, Alto"], correctAnswer: "Aqui" },

            { question: "Qual é um exemplo de advérbio de modo?", options: ["Rapidamente", "Bonito, Alto, Aqui"], correctAnswer: "Rapidamente" },

            { question: "Qual é um exemplo de advérbio de intensidade?", options: ["Muito", "Bonito, Rápido, Alto"], correctAnswer: "Muito" },

            { question: "Qual é um exemplo de advérbio de afirmação?", options: ["Sim", "Bonito, Rápido, Alto"], correctAnswer: "Sim" },

            { question: "Qual é um exemplo de advérbio de negação?", options: ["Não", "Bonito, Rápido, Alto"], correctAnswer: "Não" },

            { question: "Qual é um exemplo de advérbio de frequência?", options: ["Sempre", "Bonito, Rápido, Alto"], correctAnswer: "Sempre" },

            { question: "Qual é o advérbio de tempo na frase: 'Ele chegou tarde.'?", options: ["Tarde", "Chegou"], correctAnswer: "Tarde" },

            { question: "Qual é o advérbio de lugar na frase: 'O livro está aqui.'?", options: ["Aqui", "Está"], correctAnswer: "Aqui" },

            { question: "Qual é o advérbio de modo na frase: 'Ela falou calmamente.'?", options: ["Calmamente", "Falou"], correctAnswer: "Calmamente" },

            { question: "Qual é o advérbio de intensidade na frase: 'Ele correu muito rápido.'?", options: ["Muito", "Correu"], correctAnswer: "Muito" },

            { question: "Qual é o advérbio de afirmação na frase: 'Sim, eu entendi.'?", options: ["Sim", "Entendi"], correctAnswer: "Sim" },

            { question: "Qual é o advérbio de negação na frase: 'Não quero ir.'?", options: ["Não", "Quero"], correctAnswer: "Não" },

            { question: "Qual é o advérbio de frequência na frase: 'Ele sempre chega cedo.'?", options: ["Sempre", "Chega"], correctAnswer: "Sempre" },

            { question: "Qual é o advérbio de lugar na frase: 'Ele foi lá.'?", options: ["Lá", "Foi"], correctAnswer: "Lá" },

            { question: "Qual é o advérbio de modo na frase: 'Ela dançou graciosamente.'?", options: ["Graciosamente", "Dançou"], correctAnswer: "Graciosamente" },

            { question: "Qual é o advérbio de intensidade na frase: 'Ela está bastante animada.'?", options: ["Bastante", "Está"], correctAnswer: "Bastante" },

            { question: "Qual é o advérbio de afirmação na frase: 'Sim, você pode.'?", options: ["Sim", "Pode"], correctAnswer: "Sim" },

            { question: "Qual é o advérbio de negação na frase: 'Não faça isso.'?", options: ["Não", "Faça"], correctAnswer: "Não" },

            { question: "Qual é o advérbio de frequência na frase: 'Ela raramente sai de casa.'?", options: ["Raramente", "Sai"], correctAnswer: "Raramente" },

            { question: "Qual é o advérbio de tempo na frase: 'Eles chegarão logo.'?", options: ["Logo", "Chegarão"], correctAnswer: "Logo" },

            { question: "Qual é o advérbio de lugar na frase: 'Ele está acima.'?", options: ["Acima", "Está"], correctAnswer: "Acima" },

            { question: "Qual é o advérbio de modo na frase: 'Ele dirigiu cuidadosamente.'?", options: ["Cuidadosamente", "Dirigiu"], correctAnswer: "Cuidadosamente" },

            { question: "Qual é o advérbio de intensidade na frase: 'Ela está extremamente cansada.'?", options: ["Extremamente", "Está"], correctAnswer: "Extremamente" },

            { question: "Qual é o advérbio de afirmação na frase: 'Sim, ele está aqui.'?", options: ["Sim", "Está"], correctAnswer: "Sim" },

            { question: "Qual é o advérbio de negação na frase: 'Não vou fazer isso.'?", options: ["Não", "Vou"], correctAnswer: "Não" },

            { question: "Qual é o advérbio de frequência na frase: 'Ela sempre chega cedo.'?", options: ["Sempre", "Chega"], correctAnswer: "Sempre" }
        ]
    }
];

quizzes.forEach(quiz => {
    const quizContainer = document.getElementById(`${removeAcentos(quiz.title.toLowerCase())}Quiz`);
    createQuiz(quiz, quizContainer);
});

// Função para remover acentos de uma string
function removeAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function createQuiz(quiz, quizContainer) {
    const title = document.createElement('h2');
    title.textContent = quiz.title;
    quizContainer.appendChild(title);

    const text = document.createElement('p');
    text.textContent = quiz.text;
    quizContainer.appendChild(text);

    quiz.questions.forEach((q, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionContainer.appendChild(questionText);

        const options = document.createElement('div');
        options.classList.add('options');
        q.options.forEach(option => {
            const answer = document.createElement('span');
            answer.classList.add('answer');
            answer.textContent = option;
            answer.onclick = () => checkAnswer(answer, option, q.correctAnswer, questionContainer, quizContainer);
            options.appendChild(answer);
        });
        questionContainer.appendChild(options);

        const result = document.createElement('p');
        result.classList.add('result');
        questionContainer.appendChild(result);

        if (index !== 0) {
            questionContainer.style.display = 'none'; // Esconde todas as perguntas exceto a primeira
        }

        quizContainer.appendChild(questionContainer);
    });
}

function checkAnswer(answerElement, selectedAnswer, correctAnswer, questionContainer, quizContainer) {
    const resultElement = questionContainer.querySelector('.result');
    if (selectedAnswer === correctAnswer) {
        resultElement.textContent = 'Correto!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Errado!';
        resultElement.style.color = 'red';
    }
    setTimeout(() => {
        resultElement.textContent = '';
        resultElement.style.color = '';
        showNextQuestion(questionContainer, quizContainer);
    }, 2000);
}

function showNextQuestion(currentQuestionContainer, quizContainer) {
    const nextQuestionContainer = currentQuestionContainer.nextElementSibling;
    if (nextQuestionContainer) {
        currentQuestionContainer.style.display = 'none'; // Oculta a pergunta atual
        nextQuestionContainer.style.display = 'block'; // Exibe a próxima pergunta
    } else {
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Recomeçar';
        restartButton.onclick = () => restartQuiz(quizContainer);
        quizContainer.appendChild(restartButton);
    }
}

function restartQuiz(quizContainer) {
    const questionContainers = quizContainer.querySelectorAll('.question');
    const restartButton = quizContainer.querySelector('button');
    if (restartButton) {
        restartButton.remove(); // Remove o botão de recomeçar
    }
    questionContainers.forEach(questionContainer => {
        questionContainer.style.display = 'none'; // Oculta todas as perguntas existentes
    });
    if (questionContainers.length > 0) {
        questionContainers[0].style.display = 'block'; // Exibe a primeira pergunta
    }
}
