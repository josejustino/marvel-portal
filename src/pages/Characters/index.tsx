import React, { Component } from 'react';
 // import api from '../../services/api';
//  import axios from 'axios';
import md5 from 'js-md5';
 
 import Header from '../../components/Header';
 import Menu from '../../components/Menu';
 
 import './styles.css';

 const comic = {
   "code": 200,
   "status": "Ok",
   "copyright": "© 2020 MARVEL",
   "attributionText": "Data provided by Marvel. © 2020 MARVEL",
   "attributionHTML": "<a href=\"http://marvel.com\">Data provided by Marvel. © 2020 MARVEL</a>",
   "etag": "5d55f3b593617bd427d632d70506bd93000c9306",
   "data": {
     "offset": 0,
     "limit": 20,
     "total": 1,
     "count": 1,
     "results": [
       {
         "id": 60602,
         "digitalId": 44277,
         "title": "Deadpool (2015) #28",
         "issueNumber": 28,
         "variantDescription": "",
         "description": "Deadpool's whirlwind romance with Shiklah was one of the most exciting times of his life. Traveling across the world, fighting all sorts of threats at her side, and finally marrying her as a way to thwart the evil vampire lord, Dracula. But since then, the reality has set in. Shiklah is a demon succubus, and more than that, the Queen of the monster kingdom hidden beneath Manhattan...and the problems between them continue to pile up.\nNow, when an affront to Shiklah's people demands justice, a line is crossed. As the Monster Metropolis declares war on the surface world, Deadpool must choose between the wife to whom he's pledged himself and the role he's been crafting for himself as a hero. Also featuring Spider-Man and the Mercs for Money, this is one domestic dispute that's really going to break some things up.",
         "modified": "2017-03-16T09:16:59-0400",
         "isbn": "",
         "upc": "75960608332902811",
         "diamondCode": "JAN171058",
         "ean": "",
         "issn": "1946-9292",
         "format": "Comic",
         "pageCount": 32,
         "textObjects": [
           {
             "type": "issue_solicit_text",
             "language": "en-us",
             "text": "Deadpool's whirlwind romance with Shiklah was one of the most exciting times of his life. Traveling across the world, fighting all sorts of threats at her side, and finally marrying her as a way to thwart the evil vampire lord, Dracula. But since then, the reality has set in. Shiklah is a demon succubus, and more than that, the Queen of the monster kingdom hidden beneath Manhattan...and the problems between them continue to pile up.\nNow, when an affront to Shiklah's people demands justice, a line is crossed. As the Monster Metropolis declares war on the surface world, Deadpool must choose between the wife to whom he's pledged himself and the role he's been crafting for himself as a hero. Also featuring Spider-Man and the Mercs for Money, this is one domestic dispute that's really going to break some things up."
           }
         ],
         "resourceURI": "http://gateway.marvel.com/v1/public/comics/60602",
         "urls": [
           {
             "type": "detail",
             "url": "http://marvel.com/comics/issue/60602/deadpool_2015_28?utm_campaign=apiRef&utm_source=6f39d34be067f5aa384594f28f8d9203"
           },
           {
             "type": "purchase",
             "url": "http://comicstore.marvel.com/Deadpool-28/digital-comic/44277?utm_campaign=apiRef&utm_source=6f39d34be067f5aa384594f28f8d9203"
           },
           {
             "type": "reader",
             "url": "http://marvel.com/digitalcomics/view.htm?iid=44277&utm_campaign=apiRef&utm_source=6f39d34be067f5aa384594f28f8d9203"
           },
           {
             "type": "inAppLink",
             "url": "https://applink.marvel.com/issue/44277?utm_campaign=apiRef&utm_source=6f39d34be067f5aa384594f28f8d9203"
           }
         ],
         "series": {
           "resourceURI": "http://gateway.marvel.com/v1/public/series/20613",
           "name": "Deadpool (2015 - 2017)"
         },
         "variants": [],
         "collections": [],
         "collectedIssues": [],
         "dates": [
           {
             "type": "onsaleDate",
             "date": "2017-03-01T00:00:00-0500"
           },
           {
             "type": "focDate",
             "date": "2017-02-06T00:00:00-0500"
           },
           {
             "type": "unlimitedDate",
             "date": "2017-09-04T00:00:00-0400"
           },
           {
             "type": "digitalPurchaseDate",
             "date": "2017-03-01T00:00:00-0500"
           }
         ],
         "prices": [
           {
             "type": "printPrice",
             "price": 3.99
           },
           {
             "type": "digitalPurchasePrice",
             "price": 3.99
           }
         ],
         "thumbnail": {
           "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/70/58b0a1463b05a",
           "extension": "jpg"
         },
         "images": [
           {
             "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/70/58b0a1463b05a",
             "extension": "jpg"
           }
         ],
         "creators": {
           "available": 7,
           "collectionURI": "http://gateway.marvel.com/v1/public/comics/60602/creators",
           "items": [
             {
               "resourceURI": "http://gateway.marvel.com/v1/public/creators/665",
               "name": "Reilly Brown",
               "role": "penciler (cover)"
             },
             {
               "resourceURI": "http://gateway.marvel.com/v1/public/creators/9937",
               "name": "Jim Charalampidis",
               "role": "colorist (cover)"
             },
             {
               "resourceURI": "http://gateway.marvel.com/v1/public/creators/11680",
               "name": "Gerry Duggan",
               "role": "writer"
             },
             {
               "resourceURI": "http://gateway.marvel.com/v1/public/creators/13251",
               "name": "Salva Espin",
               "role": "inker"
             },
             {
               "resourceURI": "http://gateway.marvel.com/v1/public/creators/13008",
               "name": "Ruth Redmond",
               "role": "colorist"
             },
             {
               "resourceURI": "http://gateway.marvel.com/v1/public/creators/12974",
               "name": "Vc Joe Sabino",
               "role": "letterer"
             },
             {
               "resourceURI": "http://gateway.marvel.com/v1/public/creators/8822",
               "name": "Jordan White",
               "role": "editor"
             }
           ],
           "returned": 7
         },
         "characters": {
           "available": 1,
           "collectionURI": "http://gateway.marvel.com/v1/public/comics/60602/characters",
           "items": [
             {
               "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009268",
               "name": "Deadpool"
             }
           ],
           "returned": 1
         },
         "stories": {
           "available": 2,
           "collectionURI": "http://gateway.marvel.com/v1/public/comics/60602/stories",
           "items": [
             {
               "resourceURI": "http://gateway.marvel.com/v1/public/stories/131673",
               "name": "cover from Deadpool (2015) #28",
               "type": "cover"
             },
             {
               "resourceURI": "http://gateway.marvel.com/v1/public/stories/131674",
               "name": "story from Deadpool (2015) #28",
               "type": "interiorStory"
             }
           ],
           "returned": 2
         },
         "events": {
           "available": 0,
           "collectionURI": "http://gateway.marvel.com/v1/public/comics/60602/events",
           "items": [],
           "returned": 0
         }
       }
     ]
   }
 }

