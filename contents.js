const contents = [
      {
        type: "Sprichwort",
        icon: "📜",
        title: "Zwischen Zeilen",
        text: "Manche Antworten stehen nicht im Text, sondern im Raum zwischen zwei Gedanken.",
        mood: "warm & nachdenklich"
      },
      {
        type: "Geschichte",
        icon: "🕯️",
        title: "Die kleine Pause",
        text: "Ein Mensch blieb stehen, nur für einen Atemzug. In dieser Sekunde holte ihn sein Leben ein und flüsterte: „Du machst das gut.“",
        mood: "ruhig & tröstlich"
      },
      {
        type: "Gedicht",
        icon: "🖋️",
        title: "Zwischen Morgen und Nacht",
        text: "Ein Funken Licht im frühen Grau, \nEin leiser Mut, fast unsichtbar. \nDu trägst ihn mit dir, Tag für Tag – \nund merkst erst spät: Er war immer da.",
        mood: "poetisch & sanft"
      },
      {
        type: "Gedanke",
        icon: "✨",
        title: "Leise Wunder",
        text: "Vielleicht ist das größte Wunder des Tages, dass du ihn überhaupt bewusst wahrnimmst.",
        mood: "inspirierend & still"
      },
      {
        type: "Sprichwort",
        icon: "📜",
        title: "Der zweite Blick",
        text: "Was im ersten Moment gewöhnlich wirkt, trägt oft im zweiten Blick ein kleines Geheimnis.",
        mood: "neugierig & mild"
      },
      {
        type: "Geschichte",
        icon: "🌙",
        title: "Die Nachtidee",
        text: "Spät am Abend schrieb jemand einen Gedanken auf einen Zettel. Am Morgen war er noch da – und plötzlich wichtig.",
        mood: "mystisch & ruhig"
      },
      {
        type: "Gedicht",
        icon: "🧩",
        title: "Unfertig",
        text: "Du bist kein fertiges Bild, \nkein klarer letzter Satz. \nDu bist ein offener Entwurf – \nund genau das macht dich lebendig.",
        mood: "ermutigend & ehrlich"
      },
      {
        type: "Gedanke",
        icon: "🌱",
        title: "Kleine Schritte",
        text: "Nicht jeder Tag muss groß sein. Manchmal reicht es, wenn er ein kleines Stück Richtung „Du selbst“ geht.",
        mood: "sanft & hoffnungsvoll"
      },
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der sanfte Anfang",
  text: "Jeder große Schritt beginnt mit einem Gedanken, der kaum hörbar war.",
  mood: "ruhig & warm"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der stille Raum",
  text: "Zwischen zwei Entscheidungen liegt oft der Ort, an dem du klar siehst.",
  mood: "nachdenklich & mild"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der kleine Mut",
  text: "Mut ist selten laut. Meistens ist er ein stiller Gedanke, der bleibt.",
  mood: "sanft & ehrlich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der zweite Blick",
  text: "Manches wirkt erst gewöhnlich, bis du ein zweites Mal hinsiehst.",
  mood: "neugierig & weich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der wandernde Funke",
  text: "Ein Gedanke, der dich heute findet, hat vielleicht lange nach dir gesucht.",
  mood: "mystisch & warm"
},

{
  type: "Geschichte",
  icon: "🕯️",
  title: "Der kleine Schatten",
  text: "Ein Mensch bemerkte seinen Schatten erst, als die Sonne tiefer stand. Da merkte er, wie weit er schon gekommen war.",
  mood: "ruhig & reflektierend"
},
{
  type: "Geschichte",
  icon: "🌙",
  title: "Der Nachtbesuch",
  text: "Spät am Abend klopfte ein Gedanke an. Er sagte nichts – aber er blieb, und das reichte.",
  mood: "mystisch & still"
},
{
  type: "Geschichte",
  icon: "🪶",
  title: "Der leichte Wind",
  text: "Ein Windstoß wehte einen Zettel davon. Darauf stand ein Wunsch, den jemand fast vergessen hatte.",
  mood: "zart & hoffnungsvoll"
},
{
  type: "Geschichte",
  icon: "🧭",
  title: "Der verlorene Weg",
  text: "Jemand ging einen falschen Weg – und fand dort etwas, das er auf dem richtigen nie gesehen hätte.",
  mood: "sanft & überraschend"
},
{
  type: "Geschichte",
  icon: "🔥",
  title: "Die Funkenstille",
  text: "Ein Feuer brannte fast aus. Doch ein einziger Funke blieb – und reichte, um alles neu zu entfachen.",
  mood: "warm & ermutigend"
},

{
  type: "Gedicht",
  icon: "🖋️",
  title: "Morgengrau",
  text: "Im ersten Licht, so still und klar,\nsteht ein Gedanke neben dir.\nEr sagt nicht viel, doch wird dir wahr:\nDu bist genau jetzt hier.",
  mood: "poetisch & ruhig"
},
{
  type: "Gedicht",
  icon: "🧩",
  title: "Stück für Stück",
  text: "Ein kleines Teil, ein leiser Ton,\nein Schritt, der kaum zu sehen.\nDoch irgendwann ergibt es Sinn –\ndu musst nur weitergehen.",
  mood: "sanft & ermutigend"
},
{
  type: "Gedicht",
  icon: "🌫️",
  title: "Zwischen Nebel",
  text: "Ein Hauch von Licht im stillen Grau,\nein Atemzug, so weich und schlau.\nDu findest Wege, die du nie sahst –\nwenn du den Nebel kurz vertraust.",
  mood: "mystisch & weich"
},
{
  type: "Gedicht",
  icon: "🌱",
  title: "Wachstum",
  text: "Du wächst nicht laut, du wächst im Stillen.\nIn kleinen Schritten, sanften Willen.\nUnd irgendwann, ganz ohne Plan,\nbist du ein Stück mehr du als gestern.",
  mood: "hoffnungsvoll & warm"
},
{
  type: "Gedicht",
  icon: "💫",
  title: "Funkenflug",
  text: "Ein Funken springt, ein Herz wird weit.\nEin kleines Licht, ein bisschen Zeit.\nSo wird ein Tag, ganz unbemerkt,\nzu etwas, das in dir noch wirkt.",
  mood: "poetisch & sanft"
},

