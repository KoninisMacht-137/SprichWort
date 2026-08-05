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
}
//Hier neue einfügen!
];
