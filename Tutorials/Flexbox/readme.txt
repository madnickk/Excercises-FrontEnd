Elemente innerhalb des Parent Elements anordnen: 

Um Elemente anzuordnen, muss man das Parent-Element ansteuern. 
Hier wäre es das body Element

ändert man das Body-Element zu Display: flex; werden die Boxen nebeneinander angezeigt. Das Block und Inline System wird dann überschrieben. 

Das flex Box System arbeite basiert auf der Main-Achse (X-Achse) und Cross-Achse (Y-Achse). 

Ausrichtung an Main-Achse (Horizontal)
Justify-Content:    flex-start;     Anfang der Main-Achse, also links
                    flex-end;       Ende der Main-Achse, also rechts
                    center;         Mittig der Main-Achseend, in der Mitte, also dem Schnittpunkt

Ausrichtung an Cross-Achse (Vertikal)
align-items:        flex-start;     Anfang der Cross-Achse, also oben
                    flex-end;       Ende der Cross-Achse, also unten
                    center;         Anfang der Cross-Achse, also mittig

Mit align-self kann man auch direkt in die Boxen gehen und diese Positionieren. 

align-items, weil man mehrere Zeilen von Boxen haben haben. Und diese werden algined.

utzt man flex-Direction: columns, dann ändert sich auch die Cross-Achse. Um zu zentrieren nutzt man nun align-itmes, und nicht mehr justify content.
Flex-Direction ändert aöso die Richtung der Main-Achse.


gap: 
Mit gap erstellt man eine Lücke, ähnlich wie margin
Gap erstellt Lücken zwischen Zeilen udn Spalten, wärehend Margin Space um HTML-Elemente herum kreiert.

Gap kann ich row-gap und column-gap aufgeteilt werden, aber es geht auch nur mit gap. 


flex-wrap: 
macht die website respsonive. 
wrap: Elemente umfließen. 
nowrap: umfließen nicht. 

Bei flex-wrap: wrap entstehen große lücken zwischen den Zeilen. das liegt daran, dass jede Zeile ihre eigene Main-Ache und Cross-Achse besitzt. 
Man muss in diesem Fall also die Ausrichtung  anpassen.
Und hier kommt align-content ins spiel. 

align-content:
Hiermit bekommt dann die gesamte box Achsen, an denen sich alle ausrichten. 
So kann man Abstände zwischen zeilen harmonisieren.

align-itmes kontrolliert die Achsen der einzelnen flex-box reihen.




