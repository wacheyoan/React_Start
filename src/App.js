import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import {getNumberQuotes,getQuote,removeQuote,addQuote} from './data';
import Quote from './Quotes';
import Form from './Form';



function App(){
    const [currIndex, setCurrIndex] = useState(0);
    const [currLength, setCurrLength] = useState(0);
    function getInitialNumberQuotes(){
        return new Promise(r => setTimeout(() => r(getNumberQuotes()), 3000))
    }

    useEffect(() => {
        async function fetchData() {
            getInitialNumberQuotes().then(v => setCurrLength(v));
        }
        fetchData();
    }, []);

    if(currLength == 0 ){
        return <div>Pas de citation disponible !</div>
    }

    const quote = getQuote(currIndex);
    let jsxQuote = <Quote text={quote.text} author={quote.author} />;

    function response(offset){
        setCurrIndex((currIndex + offset + currLength) % currLength);
        console.log(currIndex);
    }
    
    function del() {
        let nb = currLength;
        removeQuote(currIndex);
        setCurrLength(nb - 1);
        setCurrIndex(0);
    }
    function addNewQuote(text,auteur) {
        let nb = currLength;
            addQuote(text,auteur);
            setCurrLength(nb+1);
            setCurrIndex(nb);
    }

  return (
      <div>
        <h1>
          Citations :
        </h1>
          {jsxQuote}
       <p>Nombre de citations : {getNumberQuotes()}</p>
       <button onClick={() => response(-1)}>Précédent</button>
       <button onClick={() => response(1) }>Suivant</button>
       <button className={"suppr"} onClick={() => del() }>Supprimer</button>
          <Form addNewQuote={addNewQuote}/>
      </div>
  );

}

export default App;