{
  type: "Gedanke",
  icon: "✨",
  title: "Der erste Ton",
  text: "Vielleicht beginnt dein Tag nicht mit dem Wecker, sondern mit dem ersten freundlichen Gedanken.",
  mood: "warm & inspirierend"
},
{
  type: "Gedanke",
  icon: "🌱",
  title: "Sanfte Richtung",
  text: "Du musst nicht wissen, wohin du gehst. Es reicht, wenn du weißt, wie du gehen willst.",
  mood: "ruhig & klar"
},
{
  type: "Gedanke",
  icon: "🌙",
  title: "Der stille Lehrer",
  text: "Manche Tage lehren dich nichts Neues – aber erinnern dich an etwas Wichtiges.",
  mood: "still & weise"
},
{
  type: "Gedanke",
  icon: "🪄",
  title: "Kleine Wunder",
  text: "Wunder sind selten laut. Meistens sind sie ein Gefühl, das du erst später verstehst.",
  mood: "mystisch & sanft"
},
{
  type: "Gedanke",
  icon: "🌤️",
  title: "Der warme Rand",
  text: "Jeder Tag hat einen warmen Rand. Manchmal musst du ihn nur ein bisschen suchen.",
  mood: "weich & hoffnungsvoll"
},
{
  type: "Gedanke",
  icon: "🔮",
  title: "Der Blick",
  text: "Wenn du heute anders schaust, wird die Welt vielleicht anders antworten.",
  mood: "nachdenklich & offen"
},
{
  type: "Gedanke",
  icon: "🕊️",
  title: "Der Moment",
  text: "Vielleicht ist dieser Moment gerade wichtiger, als du denkst.",
  mood: "still & bedeutungsvoll"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der sanfte Funke",
  text: "Ein Gedanke muss nicht laut sein, um etwas in dir zu entzünden.",
  mood: "ruhig & warm"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der stille Blick",
  text: "Manchmal sieht man mehr, wenn man einen Moment länger hinsieht.",
  mood: "nachdenklich & mild"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der wandernde Mut",
  text: "Mut wandert oft leise — aber er findet dich immer wieder.",
  mood: "sanft & ehrlich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der Atem der Zeit",
  text: "Zeit heilt nicht alles, aber sie macht vieles leichter zu tragen.",
  mood: "weich & weise"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der kleine Schritt",
  text: "Ein kleiner Schritt kann ein großer Anfang sein.",
  mood: "hoffnungsvoll & klar"
},

{
  type: "Geschichte",
  icon: "🕯️",
  title: "Der vergessene Zettel",
  text: "Jemand fand einen alten Zettel mit einem Wunsch darauf. Er war klein — aber plötzlich wieder wichtig.",
  mood: "ruhig & warm"
},
{
  type: "Geschichte",
  icon: "🌙",
  title: "Der Mondbesuch",
  text: "In einer stillen Nacht setzte sich ein Gedanke neben jemanden. Er sagte nichts — und doch veränderte er etwas.",
  mood: "mystisch & sanft"
},
{
  type: "Geschichte",
  icon: "🪶",
  title: "Der leichte Schritt",
  text: "Ein Mensch ging ohne Ziel spazieren. Als er zurückkam, hatte er eines.",
  mood: "zart & klar"
},
{
  type: "Geschichte",
  icon: "🧭",
  title: "Der verlorene Plan",
  text: "Ein Plan ging schief — und machte Platz für etwas Besseres.",
  mood: "sanft & überraschend"
},
{
  type: "Geschichte",
  icon: "🔥",
  title: "Der letzte Funke",
  text: "Ein Feuer war fast erloschen. Doch ein einziger Funke blieb — und reichte, um alles neu zu entfachen.",
  mood: "warm & ermutigend"
},

{
  type: "Gedicht",
  icon: "🖋️",
  title: "Morgenlicht",
  text: "Ein erster Ton im frühen Licht,\nso leise, dass man ihn fast nicht hört.\nDoch wer ihn spürt, vergisst ihn nicht —\ner macht den Tag ein wenig mehr.",
  mood: "poetisch & ruhig"
},
{
  type: "Gedicht",
  icon: "🧩",
  title: "Stück für Stück",
  text: "Ein kleines Teil, ein leiser Klang,\nein Schritt, der kaum zu sehen.\nDoch irgendwann ergibt es Sinn —\ndu musst nur weitergehen.",
  mood: "sanft & ermutigend"
},
{
  type: "Gedicht",
  icon: "🌫️",
  title: "Nebelpfad",
  text: "Ein Hauch von Licht im stillen Grau,\nein Atemzug, so weich und schlau.\nDu findest Wege, die du nie sahst —\nwenn du dem Nebel kurz vertraust.",
  mood: "mystisch & weich"
},
{
  type: "Gedicht",
  icon: "🌱",
  title: "Leises Wachstum",
  text: "Du wächst nicht laut, du wächst im Stillen.\nIn kleinen Schritten, sanften Willen.\nUnd irgendwann, ganz ohne Plan,\nbist du ein Stück mehr du als gestern.",
  mood: "hoffnungsvoll & warm"
},
{
  type: "Gedicht",
  icon: "💫",
  title: "Funkenflug",
  text: "Ein Funken springt, ein Herz wird weit.\nEin kleines Licht, ein bisschen Zeit.\nSo wird ein Tag, ganz unbemerkt,\nzu etwas, das in dir noch wirkt.",
  mood: "poetisch & sanft"
},
{
  type: "Gedanke",
  icon: "✨",
  title: "Der erste Ton",
  text: "Vielleicht beginnt dein Tag nicht mit dem Wecker, sondern mit dem ersten freundlichen Gedanken.",
  mood: "warm & inspirierend"
},
{
  type: "Gedanke",
  icon: "🌱",
  title: "Sanfte Richtung",
  text: "Du musst nicht wissen, wohin du gehst. Es reicht, wenn du weißt, wie du gehen willst.",
  mood: "ruhig & klar"
},
{
  type: "Gedanke",
  icon: "🌙",
  title: "Der stille Lehrer",
  text: "Manche Tage lehren dich nichts Neues — aber erinnern dich an etwas Wichtiges.",
  mood: "still & weise"
},
{
  type: "Gedanke",
  icon: "🪄",
  title: "Kleine Wunder",
  text: "Wunder sind selten laut. Meistens sind sie ein Gefühl, das du erst später verstehst.",
  mood: "mystisch & sanft"
},
{
  type: "Gedanke",
  icon: "🌤️",
  title: "Der warme Rand",
  text: "Jeder Tag hat einen warmen Rand. Manchmal musst du ihn nur ein bisschen suchen.",
  mood: "weich & hoffnungsvoll"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der ruhige Kern",
  text: "In jedem Sturm gibt es einen Ort, der still bleibt.",
  mood: "ruhig & tief"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der kleine Trost",
  text: "Ein leises Wort kann mehr heilen als ein lauter Satz.",
  mood: "sanft & tröstlich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der Blick zurück",
  text: "Manchmal sieht man erst rückwärts, wie weit man gekommen ist.",
  mood: "reflektierend & warm"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der offene Raum",
  text: "Zwischen zwei Gedanken liegt oft die beste Idee.",
  mood: "klar & ruhig"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der kleine Frieden",
  text: "Frieden beginnt selten groß — meistens beginnt er in dir.",
  mood: "still & weich"
},

