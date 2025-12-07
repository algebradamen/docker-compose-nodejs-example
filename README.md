# Restaurant Tangen torv  


Du skal lage websider for restaurant Tangen Torv. Websidene skal inneholde informasjon om restauranten, meny, åpningstider, kontaktinformasjon etc. I tillegg skal det være mulig å bestille bord via en bestillingsside. Dataene for meny og bestillinger skal lagres i en database. Det skal være egne sider for de ansatte der de kan se og administrere bestillingene. Restaurant er åpen onsdag og torsdag fra kl. 12 til 14. Bordbestilling er åpen i kalenderen i det tidsslottet. 

### teknologi valg
Applikasjonen er laget med MariaDB og en express/node.js server applikasjon. Web sidene er programmert i html, css og JavaScript uten rammeverk. 

Vi har docker compose filen som kan starte opp MariaDB i en container, express applikasjon og websider i en annen container.

### Hvordan starte applikasjon:    
docker compose up  
  

#### bygge på nytt ved eventuelle endringer  
docker compse up --build

#### For å kjøre MariaDB trenger du en plugin i dette tilfelle brukte jeg en som heter:  
MySQL
Database Client
database-client.com

