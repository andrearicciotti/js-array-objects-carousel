# Esercizio

---

## Testo dell' Esercizio

Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione

Creare un carosello come nella foto allegata.

- Milestone 0:
Partite riprendendo il markup fatto nello slider precedente. Inserite HTML statico nella pagina, modificatelo in modo da inserire il titolo e testi, e verificate che si presenti correttamente.

- Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

- Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per 
l'ultima miniatura se l'utente clicca la freccia verso sinistra.
- BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

- BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

- BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

---

## Algoritmo di svolgimento

**1. Scaffolding HTML**

- Creo scaffolding HTML per poi rimuoverlo e inserirlo successivamente in modo dinamico con JS.

**2. Logica del programma**

- Rimuovo markup, creo array di oggetti letterali e poi reinserisco tutto dinamicamente.

- Creo eventListener sui click delle frecce per cambiare immagine,
Aggiungo ciclo infinito per lo slider immagini.