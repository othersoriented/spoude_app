import {ESV_API_KEY, ESV_SERVER} from "../bible.config";

const convertVerseLocationToString = (book, chapter, verse) => {
    let fBook = book.toString(),
        fChapter = chapter.toString(),
        fVerse = verse.toString()

    if(fBook.length === 1) fBook = `0${fBook}`

    while(fChapter.length < 3) {
        fChapter = `0${fChapter}`
    }

    while(fVerse.length < 3) {
        fVerse = `0${fVerse}`
    }

    return `${fBook}${fChapter}${fVerse}`
}

export const fetchVerse = (book, chapter, verse) => {
    return new Promise((resolve, reject) => {
        let locationString = convertVerseLocationToString(book, chapter, verse)
        fetch(`${ESV_SERVER}/text/?q=${locationString}`, {
            method: 'GET',
            headers: {
                Authorization: `Token ${ESV_API_KEY}`
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log('FETCH RESULTS', res)

                resolve({})
            })
            .catch(err => {
                console.log('ESV API FETCH ERROR', err)
                reject(err)
            })
    })

}