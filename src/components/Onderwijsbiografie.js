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
                Ik ben opgegroeid met maar 1 echte norm: Waarden zijn belangrijker dan normen.<br/>
                Zoals ik het zie Zijn normen manieren waarop je waarden kunt uiten. Zo kan je bijvoorbeeld respect aantonen door u te zeggen i.p.v. je of jij.
                Met deze gedachtegang heb ik er voor gekozen om normen verder niet meer centraal te zetten en te focussen op waarden en overtuigingen.
                Hieronder volg daarom een lijst waarin de waarden die ik het meest belangrijk vind zullen staan. Hierbij heb ik ook een beschrijving gegeven. 
                Deze wordt getoond wanneer er op de balk van de waarde wordt geklikt. Hierin kunt u lezen welke situatie mij deze waarde heeft geleerd of juist
                getoond heeft waarom deze waarde zo belangrijk is voor mij en/of voor mij om door te geven aan leerlingen/naasten.
            </p>
            <ul class="Waarden">
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Veiligheid")}>Veiligheid</button>
                    <div id="Veiligheid" class="content">
                        Veiligheid gaat voor alles. Waarom vind ik veiligheid zo belangrijk? Zolang 
                        er geen veiligheid aanwezig is kan er niet geleerd worden. Dit geld voor op 
                        school maar ook het leven daar omheen. Op school heb ik niks anders geleerd 
                        dan dat je eerst moet denken aan veiligheidsvoorschriften. In de praktische 
                        vakken zoals handvaardigheid of scheikunde, om er maar 2 te noemen, is dit 
                        het eerste dat mij geleerd is omdat er anders een grote kans bestaat dat er 
                        blijvend letsel opgelopen wordt. Niemand wilt dit dus dan leren we hoe we 
                        het gereedschap op een goede manier kunnen gebruiken. Dit is daarom ook de 
                        rede dat ik deze kennis over probeer te brengen op anderen maar ook zelf 
                        zo veel mogelijk probeer mee te nemen in mijn overwegingen.
                    </div>
                </li>
                <li>
                    <button type="button" class="collapsible" onClick={() => ShowContent("Respect")}>Respect</button>
                    <div id="Respect" class="content">
                    Respect is de nummer 2 in mijn lijst van meest belangrijke waarden. Deze waarde 
                    heeft heel veel verschillende uitingsvormen waardoor het lastig is om alles 
                    hiervan te omvatten in enkele woorden. Zoals ik het zie bestaat respect uit 
                    2 delen: respect hebben voor iets of iemand en het tonen hiervan. Het hebben 
                    van respect voor iets of iemand hoeft niet te betekenen dat je het ook toont 
                    en visa versa. Omdat het niet gepaard hoeft te gaan is het vaak lastig om zeker 
                    te zijn van een anders intentie. In Nederland is het de norm dat je een ander 
                    aankijkt als die met je praat. Echt is dit niet in elk land of cultuur het 
                    zelfde. Zo heb ik meerdere klasgenoten gehad die Arabische invloeden hebben 
                    gehad in hun opvoeding waardoor ze je niet aankijken wanneer je ze gaat 
                    corrigeren. Zij kijken dan naar beneden terwijl Nederlanders dit dan opvatten 
                    als respectloos gedrag. Omdat ik me hiervan bewust ben heb ik meerdere normen 
                    die elkaar lijken tegen te spreken maar eigenlijk afhangen van de afkomst en 
                    opvoeding van anderen. Van Nederlanders verwacht ik bijvoorbeeld dat ze mij 
                    aankijken en van andere landen/culturen verwacht ik dit niet en tast ik eerst 
                    af hoe zij respect tonen in die situaties.
                    </div>
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