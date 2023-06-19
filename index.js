const QUOTES = [
    {
        quote: "Aerodynamics are for people who can’t build engines.",
        author: "-Enzo Ferrari-",
        color: 'red'
    },
    {
        quote: "If you no longer go for a gap that exists, you’re no longer a racing driver.",
        author:  "-Ayrton Senna-",
        color: 'yellow'
    },
    {
        quote: "I’ve always believed that you should never, ever give up and you should always keep fighting even when there’s only a slightest chance.",
        author:  "-Michael Schumacher-",
        color: 'red'
    },
    {
        quote: "Simplify, then add lightness.",
        author:  "-Colin Chapman-",
        color: 'green'
    },
    {
        quote: "Race cars are neither beautiful nor ugly. They become beautiful when they win.",
        author:  "-Enzo Ferrari-",
        color: 'red'
    },
    {
        quote: "Nothing is too beautiful, nothing is too expensive.",
        author:  "-Ettore Bugatti-",
        color: 'blue'
    },
    {
        quote: "I couldn't find the sports car of my dreams, so I built it myself.",
        author:  "-Ferdinand Porsche-",
        color: "silver"
    },
    {
        quote: "Life is measured in achievement, not in years alone.",
        author:  "-Bruce McLaren-",
        color: "orange"
    }
]

const INITIAL_CONFIG = {
    quote: "Get a quote here...",
    author: "",
    color: "seagreen"
}

const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const main = () => {
    const quoteDisplayElement = document.getElementById("quote-display-content")
    quoteDisplayElement.innerText = INITIAL_CONFIG.quote

    const authorDisplayElement = document.getElementById("author-display-content")
    authorDisplayElement.innerText = INITIAL_CONFIG.author

    const newButtonElement = document.getElementById("new-button")
    const resetButtonElement = document.getElementById("reset-button")


    const updateColors = (newColor) => {
        const html = document.querySelector("html")
        html.style.background = newColor

        const quoteContentElement = document.getElementById("quote-display-content")
        quoteContentElement.style.color = newColor

        const authorContentElement = document.getElementById("author-display-content")
        authorContentElement.style.color = newColor

        newButtonElement.style.background = newColor

        resetButtonElement.style.background = newColor
    }

    updateColors(INITIAL_CONFIG.color)    

    const handleResetButtonDisable = (newState) => {
        resetButtonElement.disabled = newState
    }

    const updateQuoteDisplayInnerText = (newText) => {
        quoteDisplayElement.innerText = newText
    }

    const updateAuthorDisplayInnerText = (newAuthor) => {
        authorDisplayElement.innerText = newAuthor
    }

    const handleNewButtonOnClick = () => {
        const randomIndex = randomIntFromInterval(0, QUOTES.length - 1)
        const randomConfig = QUOTES[randomIndex]
        
        const randomQuote = randomConfig.quote
        updateQuoteDisplayInnerText(randomQuote)
        
        const randomAuthor = randomConfig.author
        updateAuthorDisplayInnerText(randomAuthor)

        const randomColor = randomConfig.color
        updateColors(randomColor)

        handleResetButtonDisable(false)
    }

    const handleResetButton = () => {
        updateQuoteDisplayInnerText(INITIAL_CONFIG.quote)
        updateAuthorDisplayInnerText(INITIAL_CONFIG.author)
        updateColors(INITIAL_CONFIG.color)
        handleResetButtonDisable(true)
    }

    newButtonElement.onclick = handleNewButtonOnClick

    resetButtonElement.onclick = handleResetButton
    handleResetButtonDisable(true)
}
main()