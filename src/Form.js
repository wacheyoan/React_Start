import React from 'react';

export default function Form(props) {
    function responseSubmit(e) {
        e.preventDefault();
        let text = document.querySelector("input:first-child").value;
        let auteur = document.querySelector("input:nth-child(2)").value;

        props.addNewQuote(text,auteur);
        document.querySelector('form').reset();

    }

    return(
        <form onSubmit={e =>responseSubmit(e)}>
            Texte : <input/>
            Auteur : <input/>
            <button type="submit">Envoyer</button>
        </form>
    );
}