{
  type: "Geschichte",
  icon: "🕯️",
  title: "Der verlorene Klang",
  text: "Ein Mensch hörte lange keinen schönen Klang mehr. Eines Tages hörte er einen — und merkte, wie sehr er ihn vermisst hatte.",
  mood: "warm & sanft"
},
{
  type: "Geschichte",
  icon: "🌙",
  title: "Der Mondstein",
  text: "Ein Kind fand einen Stein, der im Mondlicht glitzerte. Es war nur ein Stein — aber der Moment war magisch.",
  mood: "mystisch & weich"
},
{
  type: "Geschichte",
  icon: "🪶",
  title: "Der leichte Brief",
  text: "Jemand schrieb einen Brief an sich selbst. Er war kurz — aber genau richtig.",
  mood: "zart & ehrlich"
},
{
  type: "Geschichte",
  icon: "🧭",
  title: "Der neue Weg",
  text: "Ein Mensch verirrte sich. Doch der neue Weg fühlte sich plötzlich richtiger an als der alte.",
  mood: "sanft & hoffnungsvoll"
},
{
  type: "Geschichte",
  icon: "🔥",
  title: "Die Funkenruhe",
  text: "Ein Feuer brannte ruhig. Es war nicht groß — aber es wärmte genau genug.",
  mood: "warm & still"
},

{
  type: "Gedicht",
  icon: "🖋️",
  title: "Zwischen zwei Atemzügen",
  text: "Zwischen zwei Atemzügen\nliegt ein stiller Ort.\nDort sitzt dein Frieden\nund wartet auf Besuch.",
  mood: "poetisch & ruhig"
},
{
  type: "Gedicht",
  icon: "🧩",
  title: "Unfertig",
  text: "Du bist kein fertiges Bild,\nkein klarer letzter Satz.\nDu bist ein offener Entwurf —\nund genau das macht dich lebendig.",
  mood: "sanft & ehrlich"
},
{
  type: "Gedicht",
  icon: "🌫️",
  title: "Nachtfaden",
  text: "Ein Faden Licht im Abendgrau,\nein stiller Wunsch, so leicht und schlau.\nEr folgt dir heimlich durch die Nacht\nund hält dich warm, wenn niemand wacht.",
  mood: "mystisch & warm"
},
{
  type: "Gedicht",
  icon: "🌱",
  title: "Kleine Schritte",
  text: "Nicht jeder Tag muss groß sein.\nManchmal reicht ein kleiner Schritt,\nder dich ein Stück näher zu dir bringt.",
  mood: "hoffnungsvoll & weich"
},
{
  type: "Gedicht",
  icon: "💫",
  title: "Leiser Mut",
  text: "Ein Funken Mut,\nso klein, so klar.\nEr bleibt bei dir —\nund macht dich wahr.",
  mood: "poetisch & sanft"
},

{
  type: "Gedanke",
  icon: "✨",
  title: "Der Funken",
  text: "Ein Funken Inspiration ist kein Feuerwerk. Er ist ein Anfang.",
  mood: "ruhig & klar"
},
{
  type: "Gedanke",
  icon: "🌱",
  title: "Der kleine Schritt",
  text: "Nicht jeder Schritt muss groß sein. Wichtig ist nur, dass er deiner ist.",
  mood: "sanft & ehrlich"
},
{
  type: "Gedanke",
  icon: "🌙",
  title: "Der Moment",
  text: "Vielleicht ist dieser Moment gerade wichtiger, als du denkst.",
  mood: "still & bedeutungsvoll"
},
{
  type: "Gedanke",
  icon: "🪄",
  title: "Der Blickwechsel",
  text: "Wenn du heute anders schaust, wird die Welt vielleicht anders antworten.",
  mood: "nachdenklich & offen"
},
{
  type: "Gedanke",
  icon: "🌤️",
  title: "Der weiche Anfang",
  text: "Manchmal beginnt ein guter Tag damit, dass du dir selbst freundlich begegnest.",
  mood: "warm & sanft"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der ruhige Anfang",
  text: "Ein Tag beginnt nicht mit dem Licht, sondern mit dem ersten Gedanken.",
  mood: "ruhig & warm"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der kleine Frieden",
  text: "Frieden entsteht selten laut — meistens beginnt er in dir.",
  mood: "still & weich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der wandernde Blick",
  text: "Wer anders schaut, sieht oft mehr als erwartet.",
  mood: "klar & mild"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der stille Mut",
  text: "Mut ist oft ein Gedanke, den du niemandem erzählst.",
  mood: "sanft & ehrlich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der warme Schatten",
  text: "Auch ein Schatten zeigt, dass Licht in der Nähe ist.",
  mood: "weich & tröstlich"
},
{
  type: "Geschichte",
  icon: "🕯️",
  title: "Der vergessene Traum",
  text: "Ein Mensch erinnerte sich an einen Traum, den er längst verloren glaubte. Plötzlich war er wieder möglich.",
  mood: "warm & hoffnungsvoll"
},
{
  type: "Geschichte",
  icon: "🌙",
  title: "Der Nachtfunke",
  text: "In einer stillen Nacht erschien ein Gedanke, der sich wie ein kleiner Stern anfühlte.",
  mood: "mystisch & sanft"
},
{
  type: "Geschichte",
  icon: "🪶",
  title: "Der leichte Schritt",
  text: "Jemand ging ohne Ziel los. Als er zurückkam, wusste er, was ihm gefehlt hatte.",
  mood: "zart & klar"
},
{
  type: "Geschichte",
  icon: "🧭",
  title: "Der neue Pfad",
  text: "Ein Mensch verirrte sich — und fand einen Weg, der besser passte als der geplante.",
  mood: "sanft & überraschend"
},
{
  type: "Geschichte",
  icon: "🔥",
  title: "Der Funkenrest",
  text: "Ein Feuer war fast aus. Doch ein kleiner Funken blieb — und reichte für einen Neuanfang.",
  mood: "warm & ermutigend"
},

