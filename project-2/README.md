# Dokumentasjon for Prosjekt 2

Prosjekt 2 i emnet Webutvikling er en single page application skrevet i Typescript og med React som rammeverk. Dataen som er vist på nettsiden er hentet ved hjelp av REST API-et til GitLab. Når nye brukere går inn på siden må de logge inn med egen prosjekt id og access token. Disse senere blir brukt for å fremstille data til et spesifikt prosjekt. Applikasjonen har en header med knapper til alle medlemmene som har laget commits til prosjektet. Det blir vist alle commits som er gjort sortert på nyeste. Det er også et sektordiagram som visualiserer antall commits per person. Øverst på siden er det en knapp for hver person som har commit-et til prosjektet. Ved å trykke på et av navnene får man opp comittsene til den enkelte og et linjediagram som viser antall commits per dato.

**Struktur og klasse komponent** \
Den overordnede strukturen følger det som kommer fra React som rammeverk. scr mappen er delt inn i tre mapper.

1. Components – inneholder alle enkelte komponenter der daten blir fremvist.
2. Sections – inneholder hoveddeler til siden og inneholder gjerne flere komponenter fra components
3. Utils – her ligger filer som brukes til henting av data, disse filene bidrar ikke til det visuelle i applikasjonen.

Prosjektet har krav om at en komponent skal implementeres som en klasse. Denne komponenten heter DarkThemeComponent og gjør at fargene byttes når man trykker på darkmode knappen. Gruppas erfaring er at det er langt mer effektivt å benytte seg av funksjonelle komponenter i React etter at det Hooks ble lansert.

**Context API** \
Context APIer brukes for å slippe å sende props nedover treet og gjennom alle komponentene. Dette prosjektet er en relativ enkel singel-page-application og derfor har ikke nyttigheten til Context APIet blitt utnyttet til den grad det burde. Siden det var et krav har gruppen brukt det rundt app for å rendre hele nettsiden i darkmode.

**Innlasting av data fra GitLab, REST API**\
Gruppen har brukt biblioteket axios for å hente data fra endepunktene, som gjør det lettere å gjennomføre AJAX spørringer. Bruken av AJAX foregår i filen fetch.ts i mappen utils. Her eksporteres data som brukes av komponentene. axios.ts eksporterer en axios instans som gjør det lettere å hente spesifikke endepunkter til forskjellige prosjekt id og access tokens. Gruppen har kun brukt async/await for henting av data.

Det er bare lagt inn støtte for å hente ut de 100 siste commitene.

Følgende endepunkt har blitt benyttet for å hente data til applikasjonen:
https://gitlab.stud.idi.ntnu.no/api/v4/projects/

**Parametrisering av data**\
For å parametrisere data er det brukt filterfunksjonen til Javascript. Gruppen har valgt å ha egne knapper i headeren for hver bruker som har commit-et til prosjektet. Basert på knappene brukeren trykker på vil det vises data basert på den valgte personen.

**Jest tester**\
For å teste prosjektet er det brukt Jest tester til å teste komponenter og sanpshotttester for å siktre at UI komponenter ikke endres uforventet. Dette gjøres ved at den rendrer en komponent og lagrer en snapshot av den. Deretter blir det sammenlignet med det som blir oppgitt. Prosjektet har ikke et krav om omfanget av testing, og gruppen har derfor ikke prioritert å teste alt, men satt opp ulike tester for få forståelse av hvordan det gjøres. Testene kan kjøres ved npm run test.

**Testing av brukergrensesnitt**\
Prosjektets brukergrensesnitt er testet på tre ulike enheter: ipad Pro 11-tommer, iphone 12 pro og macbook pro 16-tommer. Det er lagt inn ulik logikk for visningen ut i fra størrelsen på skjermen, og det har blitt testet at siden er responsiv på flere skjermstørrelser. Nettsiden er testet fysisk på en iPhone og iPad, i tillegg til at den er utviklet på mac. I utviklingsprosessen har ulike skjermstørrelser vært testet i safari og google chrome gjennom inspiser vinduet. Her ble det testet for ulike enheter både i portrettmodus og landskapsmodus.

**Responsivt design**\
For å få et responsivt design på applikasjonen ble det det lagt inn støtte for ulike viewport i index.html-filen endret gruppen koden til meta name = ‘viewport’ og content til width-device-width, initial-scale=1. Dette gjør at siden tilpasses skjermstørrelsen.

Gruppen har brukt media queries for å definere egne innstillinger for sidens oppførsel i portrettmodus og landskapsmodus. Videre er det egne innstillinger for ulike størrelser på skjermer i landskapsmodus. Dette gjør at elementene plasseres på et egnet sted i forhold til skjermstørrelse og at grafene skaleres.

Iphone 12 Pro\
Når siden er i portrettmodus vil elementene legge seg under hverandre.
Elementene blir også skalert og midtstilt for mest mulig oversikt. I landskapsmodus vil grafene og commits-boksene være ved siden av hverandre. Det samme gjelder knappene. For øvrig vil disse legge seg under hverandre for at de ikke skal være utenfor viewet. Dette skjer fordi display: flex og flex: wrap har blitt brukt.

Ipad Pro 11-tommer\
I Portrettmodus vil en ipad oppføre seg likt som en iphone ettersom den tar inn innstillingene fra samme media query. For øvrig vil den få inn to kolonner med commits da skjermen er større. Grafene vil også være større. I landskapsmodus vil elementene ligge ved siden av hverandre. Sammenlignet med på en iphone vil alle knappene ligge ved siden av hverandre grunnet større plass.

Macbook Pro 16-tommer\
På en macbook pro med full visning av siden vil grafene ligge ved siden av commits-boksene, på samme måte som de andre enhetene i landskapsmodus. Ettersom det er mer plass, vil det bli vist tre kolonner med commits.Når vinduet blir minimert tilstrekkelig vil elementene legge seg under hverandre. I tillegg vil knappenes bredde utvides.

**Bruk av local storage og session storage**\
Gruppen valgt å benytte local storage og session storage til å lagre informasjon om innlogging, da sikkerhet ikke er fokus i dette prosjektet. Brukeren skriver inn prosjekt id og access token som lagres i local storage og brukes for å hente data fra endepunktene til GitLab rest API. Når brukeren legger inn data på innloggingssiden, sjekkes det om responskoden er 200, som betyr at det mottas data. Dersom responskoden er 200, vil session storage bli brukt for å lagre at innloggingen var vellykket og dermed holder brukeren pålogget.