class Character extends Component {
   state = {
      characters: []
   }

   async componentDidMount() {
      // await axios
      //    .get('http://gateway.marvel.com/v1/public/characters?name=Spider-Man&apikey=6f39d34be067f5aa384594f28f8d9203')
      //    .then(response => {
      //       this.setState({
      //          characters: response.data.results[0].name
      //       });
      //    });
      const timestamp = Number(new Date());
      const hash = md5.create();
      // eslint-disable-next-line no-useless-concat
      hash.update(timestamp + '6f39d34be067f5aa384594f28f8d9203' + '3b694824045f2dd4cce5635d1499cd537699f692');

      const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}name=Spider-Man&apikey=6f39d34be067f5aa384594f28f8d9203&hash=${hash.hex()}`)
      const responseJson = await response.json();
      this.setState({
         characters: responseJson.data
      })

   }

   render() {

      return (
         <>
            <div className="container-page">
               <Header />
               <div id="page">
                  <Menu />
                  <div className="content">
                     <main>
                        <h1>{comic.data.results[0].title}</h1>
                        <img 
                           src={`${comic.data.results[0].thumbnail.path}.${comic.data.results[0].thumbnail.extension}`} 
                           alt=""/>
                     </main>
                  </div>
               </div>
            </div>
         </>
      );
   }
}

export default Character;