{
  type: "Gedicht",
  icon: "🖋️",
  title: "Morgenfaden",
  text: "Ein Faden Licht im frühen Grau,\nso leise, dass man ihn kaum sieht.\nDoch wer ihn spürt, der weiß genau:\nEr trägt den Tag ein kleines Stück.",
  mood: "poetisch & ruhig"
},
{
  type: "Gedicht",
  icon: "🧩",
  title: "Zwischenstück",
  text: "Ein kleiner Ton, ein leiser Klang,\nein Schritt, der kaum zu sehen.\nDoch irgendwann ergibt es Sinn —\ndu musst nur weitergehen.",
  mood: "sanft & ermutigend"
},
{
  type: "Gedicht",
  icon: "🌫️",
  title: "Nebellicht",
  text: "Ein Licht im Nebel, kaum zu sehen,\nund doch genug, um weiterzugehen.\nSo findet man den stillen Pfad,\nauch wenn man ihn noch nicht versteht.",
  mood: "mystisch & weich"
},
{
  type: "Gedicht",
  icon: "🌱",
  title: "Wachstum im Stillen",
  text: "Du wächst im Stillen, Tag für Tag,\nin kleinen Schritten, die niemand sah.\nDoch irgendwann, ganz ohne Plan,\nbist du ein Stück mehr du als gestern.",
  mood: "hoffnungsvoll & warm"
},
{
  type: "Gedicht",
  icon: "💫",
  title: "Leiser Funken",
  text: "Ein Funken springt, ein Herz wird weit.\nEin kleines Licht, ein bisschen Zeit.\nSo wird ein Tag, ganz unbemerkt,\nzu etwas, das in dir noch wirkt.",
  mood: "poetisch & sanft"
},

{
  type: "Gedanke",
  icon: "✨",
  title: "Der erste Gedanke",
  text: "Vielleicht beginnt dein Tag mit dem Gedanken, der dich freundlich begrüßt.",
  mood: "warm & inspirierend"
},
{
  type: "Gedanke",
  icon: "🌱",
  title: "Der kleine Schritt",
  text: "Nicht jeder Schritt muss groß sein. Wichtig ist nur, dass er deiner ist.",
  mood: "sanft & ehrlich"
},
{
  type: "Gedanke",
  icon: "🌙",
  title: "Der stille Moment",
  text: "Manchmal ist der wichtigste Moment des Tages der, den du fast übersehen hättest.",
  mood: "still & bedeutungsvoll"
},
{
  type: "Gedanke",
  icon: "🪄",
  title: "Der Blickwechsel",
  text: "Wenn du heute anders schaust, wird die Welt vielleicht anders antworten.",
  mood: "nachdenklich & offen"
},
{
  type: "Gedanke",
  icon: "🌤️",
  title: "Der weiche Anfang",
  text: "Ein guter Tag beginnt oft damit, dass du dir selbst freundlich begegnest.",
  mood: "warm & sanft"
},

{
  type: "Sprichwort",
  icon: "📜",
  title: "Der stille Funken",
  text: "Ein Funken kann ein Feuer werden — wenn du ihm Raum gibst.",
  mood: "ruhig & warm"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der kleine Mut",
  text: "Mut beginnt oft mit einem Gedanken, den du niemandem erzählst.",
  mood: "sanft & ehrlich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der weiche Blick",
  text: "Wer weich schaut, sieht oft klarer.",
  mood: "mild & ruhig"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der offene Raum",
  text: "Zwischen zwei Gedanken liegt oft die beste Idee.",
  mood: "klar & ruhig"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der warme Kern",
  text: "In jedem Menschen gibt es einen Ort, der warm bleibt.",
  mood: "weich & tröstlich"
},
{
  type: "Geschichte",
  icon: "🕯️",
  title: "Der vergessene Klang",
  text: "Ein Mensch hörte lange keinen schönen Klang mehr. Eines Tages hörte er einen — und merkte, wie sehr er ihn vermisst hatte.",
  mood: "warm & sanft"
},
{
  type: "Geschichte",
  icon: "🌙",
  title: "Der Mondpfad",
  text: "Ein Weg sah im Mondlicht anders aus — und plötzlich wusste jemand, wohin er wollte.",
  mood: "mystisch & ruhig"
},
{
  type: "Geschichte",
  icon: "🪶",
  title: "Der leichte Moment",
  text: "Ein Moment war so leicht, dass er fast übersehen wurde — und doch blieb er im Herzen.",
  mood: "zart & klar"
},
{
  type: "Geschichte",
  icon: "🧭",
  title: "Der neue Anfang",
  text: "Ein Mensch verlor seinen Plan — und fand einen Anfang, der besser passte.",
  mood: "sanft & hoffnungsvoll"
},
{
  type: "Geschichte",
  icon: "🔥",
  title: "Der Funkenblick",
  text: "Ein Blick auf ein kleines Licht reichte, um wieder Hoffnung zu spüren.",
  mood: "warm & still"
},
{
  type: "Gedicht",
  icon: "🖋️",
  title: "Zwischen Licht",
  text: "Zwischen Licht und Schatten\nliegt ein stiller Ort.\nDort wächst dein Mut,\nauch wenn du ihn nicht siehst.",
  mood: "poetisch & ruhig"
},
{
  type: "Gedicht",
  icon: "🧩",
  title: "Unvollendet",
  text: "Du bist kein fertiges Bild,\nkein klarer letzter Satz.\nDu bist ein offener Entwurf —\nund genau das macht dich lebendig.",
  mood: "sanft & ehrlich"
},
{
  type: "Gedicht",
  icon: "🌫️",
  title: "Nachtlicht",
  text: "Ein Licht im Dunkel, kaum zu sehen,\nund doch genug, um weiterzugehen.\nSo findet man den stillen Pfad,\nauch wenn man ihn noch nicht versteht.",
  mood: "mystisch & weich"
},
{
  type: "Gedicht",
  icon: "🌱",
  title: "Kleine Wege",
  text: "Nicht jeder Weg muss groß sein.\nManchmal reicht ein kleiner Pfad,\nder dich ein Stück näher zu dir bringt.",
  mood: "hoffnungsvoll & weich"
},
{
  type: "Gedicht",
  icon: "💫",
  title: "Leiser Trost",
  text: "Ein Wort, so weich wie Morgentau,\nlegt sich auf deine Sorgen.\nEs sagt nicht viel —\ndoch manchmal reicht genau das.",
  mood: "poetisch & sanft"
},

