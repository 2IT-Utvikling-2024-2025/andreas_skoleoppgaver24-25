import "./css/text.css"

export default function Text(){

    return(

        <>

      <h1>Koble PC-er sammen</h1>
      <div id="Oppgave">
        <h2>Oppgave beskrivelse</h2>
        <p>Vi skal prøve å koble flere PC-er sammen med bruk av nettverkskabler og teste denne koblingen.</p>
      </div>
      <br />

      <div id="Planlegging">
        <h2>Planlegging</h2>
        <p>Det skal installeres en ny versjon av Windows 10 som erstatter den gamle versjonen.</p>
        <p>Navnstandaren som blir brukt her skal inneholde hvilket PC-nummer PC-en har og hvilken klasse den er fra. Disse to skal fordeles med en understrek. Basert på Navnstandaren skal vi kalle PC-en PC22_2ITA.</p>
        <p>Passordstandarden skal være lik skolens standard og vil derfor bli skole123</p>
        <p>IP adressene skal fordeles slikt at PC-en sin IP-adresse skal enten ligne PC nummeret eller at IP adressene skal deles på antall personer. Hvis IP-ene ikke kan ligne PC nummeret så skal de første IP-ene bli brukt til PC-en. Basert på denne Navnstandaren skal IP-en til PC-en være 192.168.1.22.</p>
        <p>Subnettmask standarden til PC-skal være enten 255.255.255.0 eller 255.255.255.248 avhengig av hvor mange IP adresser er tilgjengelige. Her bruker vi den andre for å følge standaren</p>
        <p>Disken skal deles opp i tre parsjoneringer, der Windows, Privat og Skole er på tre forskjellige parsjonerte disker. Windows skal få tilgang til 40Gb lagring, Privat bruk skal få tilgang til 100Gb og Skole bruk skal få tilgang til 90Gb.</p>
      </div>
      <br />

      <div id="Dokumentasjon">
        <h2>Dokumentasjon</h2>
        <p>Det ble installert Windows 10 ved bruk av en minnepen lastet ned fra en annen PC. Bios instillingene ble justert til å tillate både UEFIO/Legacy boot for å tillate installasjonen og for å unngå problemer.</p>
        <p>Når det ble spurt om språk så ble Norsk tastatur og Engelsk system innstillinger valgt for å kunne bruke PC-en sitt innebygde tastatur.</p>
        <p>Når det blir spurt om å oppgradere eller bytte så ble «bytte» valgt for å få et nytt system. Deretter vil vanlig Windows oppstart starte. Når spurt om PC navn så skal vi følge Navnstandaren og kalle den PC(nummer)_(klasse). Her er nummeret 22 og klassen 2ITA. Da vil den bli PC22_2ITA. </p>
        <p>Når Windows settupet var ferdig så ble IP innstillingene justert for å følge standarern. IP adressene skal fordeles slikt at PC-en sin IP-adresse skal enten ligne PC nummeret eller at IP adressene skal deles på antall personer. Hvis IP-ene ikke kan ligne PC nummeret så skal de første IP-ene bli brukt til PC-en. Basert på denne Navnstandaren skal IP-en til PC-en være 192.168.1.22 siden PC nummeret er 22 og vi har tilgang til denne IP-en.</p>
        <p>Subnettmasken ble også endret for å følge standaren. Subnettmask standarden til PC-skal være enten 255.255.255.0 eller 255.255.255.248 avhengig av hvor mange IP adresser er tilgjengelige. Her bruker vi den andre for å følge standaren mer korrekt. </p>
        <p>Hoveddisken ble pasjonert for å følge pasjonerings standarden. Disken ble delt opp i tre parsjoneringer, der Windows, Privat og Skole er på de tre forskjellige parsjonerte diskene. Windows skal få tilgang til 40Gb lagring, Privat bruk skal få tilgang til 100Gb og Skole bruk skal få tilgang til 90Gb.</p>
        <p>Det ble testet tilkoblingen til andre PC-er via nettverkskabler. Det måtte forandres innstillinger i Firewallen sånn at signalene ikke ble blokkert. Dette var «Echo request» regler og denne biten av Firewallen ble skrud av. Nå burde Ping komandoen fungere og pakker burde kunne komme forbi Firewallen.</p>
        <p>Deretter ble programvaren Filezilla lastet ned. Både klient versjonen og server versjonen ble lastet ned slik at vi kan kommunisere begge veier. En ny bruker ble lagt inn fra server siden slik at klient siden hadde noe å koble seg til med. Port nummer 2000 ble valgt på serversiden for å følge standaren med å ha lette tall å huske.</p>
        <p>Flere regler ble fjernet fra Firewallen sånn at filer kunne bli overført over Filezilla. Disse reglene skrudde av Firewallen på de portene FileZilla brukte.</p>
        <p>En egen mappe ble laget for å overføre FileZilla filer og ble kalt FTP_overføring.</p>
      </div>
      <br />

      <div id="Refleksjon">
        <h2>Refleksjon</h2>
        <p>Dette har vært en veldig interessant oppgave med en del valg som jeg ikke helt har vist hvordan jeg skal fullføre, men jeg har lært veldig mye i løpet av oppgaven. Jeg har aldri lastet ned et Operativsystem før, bare aktivert noen. Så det var gøy og vanskelig å gjøre dette for første gang. Jeg fikk en del hjelp av Kevin og Svein med akkurat dette så jeg slapp å søke opp så mye. Jeg skulle egentlig ønske at jeg fant ut av mer selv, men det tror jeg ikke at jeg hadde tid til. </p>
        <p>Jeg skulle egentlig partisjonere disken sånn at jeg kunne dele opp hvor ting ble lagret og for å lage et bedre system, men jeg greide å gå forbi det steget i installasjonen. Når jeg kom til det steget så trodde jeg den bare spurte hvor den skulle plassere OS-et, men jeg fant ut seinere at det var her man egentlig skulle partisjonere disken. Så da har jeg lært hvor det er, sånn at jeg ikke hopper over det seinere. Der var heldigvis mulig å gjøre dette fra Windows så jeg fikk gjort dette på en litt annen måte, men det fungerte. Så nå vet jeg hvordan man pasjonerer disker. Dette er også første gang jeg har partisjonert en disk.</p>
        <p>Når jeg valgte subnet masken så brukte jeg den jeg var best kjent med som er 255.255.255.0. Etter at jeg ble ferdig med dette så fant jeg ut at jeg kunne ha tenkt meg mer om før jeg valgte subnet mask. Vi har bare 19 totale IP adresser å velge mellom og en del av dem går til Nahuel. Så vi har ikke så særlig mange IP adresser. Derfor så byttet jeg til 248 istedenfor 0 siden det passer mye bedre med antallet. Jeg kunne ha tenkt meg litt mer om før jeg valgte subnettmasken, men heldigvis så kunne jeg forandre den flere ganger.</p>
        <p>Tiden var også veldig vanskelig å opprettholde. Det føltes ut som at vi hadde altfor liten tid, men jeg tror jeg fikk gjort en del med den tiden vi hadde.</p>
        <p>Fokuset kunne nokk vært litt bedre til tider, men jeg tror det gikk relativt bra gjennom hele oppgaven. Det var litt vanskelig å holde fokuset gjennom nesten en hel onsdag. Det ble veldig mye arbeid til tider og jeg ble rett og slett sliten. Så jeg tokk meg pauser selv innimellom for å roe ned hodet. Jeg snakket også en del med lærerne for å få fram info over hvordan jeg skal sette opp dette dokumentet og nettsiden. Jeg snakket mest med Tobias og han var til stor hjelp, men jeg snakket også litt med Carina og Joakim. Uten å snakke med lærerne så tror jeg at jeg hadde skrevet altfor mye og ikke greid fristen. Så det var fint å få hjelp til å kutte ned teksten for å både sparetid og for å spare andre som skal lese denne teksten. </p>
        <p>Hadde jeg gjort denne oppgaven igjen så er det nok en del ting jeg ville ha gjort annerledes. En av dem er å planlegge mer før jeg startet og passe mer på hvor mye tid jeg bruker på ting. Tiden var det jeg slet mest med og jeg vet at jeg kunne ha organisert det bedre. Jeg tror også at jeg ville gitt megselv litt mer pusterom med å ikke gjøre for mye på en gang. Jeg er veldig flink til å starte på altfor mange ting samtidig som gjør at jeg mister fokuset og ikke vet hvor jeg er. Dette er noe jeg må bli bedre på.</p>
        </div>
        <br />

      <div id="Brukerveiledning">
        <h2>Brukerveiledning</h2>
        <p>Først åpne «Windows Defender Firewall» appen. Deretter gå inn på advanced settings. Dette vil åpne et nytt vindu, her klikker du Inbound rules for å bytte regler for innkommende data. </p>
        <p>Lag en ny regel og velg custom rule. Velg den filen du vil endre (la være blank hvis hele pcen skal bli påvirket). På neste side må du velge hvilken protokoll (regel) du vil endre. F.eks hvis du vil endre noe med IP adresser må du velge ICMPv4 protokollen.</p>
        <p>Velg hvilke IP-adresser som skal påvirkes eller fortsett til neste. De neste sidene spør om hvor og når denne regelen skal fungere. Velg det som passer det du prøver å gjennomføre.</p>
        <p>Til slutt så må du velge et beskrivende navn på den nye regelen din.</p>
        <p>Gratulerer, du har forandret Firewall-en din med å skru av forskjellige funksjoner. Hvis du vil skru den på igjen så kan du fjerne regelen igjen. </p>
      </div>
    </>
    )
}