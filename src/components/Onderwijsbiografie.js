function ShowContent(idValue){
    var content = document.getElementById(idValue);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

export default function Onderwijsbiografie(){
    return(
        <>
            <h1>Eigen onderwijsbiografie</h1>
            <h2>Definities</h2>
            <dl>
                <dt>Normen</dt>
                <dd>Zijn de richtlijnen hoe je sociaal gewenst met elkaar omgaat</dd>
                <dt>Waarden</dt>
                <dd>Zijn de zaken die waardevol gevonden worden door iemand of een groep mensen</dd>
                <dt>Overtuigingen</dt>
                <dd>Dingen waarvan mensen denken dat ze waar zijn</dd>
            </dl>
            <h2>Levensloop</h2>
            <p>
                Om een korte introductie te geven van dit hoofdstuk zal ik beginnen met hoe ik tot deze uitkomst ben gekomen.
                De meeste mensen die ik ken laten normen aan waarden altijd in 1 zin vallen waardoor het niet altijd duidelijk
                kan zijn wat ze belangrijk vinden en wat ze nu echt bedoelen. Na goed na te denken heb ik kunnen concluderen dat
                Ik ben opgegroeid met eigenlijk maar 1 echte norm: Waarden zijn belangrijker dan normen.<br/>
                Zoals ik het zie Zijn normen manieren waarop je waarden kunt uiten. Zo kan je bijvoorbeeld respect aantonen door u te zeggen i.p.v. je of jij.
                Met deze gedachtengang heb ik er voor gekozen om normen verder niet meer centraal te zetten en te focussen op waarden en overtuigingen.
                Hieronder volg daarom een lijst waarin de waarden die ik het meest belangrijk vind zullen staan. Hierbij heb ik ook een beschrijving gegeven. 
                Deze wordt getoond wanneer er op de balk van de waarde wordt geklikt. Hierin kunt u lezen welke situatie mij deze waarde heeft geleerd of juist
                getoond heeft waarom deze waarde zo belangrijk is voor mij en/of voor mij om door te geven aan leerlingen/naasten.
            </p>
            <ul class="Waarden">
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Veiligheid")}>Veiligheid</button>
                    <div id="Veiligheid" class="content">Dit gaat over Veiligheid</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Respect")}>Respect</button>
                    <div id="Respect" class="content">Dit gaat over Respect</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Vriendelijkheid")}>Vriendelijkheid</button>
                    <div id="Vriendelijkheid" class="content">Dit gaat over Vriendelijkheid</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Verantwoordelijkheid")}>Verantwoordelijkheid</button>
                    <div id="Verantwoordelijkheid" class="content">Dit gaat over Verantwoordelijkheid</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Reputatie")}>Reputatie</button>
                    <div id="Reputatie" class="content">Dit gaat over Reputatie</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Motivatie")}>Motivatie</button>
                    <div id="Motivatie" class="content">Dit gaat over Motivatie</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Openheid")}>Openheid</button>
                    <div id="Openheid" class="content">Dit gaat over Openheid</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Vrijheid")}>Vrijheid</button>
                    <div id="Vrijheid" class="content">Dit gaat over Vrijheid</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Teamspirit")}>Teamspirit</button>
                    <div id="Teamspirit" class="content">Dit gaat over Teamspirit</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Eerlijkheid")}>Eerlijkheid</button>
                    <div id="Eerlijkheid" class="content">Dit gaat over Eerlijkheid</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Empathie")}>Empathie</button>
                    <div id="Empathie" class="content">Dit gaat over Empathie</div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Vrijgevig")}>Vrijgevig</button>
                    <div id="Vrijgevig" class="content">Dit gaat over Vrijgevig</div>
                </li>
            </ul>
        </>
    )
}