{
  type: "Gedanke",
  icon: "✨",
  title: "Der Funkenmoment",
  text: "Ein Moment muss nicht groß sein, um wichtig zu sein.",
  mood: "ruhig & klar"
},
{
  type: "Gedanke",
  icon: "🌱",
  title: "Der weiche Schritt",
  text: "Ein weicher Schritt kann ein harter Tag sein — und trotzdem richtig.",
  mood: "sanft & ehrlich"
},
{
  type: "Gedanke",
  icon: "🌙",
  title: "Der stille Funke",
  text: "Vielleicht ist der Gedanke, der dich heute findet, genau der richtige.",
  mood: "still & bedeutungsvoll"
},
{
  type: "Gedanke",
  icon: "🪄",
  title: "Der kleine Zauber",
  text: "Manchmal liegt der Zauber des Tages in etwas, das du fast übersehen hättest.",
  mood: "mystisch & sanft"
},
{
  type: "Gedanke",
  icon: "🌤️",
  title: "Der warme Blick",
  text: "Wenn du heute warm schaust, wird die Welt vielleicht weich antworten.",
  mood: "warm & sanft"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der stille Anfang",
  text: "Ein Tag beginnt selten laut — meistens mit einem Gedanken, der sich leise zeigt.",
  mood: "ruhig & warm"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der weiche Mut",
  text: "Mut muss nicht brüllen. Manchmal reicht ein kleines inneres Nicken.",
  mood: "sanft & ehrlich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der wandernde Funke",
  text: "Ein Funke Inspiration findet dich oft, wenn du nicht nach ihm suchst.",
  mood: "mystisch & mild"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der zweite Schritt",
  text: "Der erste Schritt ist Mut — der zweite ist Vertrauen.",
  mood: "klar & ruhig"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der kleine Trost",
  text: "Ein leises Wort kann mehr heilen als ein lauter Satz.",
  mood: "weich & tröstlich"
},

{
  type: "Geschichte",
  icon: "🕯️",
  title: "Der vergessene Funke",
  text: "Ein Mensch fand einen alten Gedanken wieder. Er war klein — aber plötzlich wieder wichtig.",
  mood: "warm & sanft"
},
{
  type: "Geschichte",
  icon: "🌙",
  title: "Der Mondschritt",
  text: "Im Mondlicht sah ein Weg anders aus — und plötzlich wusste jemand, wohin er wollte.",
  mood: "mystisch & ruhig"
},
{
  type: "Geschichte",
  icon: "🪶",
  title: "Der leichte Moment",
  text: "Ein Moment war so leicht, dass er fast übersehen wurde — und doch blieb er im Herzen.",
  mood: "zart & klar"
},
{
  type: "Geschichte",
  icon: "🧭",
  title: "Der neue Anfang",
  text: "Ein Mensch verlor seinen Plan — und fand einen Anfang, der besser passte.",
  mood: "sanft & hoffnungsvoll"
},
{
  type: "Geschichte",
  icon: "🔥",
  title: "Der Funkenblick",
  text: "Ein Blick auf ein kleines Licht reichte, um wieder Hoffnung zu spüren.",
  mood: "warm & still"
},
{
  type: "Gedicht",
  icon: "🖋️",
  title: "Zwischen Licht",
  text: "Zwischen Licht und Schatten\nliegt ein stiller Ort.\nDort wächst dein Mut,\nauch wenn du ihn nicht siehst.",
  mood: "poetisch & ruhig"
},
{
  type: "Gedicht",
  icon: "🧩",
  title: "Unvollendet",
  text: "Du bist kein fertiges Bild,\nkein klarer letzter Satz.\nDu bist ein offener Entwurf —\nund genau das macht dich lebendig.",
  mood: "sanft & ehrlich"
},
{
  type: "Gedicht",
  icon: "🌫️",
  title: "Nachtlicht",
  text: "Ein Licht im Dunkel, kaum zu sehen,\nund doch genug, um weiterzugehen.\nSo findet man den stillen Pfad,\nauch wenn man ihn noch nicht versteht.",
  mood: "mystisch & weich"
},
{
  type: "Gedicht",
  icon: "🌱",
  title: "Kleine Wege",
  text: "Nicht jeder Weg muss groß sein.\nManchmal reicht ein kleiner Pfad,\nder dich ein Stück näher zu dir bringt.",
  mood: "hoffnungsvoll & weich"
},
{
  type: "Gedicht",
  icon: "💫",
  title: "Leiser Trost",
  text: "Ein Wort, so weich wie Morgentau,\nlegt sich auf deine Sorgen.\nEs sagt nicht viel —\ndoch manchmal reicht genau das.",
  mood: "poetisch & sanft"
},
{
  type: "Gedanke",
  icon: "✨",
  title: "Der Funkenmoment",
  text: "Ein Moment muss nicht groß sein, um wichtig zu sein.",
  mood: "ruhig & klar"
},
{
  type: "Gedanke",
  icon: "🌱",
  title: "Der weiche Schritt",
  text: "Ein weicher Schritt kann ein harter Tag sein — und trotzdem richtig.",
  mood: "sanft & ehrlich"
},
{
  type: "Gedanke",
  icon: "🌙",
  title: "Der stille Funke",
  text: "Vielleicht ist der Gedanke, der dich heute findet, genau der richtige.",
  mood: "still & bedeutungsvoll"
},
{
  type: "Gedanke",
  icon: "🪄",
  title: "Der kleine Zauber",
  text: "Manchmal liegt der Zauber des Tages in etwas, das du fast übersehen hättest.",
  mood: "mystisch & sanft"
},
{
  type: "Gedanke",
  icon: "🌤️",
  title: "Der warme Blick",
  text: "Wenn du heute warm schaust, wird die Welt vielleicht weich antworten.",
  mood: "warm & sanft"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der stille Kern",
  text: "In jedem Sturm gibt es einen Ort, der still bleibt.",
  mood: "ruhig & tief"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der wandernde Mut",
  text: "Mut wandert oft leise — aber er findet dich immer wieder.",
  mood: "sanft & ehrlich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der warme Schatten",
  text: "Auch ein Schatten zeigt, dass Licht in der Nähe ist.",
  mood: "weich & tröstlich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der offene Raum",
  text: "Zwischen zwei Gedanken liegt oft die beste Idee.",
  mood: "klar & ruhig"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der weiche Klang",
  text: "Ein weicher Klang bleibt länger im Herzen als ein lauter.",
  mood: "mild & warm"
},
{
  type: "Geschichte",
  icon: "🕯️",
  title: "Der vergessene Klang",
  text: "Ein Mensch hörte lange keinen schönen Klang mehr. Eines Tages hörte er einen — und merkte, wie sehr er ihn vermisst hatte.",
  mood: "warm & sanft"
},
{
  type: "Geschichte",
  icon: "🌙",
  title: "Der Mondpfad",
  text: "Ein Weg sah im Mondlicht anders aus — und plötzlich wusste jemand, wohin er wollte.",
  mood: "mystisch & ruhig"
},
{
  type: "Geschichte",
  icon: "🪶",
  title: "Der leichte Brief",
  text: "Jemand schrieb einen Brief an sich selbst. Er war kurz — aber genau richtig.",
  mood: "zart & ehrlich"
},
{
  type: "Geschichte",
  icon: "🧭",
  title: "Der neue Weg",
  text: "Ein Mensch verirrte sich. Doch der neue Weg fühlte sich plötzlich richtiger an als der alte.",
  mood: "sanft & hoffnungsvoll"
},
{
  type: "Geschichte",
  icon: "🔥",
  title: "Die Funkenruhe",
  text: "Ein Feuer brannte ruhig. Es war nicht groß — aber es wärmte genau genug.",
  mood: "warm & still"
},
{
  type: "Gedicht",
  icon: "🖋️",
  title: "Zwischen zwei Atemzügen",
  text: "Zwischen zwei Atemzügen\nliegt ein stiller Ort.\nDort sitzt dein Frieden\nund wartet auf Besuch.",
  mood: "poetisch & ruhig"
},
{
  type: "Gedicht",
  icon: "🧩",
  title: "Unfertig",
  text: "Du bist kein fertiges Bild,\nkein klarer letzter Satz.\nDu bist ein offener Entwurf —\nund genau das macht dich lebendig.",
  mood: "sanft & ehrlich"
},
{
  type: "Gedicht",
  icon: "🌫️",
  title: "Nachtfaden",
  text: "Ein Faden Licht im Abendgrau,\nein stiller Wunsch, so leicht und schlau.\nEr folgt dir heimlich durch die Nacht\nund hält dich warm, wenn niemand wacht.",
  mood: "mystisch & warm"
},
{
  type: "Gedicht",
  icon: "🌱",
  title: "Kleine Schritte",
  text: "Nicht jeder Tag muss groß sein.\nManchmal reicht ein kleiner Schritt,\nder dich ein Stück näher zu dir bringt.",
  mood: "hoffnungsvoll & weich"
},
{
  type: "Gedicht",
  icon: "💫",
  title: "Leiser Mut",
  text: "Ein Funken Mut,\nso klein, so klar.\nEr bleibt bei dir —\nund macht dich wahr.",
  mood: "poetisch & sanft"
},
{
  type: "Gedanke",
  icon: "✨",
  title: "Der Funken",
  text: "Ein Funken Inspiration ist kein Feuerwerk. Er ist ein Anfang.",
  mood: "ruhig & klar"
},
{
  type: "Gedanke",
  icon: "🌱",
  title: "Der kleine Schritt",
  text: "Nicht jeder Schritt muss groß sein. Wichtig ist nur, dass er deiner ist.",
  mood: "sanft & ehrlich"
},
{
  type: "Gedanke",
  icon: "🌙",
  title: "Der Moment",
  text: "Vielleicht ist dieser Moment gerade wichtiger, als du denkst.",
  mood: "still & bedeutungsvoll"
},
{
  type: "Gedanke",
  icon: "🪄",
  title: "Der Blickwechsel",
  text: "Wenn du heute anders schaust, wird die Welt vielleicht anders antworten.",
  mood: "nachdenklich & offen"
},
{
  type: "Gedanke",
  icon: "🌤️",
  title: "Der weiche Anfang",
  text: "Manchmal beginnt ein guter Tag damit, dass du dir selbst freundlich begegnest.",
  mood: "warm & sanft"
},

{
  type: "Sprichwort",
  icon: "📜",
  title: "Der stille Funke",
  text: "Ein Funken kann ein Feuer werden — wenn du ihm Raum gibst.",
  mood: "ruhig & warm"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der kleine Mut",
  text: "Mut beginnt oft mit einem Gedanken, den du niemandem erzählst.",
  mood: "sanft & ehrlich"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der weiche Blick",
  text: "Wer weich schaut, sieht oft klarer.",
  mood: "mild & ruhig"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der offene Raum",
  text: "Zwischen zwei Gedanken liegt oft die beste Idee.",
  mood: "klar & ruhig"
},
{
  type: "Sprichwort",
  icon: "📜",
  title: "Der warme Kern",
  text: "In jedem Menschen gibt es einen Ort, der warm bleibt.",
  mood: "weich & tröstlich"
},

{
  type: "Geschichte",
  icon: "🕯️",
  title: "Der vergessene Klang",
  text: "Ein Mensch hörte lange keinen schönen Klang mehr. Eines Tages hörte er einen — und merkte, wie sehr er ihn vermisst hatte.",
  mood: "warm & sanft"
},
{
  type: "Geschichte",
  icon: "🌙",
  title: "Der Mondpfad",
  text: "Ein Weg sah im Mondlicht anders aus — und plötzlich wusste jemand, wohin er wollte.",
  mood: "mystisch & ruhig"
},
{
  type: "Geschichte",
  icon: "🪶",
  title: "Der leichte Moment",
  text: "Ein Moment war so leicht, dass er fast übersehen wurde — und doch blieb er im Herzen.",
  mood: "zart & klar"
},
{
  type: "Geschichte",
  icon: "🧭",
  title: "Der neue Anfang",
  text: "Ein Mensch verlor seinen Plan — und fand einen Anfang, der besser passte.",
  mood: "sanft & hoffnungsvoll"
},
{
  type: "Geschichte",
  icon: "🔥",
  title: "Der Funkenblick",
  text: "Ein Blick auf ein kleines Licht reichte, um wieder Hoffnung zu spüren.",
  mood: "warm & still"
},
{
  type: "Special",
  icon: "✧",
  title: "Etwas ganz besonderes",
  text: "Du warst sehr aufmerksam, behalte das bei... Der Entwickler",
  mood: "unerwartet"
},
{ type: "GESCHICHTE", title: "Der leise Regentropfen", mood: "weich & klar", emoji: "💧", text: "Ein Tropfen fiel vom Himmel und traf genau den Menschen, der ihn brauchte." },
{ type: "SPRICHWORT", title: "Der stille Mut", mood: "ruhig & tief", emoji: "🪨", text: "Mut beginnt dort, wo niemand klatscht." },
{ type: "GEDICHT", title: "Windfaden", mood: "sanft & hell", emoji: "🌬️", text: "Ein Faden Wind im Morgengrau, ein kleiner Gruß der Ferne." },
{ type: "MOMENT", title: "Der verlorene Schatten", mood: "mystisch & weich", emoji: "🌑", text: "Ein Schatten löste sich vom Boden und folgte jemandem, der sich allein fühlte." },
{ type: "GESCHICHTE", title: "Der warme Atem", mood: "ruhig & warm", emoji: "🔥", text: "Ein Tier atmete ruhig neben einem Menschen — und beide fühlten sich weniger allein." },
{ type: "SPRICHWORT", title: "Der kleine Funke", mood: "klar & hell", emoji: "✨", text: "Ein Funke reicht, wenn du ihn siehst." },
{ type: "GEDICHT", title: "Mondglas", mood: "mystisch & leise", emoji: "🌙", text: "Ein Glas voll Mondlicht, still und klar." },
{ type: "MOMENT", title: "Der vergessene Pfad", mood: "sanft & offen", emoji: "🪵", text: "Ein Pfad zeigte sich erst, als jemand stehen blieb." },
{ type: "GESCHICHTE", title: "Der Stein im Wasser", mood: "ruhig & tief", emoji: "🪨", text: "Ein Stein sank ins Wasser und nahm eine Sorge mit sich." },
{ type: "SPRICHWORT", title: "Der ruhige Anfang", mood: "sanft & klar", emoji: "🌅", text: "Manchmal beginnt das Wichtigste ohne Geräusch." },
{ type: "GESCHICHTE", title: "Der goldene Faden", mood: "warm & weich", emoji: "🧵", text: "Ein Faden Licht verband zwei Menschen, die sich nicht kannten." },
{ type: "SPRICHWORT", title: "Der Atem der Zeit", mood: "tief & ruhig", emoji: "⏳", text: "Zeit spricht leise, aber deutlich." },
{ type: "GEDICHT", title: "Sonnenkorn", mood: "hell & warm", emoji: "☀️", text: "Ein Korn Sonne im Taschenlicht." },
{ type: "MOMENT", title: "Der stille Blick", mood: "weich & offen", emoji: "👁️", text: "Ein Blick traf einen anderen — und beide wussten es." },
{ type: "GESCHICHTE", title: "Der wandernde Funke", mood: "klar & mystisch", emoji: "⚡", text: "Ein Funke sprang von einer Idee zur nächsten und fand seinen Platz." },
{ type: "SPRICHWORT", title: "Der Schritt ins Leise", mood: "sanft & tief", emoji: "👣", text: "Wer leise geht, hört mehr." },
{ type: "GEDICHT", title: "Abendlicht", mood: "weich & warm", emoji: "🌇", text: "Ein Licht, das den Abend trägt." },
{ type: "MOMENT", title: "Der verlorene Duft", mood: "mild & weich", emoji: "🌸", text: "Ein Duft erinnerte jemanden an etwas, das nie passiert war." },
{ type: "GESCHICHTE", title: "Der kleine Kreis", mood: "klar & ruhig", emoji: "⭕", text: "Ein Kreis wurde gezogen — und jemand fand darin Ruhe." },
{ type: "SPRICHWORT", title: "Der sanfte Klang", mood: "weich & hell", emoji: "🔔", text: "Nicht jeder Klang ist für alle bestimmt." },
{ type: "GESCHICHTE", title: "Der wandernde Schatten", mood: "mystisch & ruhig", emoji: "🌘", text: "Ein Schatten suchte einen neuen Besitzer und fand ihn im Morgenlicht." },
{ type: "SPRICHWORT", title: "Der stille Funkenflug", mood: "klar & weich", emoji: "🕊️", text: "Funken fliegen auch ohne Feuer." },
{ type: "GEDICHT", title: "Wasseratem", mood: "ruhig & tief", emoji: "🌊", text: "Ein Atemzug im Wasser, schwerelos und klar." },
{ type: "MOMENT", title: "Der warme Wind", mood: "hell & sanft", emoji: "🍃", text: "Ein Wind strich über eine Hand und nahm eine Sorge mit." },
{ type: "GESCHICHTE", title: "Der vergessene Stein", mood: "weich & warm", emoji: "🪨", text: "Ein Stein lag im Gras und wartete auf jemanden, der ihn bemerkte." },
{ type: "SPRICHWORT", title: "Der Blick nach innen", mood: "tief & ruhig", emoji: "🧘", text: "Wer nach innen schaut, findet außen mehr." },
{ type: "GEDICHT", title: "Schattenfaden", mood: "mystisch & weich", emoji: "🕸️", text: "Ein Faden Schatten im Morgenlicht." },
{ type: "MOMENT", title: "Der stille Schritt", mood: "sanft & klar", emoji: "🚶‍♂️", text: "Ein Schritt wurde gemacht, ohne dass jemand es hörte." },
{ type: "GESCHICHTE", title: "Der wandernde Klang", mood: "weich & offen", emoji: "🎵", text: "Ein Klang suchte ein Ohr und fand ein Herz." },
{ type: "SPRICHWORT", title: "Der ruhige Funke", mood: "klar & mild", emoji: "💫", text: "Ein Funke muss nicht laut sein." },
{ type: "GESCHICHTE", title: "Der kleine Mond", mood: "mystisch & weich", emoji: "🌙", text: "Ein kleiner Mond spiegelte sich in einer Pfütze und machte sie besonders." },
{ type: "SPRICHWORT", title: "Der Atem des Mutes", mood: "tief & warm", emoji: "🔥", text: "Mut atmet langsam." },
{ type: "GEDICHT", title: "Lichtfeder", mood: "hell & weich", emoji: "🪶", text: "Eine Feder aus Licht, die den Tag berührt." },
{
        type: "GESCHICHTE",
        title: "Der wandernde Lichtpunkt",
        mood: "sanft & hell",
        emoji: "✨",
        text: "Ein kleiner Lichtpunkt wanderte über die Wand eines alten Hauses. Niemand wusste, woher er kam. Doch jedes Mal, wenn er erschien, blieb jemand stehen und lächelte. Der Lichtpunkt schien zu wissen, wen er besuchen musste – und wann ein stiller Moment gebraucht wurde."
    },
    {
        type: "SPRICHWORT",
        title: "Der Atem des Morgens",
        mood: "frisch & ruhig",
        emoji: "🌅",
        text: "Der Morgen atmet zuerst in dir, bevor er die Welt berührt. Wer diesen Atem spürt, geht leichter durch den Tag."
    },
    {
        type: "GEDICHT",
        title: "Schattenlied",
        mood: "mystisch & weich",
        emoji: "🌘",
        text: "Ein Schatten singt im Abendlicht, ein Ton, den nur die Stille spricht. Er wandert leise durch dein Herz und lässt dort einen kleinen Schmerz – der sich verwandelt, wenn du ruhst, in etwas Warmes, das dich küsst."
    },
    {
        type: "MOMENT",
        title: "Der warme Stein im Gras",
        mood: "weich & warm",
        emoji: "🪨",
        text: "Ein Stein lag im Gras, von der Sonne gewärmt. Jemand hob ihn auf und spürte, wie die Wärme durch die Hand wanderte. Für einen Augenblick fühlte sich die Welt leichter an – als hätte der Stein ein Stück Sommer gespeichert."
    },
    {
        type: "GESCHICHTE",
        title: "Der verlorene Klang",
        mood: "ruhig & tief",
        emoji: "🎵",
        text: "Ein Musiker verlor einen Ton. Er suchte überall – in seinen Instrumenten, in seinen Gedanken, sogar im Wind. Erst als er aufhörte zu suchen, hörte er ihn wieder. Der Ton war nie weg gewesen. Er hatte nur gewartet, bis der Musiker bereit war, ihn zu hören."
    },
    {
        type: "SPRICHWORT",
        title: "Der Schritt durch die Stille",
        mood: "sanft & klar",
        emoji: "👣",
        text: "Wer durch die Stille geht, findet Wege, die Lärm niemals zeigt."
    },
    {
        type: "GEDICHT",
        title: "Federlicht",
        mood: "hell & weich",
        emoji: "🪶",
        text: "Eine Feder fällt, so leicht, so still. Sie weiß nicht, wohin sie will. Doch wo sie landet, bleibt ein Hauch von Frieden – ein kleiner Gruß aus sanften Zeiten."
    },
    {
        type: "MOMENT",
        title: "Der Blick zum Himmel",
        mood: "klar & offen",
        emoji: "☁️",
        text: "Ein Mensch sah in den Himmel und bemerkte eine Wolke, die aussah wie ein Herz. Für einen Moment fühlte er sich verbunden mit etwas Größerem – als hätte der Himmel ihm zugezwinkert."
    },
    {
        type: "GESCHICHTE",
        title: "Der wandernde Faden",
        mood: "mystisch & warm",
        emoji: "🧵",
        text: "Ein Faden wanderte durch die Luft, als hätte er ein eigenes Ziel. Er legte sich auf die Schulter eines Menschen, der gerade Trost brauchte. Niemand verstand, wie ein Faden trösten konnte – aber der Mensch fühlte sich plötzlich weniger allein."
    },
    {
        type: "SPRICHWORT",
        title: "Der Funke im Dunkel",
        mood: "tief & ruhig",
        emoji: "💫",
        text: "Auch im tiefsten Dunkel wartet ein Funke darauf, gesehen zu werden."
    },

    {
        type: "GESCHICHTE",
        title: "Der kleine Mondstein",
        mood: "mystisch & weich",
        emoji: "🌙",
        text: "Ein Kind fand einen Stein, der im Mondlicht glitzerte. Es nahm ihn mit nach Hause und legte ihn unter sein Kissen. In dieser Nacht träumte es von einem Ort, an dem jeder Gedanke ein kleines Licht war. Am Morgen war der Stein nicht mehr besonders – aber der Traum blieb."
    },
    {
        type: "SPRICHWORT",
        title: "Der Atem der Ruhe",
        mood: "sanft & tief",
        emoji: "🌫️",
        text: "Ruhe ist nicht die Abwesenheit von Geräusch, sondern die Anwesenheit von Frieden."
    },
    {
        type: "GEDICHT",
        title: "Wasserlied",
        mood: "ruhig & klar",
        emoji: "🌊",
        text: "Das Wasser singt ein leises Lied, das nur der hört, der langsam geht. Es trägt dich fort, es trägt dich heim – und macht dein Herz ein wenig fein."
    },
    {
        type: "MOMENT",
        title: "Der warme Windstoß",
        mood: "hell & weich",
        emoji: "🍃",
        text: "Ein Windstoß strich über die Haut eines Menschen und erinnerte ihn an einen Sommer, den er fast vergessen hatte. Für einen Moment war alles wieder leicht."
    },
    {
        type: "GESCHICHTE",
        title: "Der wandernde Kreis",
        mood: "klar & ruhig",
        emoji: "⭕",
        text: "Ein Kreis wurde in den Sand gezeichnet. Der Wind verwischte ihn, doch jemand zeichnete ihn erneut. So entstand ein stilles Spiel zwischen Mensch und Natur – ein Spiel, das niemand gewann, aber beide beruhigte."
    },
    {
        type: "SPRICHWORT",
        title: "Der Blick ins Weiche",
        mood: "mild & warm",
        emoji: "🌸",
        text: "Weiches trägt weiter als Hartes – denn Weiches passt sich an."
    },
    {
        type: "GEDICHT",
        title: "Mondatem",
        mood: "mystisch & ruhig",
        emoji: "🌙",
        text: "Der Mond atmet leise ein, und plötzlich fühlt sich alles klein. Doch in der Kleinheit liegt ein Licht, das durch die Dunkelheit bricht."
    },
    {
        type: "MOMENT",
        title: "Der verlorene Ton",
        mood: "sanft & offen",
        emoji: "🎶",
        text: "Ein Ton blieb im Raum hängen, als hätte er vergessen, wohin er wollte. Jemand hörte ihn – und fühlte sich verstanden."
    },
    {
        type: "GESCHICHTE",
        title: "Der wandernde Funken",
        mood: "hell & klar",
        emoji: "⚡",
        text: "Ein Funken sprang von einer Idee zur nächsten. Er suchte einen Menschen, der ihn festhalten konnte. Als er ihn fand, entstand etwas Neues – etwas, das vorher unmöglich schien."
    },
    {
        type: "SPRICHWORT",
        title: "Der Atem des Lichts",
        mood: "hell & ruhig",
        emoji: "🔆",
        text: "Licht atmet, wenn du es lässt."
    },

    {
        type: "GESCHICHTE",
        title: "Der wandernde Schattenflug",
        mood: "mystisch & weich",
        emoji: "🌘",
        text: "Ein Schatten löste sich vom Boden und flog über die Wiese. Er suchte jemanden, der ihn bemerkte. Als ein Mensch stehen blieb und lächelte, setzte sich der Schatten neben ihn – und beide fühlten sich weniger allein."
    },
    {
        type: "SPRICHWORT",
        title: "Der Funke im Morgen",
        mood: "hell & warm",
        emoji: "🌅",
        text: "Der Morgen trägt Funken, die nur der sieht, der früh genug aufsteht."
    },
    {
        type: "GEDICHT",
        title: "Sonnenfaden",
        mood: "warm & weich",
        emoji: "☀️",
        text: "Ein Faden Sonne im Wind, ein Gruß, der dich von innen findet."
    },
    {
        type: "MOMENT",
        title: "Der wandernde Ton",
        mood: "sanft & ruhig",
        emoji: "🎵",
        text: "Ein Ton wanderte durch den Raum und fand ein Ohr, das ihn brauchte."
    },
    {
        type: "GESCHICHTE",
        title: "Der stille Kreisflug",
        mood: "ruhig & klar",
        emoji: "⭕",
        text: "Ein Kreis flog durch die Luft und landete sanft auf der Hand eines Menschen. Er blieb dort – und der Mensch fühlte sich plötzlich leichter."
    },
    {
        type: "SPRICHWORT",
        title: "Der Blick ins Sanfte",
        mood: "weich & mild",
        emoji: "🌸",
        text: "Sanftes trägt weiter als Hartes."
    },
    {
        type: "GEDICHT",
        title: "Mondlichtfaden",
        mood: "mystisch & hell",
        emoji: "🌙",
        text: "Ein Faden Mondlicht im Dunkel, ein Gruß aus der Ferne."
    }
//Hier neue einfügen!
];
