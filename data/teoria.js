// ============================================================================
// APUNTES DE TEORÍA — Fundamentos de Podología (UCLM)
// Organizados por los mismos temas que el banco de preguntas (TEMAS en preguntas.js).
// Cada sección es HTML. Clases útiles:
//   <div class="clave">  → dato que cae en el test
//   <div class="trampa"> → pregunta trampa / error típico
//   <table class="tabla">, <mark>, <b>
// ============================================================================

const TEORIA = [
  // ==========================================================================
  {
    tema: "t2",
    intro: "Historia de la profesión, definiciones, anatomía básica del pie, competencias del podólogo y leyes. Son preguntas de memoria: fechas, nombres y números de ley.",
    secciones: [
      {
        titulo: "Fechas clave de la historia",
        html: `
<table class="tabla">
<tr><th>Fecha</th><th>Qué pasa</th></tr>
<tr><td>+4 millones de años</td><td>Huella de Tanzania: primer hallazgo que demuestra la evolución homínida.</td></tr>
<tr><td>2980-2700 a.C.</td><td><b>Papiro de Edwin Smith</b>: documento más antiguo con utensilios para el cuidado de los pies.</td></tr>
<tr><td>1857</td><td><b>Ley Moyano</b> (Isabel II): practicante en medicina y cirugía y «arte callista».</td></tr>
<tr><td><mark>1860</mark>-61</td><td>Se regulan los contenidos del callista: 4 semestres, anatomía, hemorragias y examen en un hospital.</td></tr>
<tr><td>1866 / 1877</td><td>Se reduce la formación (1866) y después desaparecen los estudios (1877).</td></tr>
<tr><td>1888 / 1902 / 1904</td><td>Nuevas regulaciones del practicante (cirugía menor y arte callista).</td></tr>
<tr><td>1923</td><td>Colegio Oficial de Practicantes en Medicina y Cirugía.</td></tr>
<tr><td>1945</td><td>Títulos de pedicuro y cirujano callista, con colegiación obligatoria.</td></tr>
<tr><td>1947</td><td>Diccionario Español Moderno: podología = «estudio de las afecciones del pie».</td></tr>
<tr><td>1950</td><td>El cirujano callista empieza a tributar.</td></tr>
<tr><td>1951-54</td><td>La Universidad de <b>Barcelona</b> da los primeros cursillos sobre enfermedades del pie.</td></tr>
<tr><td>1953</td><td>Practicante + matrona + enfermería = <b>ATS</b>.</td></tr>
<tr><td>1955</td><td>Escuela de Podología de Barcelona.</td></tr>
<tr><td><mark>1962</mark></td><td><b>Nace la especialidad de Podología</b> y la Federación Internacional de Podología.</td></tr>
<tr><td>1963</td><td>Reglamento de las Escuelas de Podología (adscritas a Medicina).</td></tr>
<tr><td>1966</td><td>Agrupación de Podólogos de España y primera Revista Española de Podología.</td></tr>
<tr><td>1978</td><td>Emancipación de los estudios de podología.</td></tr>
<tr><td>1988</td><td>Diplomatura: 3 años, 220-270 créditos.</td></tr>
<tr><td><mark>1989</mark></td><td>Formación universitaria (Universidad Complutense).</td></tr>
<tr><td>2009-2010</td><td><b>Grado</b> (EEES): 4 años, 240 créditos y acceso a tercer ciclo (doctorado).</td></tr>
<tr><td><mark>2019</mark></td><td>Grado en la <b>UCLM</b> (y en León).</td></tr>
</table>
<div class="clave">🎯 Las cuatro fechas que más caen: <b>callista 1860</b>, <b>especialidad 1962</b>, <b>universitaria 1989</b> y <b>UCLM 2019</b>.</div>
<div class="trampa">⚠️ ¿Por qué nace la especialidad en 1962? Porque se considera una profesión, describe su campo de actuación y tiene plena autonomía. No confundir con la unificación en ATS (1953) ni con la diplomatura (1988).</div>
`
      },
      {
        titulo: "Antigüedad y orígenes lejanos",
        html: `
<ul>
<li><b>Arquímedes</b> («Dadme un punto de apoyo y moveré el mundo»): la evolución del pie permitió el desarrollo del raciocinio. La profesora lo relaciona con la canción «Grande» de Gloria Trevi y Mónica Naranjo.</li>
<li><b>Leroi-Gourhan</b>: la liberación de las manos gracias al pie favoreció el desarrollo del cerebro.</li>
<li><b>Egipto</b>: sarcófagos con forma para recoger los pies; en la tumba de la reina Hetepheres aparecen utensilios para los pies.</li>
<li><b>Babilonia</b>: jardines colgantes de Semíramis, con plantas medicinales para los pies.</li>
<li><b>Grecia</b>:
  <ul>
  <li>Aquiles: su talón era el punto débil.</li>
  <li>Esculapio fue confiado al <b>centauro Quirón</b>, de donde viene «<b>quiropodología</b>»: técnicas manuales y conservadoras.</li>
  <li>En el templo de Asclepios había supervisores de la manicura real.</li>
  </ul></li>
<li><b>Roma</b>: el sello <b>L. SEXTILI CALLISTI</b> identificaba a un profesional del cuidado del pie. El emperador Antonino no salía a combatir hasta tener bien los pies.</li>
</ul>
<h4>Ordenación de las profesiones</h4>
<ul>
<li><b>Reyes Católicos</b>, tres tribunales:
  <ul>
  <li>Protomedicato: médicos.</li>
  <li>Protocirujanato: cirujanos.</li>
  <li><b>Protobarberato</b>: sangradores, ayudantes de cirujano, sacamuelas y barberos.</li>
  </ul></li>
<li><b>Felipe V</b>, tres tipos de cirujanos:
  <ul>
  <li>Toga larga (latinos): sangrías de forma autónoma.</li>
  <li>Toga corta (romancistas): auxiliares de los anteriores.</li>
  <li><b>Ministrantes o practicantes</b>: operaciones secundarias como callos y durezas. Son el antecedente del podólogo.</li>
  </ul></li>
</ul>
`
      },
      {
        titulo: "Definiciones: podología, callista, pedicuro…",
        html: `
<ul>
<li><b>Podología</b> (RAE y Ley 44/2003): «<mark>disciplina que tiene por objeto el estudio y cuidado del pie</mark>».</li>
<li><b>Podólogo</b>: quien tiene el título oficial para ejercer la podología.</li>
<li><b>Callista</b>: persona que se dedica a <b>cortar o extirpar y curar callos, uñeros y otras dolencias de los pies</b>.</li>
<li><b>Pedicuro</b>: tiene como oficio la pedicura.</li>
<li><b>Esteticista</b>: se dedica a la estética.</li>
<li><b>Podiatra</b>: persona que se dedica a la podología.</li>
</ul>
<div class="clave">🎯 «Cortar o extirpar y curar callos y uñeros» = <b>callista</b>. Si en el test pone «La RAE define podología como disciplina que…», la respuesta es <b>Verdadero</b>.</div>
`
      },
      {
        titulo: "Anatomía básica del pie",
        html: `
<ul>
<li>El pie tiene <b>28 huesos y 57 articulaciones</b>, según el temario.</li>
<li><b>Retropié</b>: calcáneo y astrágalo.</li>
<li><b>Mediopié</b>: <mark>escafoides (navicular), cuboides y las tres cuñas</mark>.</li>
<li><b>Antepié</b>: metatarsianos y falanges.</li>
<li><b>Radio</b> = metatarsiano + falanges del dedo. El <b>primer radio</b> son las falanges del primer dedo y el primer metatarsiano.</li>
<li>El <b>primer dedo (hallux) solo tiene falange proximal y distal</b>. Los demás dedos tienen proximal, media y distal.</li>
</ul>
<h4>Articulaciones que dividen el pie</h4>
<ul>
<li><b>Chopart</b>: entre retropié y mediopié.</li>
<li><b>Lisfranc</b>: entre mediopié y antepié.</li>
</ul>
<div class="trampa">⚠️ «La articulación de Lisfranc separa el mediopié del retropié» es <b>Falso</b>: esa es Chopart.</div>
<h4>Arcos</h4>
<ul>
<li><b>ALI</b> (arco longitudinal interno): calcáneo, astrágalo, navicular, 1ª cuña y 1º metatarsiano.</li>
<li><b>ALE</b> (arco longitudinal externo): calcáneo, cuboides y 5º metatarsiano (apófisis estiloides).</li>
<li><b>Transversal</b>: cabezas metatarsales.</li>
</ul>
<div class="clave">🎯 «¿Qué arcos forman el pie?» → <b>ALE, ALI y transversal</b> (la opción que incluye los tres).</div>
`
      },
      {
        titulo: "El podólogo: ubicaciones, capacidades y clínica",
        html: `
<h4>Dónde trabaja</h4>
<p>Clínicas y consultorios privados (también rurales), Sistema Nacional de Salud (unidad de pie diabético), clubes deportivos, infancia, empresas y mutuas, geriatría, hospitales, docencia, servicios sociales y centros de día.</p>
<div class="clave">🎯 Respuesta del Kahoot: «En un consultorio rural diagnosticando y tratando hiperqueratosis».</div>
<h4>Capacidades generales</h4>
<ul>
<li><b>Prevención</b>:
  <ul>
  <li>Primaria: evitar la enfermedad.</li>
  <li><b>Secundaria</b>: diagnóstico precoz, mientras la enfermedad es reversible.</li>
  <li>Terciaria: rehabilitación.</li>
  </ul></li>
<li><b>Diagnóstico</b>: determinar la patología con todos los medios disponibles. Es una <b>atribución profesional del podólogo</b>.</li>
<li>Pronóstico, tratamiento y rehabilitación.</li>
</ul>
<h4>Bases clínicas</h4>
<ul>
<li><b>Quiropodología</b>: piel y anejos, con tratamiento conservador y manual.
  <ul>
  <li>Hiperqueratosis: engrosamiento de la capa córnea (callo).</li>
  <li><b>Heloma</b>: cono con el vértice hacia dentro («ojo de gallo»).</li>
  <li>Sudoración: hiperhidrosis (exceso), anhidrosis (ausencia), <b>bromhidrosis</b> (exceso con mal olor).</li>
  <li>Tinea pedis (pie de atleta, por hongos) y papilomas (verrugas por <b>VPH</b>).</li>
  <li>Uñas: leuconiquia (blanca), <b>xantoniquia</b> (amarilla), onicomicosis (hongos), <b>onicolisis</b> (desprendimiento).</li>
  </ul></li>
<li><b>Ortopodología</b>: el enderezamiento del pie.
  <ul>
  <li>Ortesis: modifica la biomecánica.</li>
  <li>Prótesis: sustituye una parte del cuerpo.</li>
  <li><b>Férula</b>: inmoviliza.</li>
  </ul></li>
<li><b>Cirugía menor</b>: anestesia local, ambulatoria y normalmente sin reanimación.</li>
<li>Rehabilitación (electro-, hidro-, termo-, foto- y laserterapia) y farmacoterapia.</li>
</ul>
<h4>Áreas de una clínica podológica</h4>
<p>Quiropodología (gabinete o box), taller de ortopodología, sala de rayos, sala de exploración o biomecánica, y quirófano.</p>
<div class="trampa">⚠️ «¿Qué área NO hay?» → <b>Sala de ortología</b>, que no existe; no confundir con el taller de ortopodología.</div>
<h4>Carrera profesional</h4>
<ul>
<li>Pasado: arte popular.</li>
<li>Presente: profesional sanitario autónomo. Los podólogos españoles son los que tienen <b>más competencias clínicas de Europa</b>.</li>
<li>Futuro: investigación. El acceso al tercer ciclo impulsa el desarrollo científico (<b>Verdadero</b>).</li>
</ul>
<div class="trampa">⚠️ «NO fomentar la investigación es una cualificación podológica» → <b>Falso</b>. Fíjate en el «NO».</div>
<div class="clave">🎯 El guiño de ojo <b>no</b> es un rasgo paralingüístico: es un gesto (kinésica). Los paralingüísticos son el tono, el volumen y la velocidad de la voz.</div>
`
      },
      {
        titulo: "Legislación",
        html: `
<table class="tabla">
<tr><th>Norma</th><th>Para qué sirve</th></tr>
<tr><td><mark>Ley 44/2003</mark>, de 21 de noviembre</td><td><b>Ordenación de las profesiones sanitarias</b>. Reconoce al podólogo como profesional sanitario.</td></tr>
<tr><td>Ley 28/2009 (modifica la Ley 29/2006)</td><td>Garantías y uso racional del medicamento: el podólogo puede <b>recetar</b>.</td></tr>
<tr><td>RD 1277/2003</td><td>Bases generales para autorizar centros, servicios y establecimientos sanitarios.</td></tr>
<tr><td>Ley 16/2003</td><td>Define la unidad asistencial del podólogo.</td></tr>
<tr><td>Orden 26-10-2006 (Consejería de Sanidad)</td><td>Requisitos de los centros de podología. Es de carácter <b>autonómico</b>.</td></tr>
<tr><td>LO 15/1999 → <b>LO 3/2018</b></td><td>Protección de datos y garantía de los derechos digitales.</td></tr>
<tr><td><b>Ley 41/2002</b></td><td>Autonomía del paciente e información y documentación clínica. El art. 14 regula la historia clínica.</td></tr>
</table>
<div class="clave">🎯 La historia clínica es <b>propiedad del paciente</b> según el Kahoot; el centro la archiva y custodia.</div>
<div class="trampa">⚠️ Una Orden de una <b>Consejería</b> siempre es autonómica, no estatal.</div>
`
      }
    ]
  },

  // ==========================================================================
  {
    tema: "t31",
    intro: "Cómo evolucionó el pie hasta la bipedestación, en qué se diferencia del de los primates, su desarrollo embrionario y cuándo se osifica cada hueso.",
    secciones: [
      {
        titulo: "Bipedestación: cambios en rodilla, cadera y fémur",
        html: `
<ul>
<li><b>Rodilla</b>: en extensión el humano puede <mark>trabar la rodilla</mark> y gasta menos energía muscular.</li>
<li><b>Glúteo mediano</b>: sus fibras están en <mark>posición lateral</mark>, para equilibrar la cadera al adelantar la otra pierna.</li>
<li><b>Monos</b>: desplazan el cuerpo sobre la pierna de apoyo porque <mark>los ejes longitudinales de sus fémures son paralelos</mark> y sus glúteos y abductores están poco desarrollados.</li>
<li>En el humano, el tercio distal del fémur se inclina hacia la línea media y la cabeza del fémur es más robusta.</li>
</ul>
<h4>Otras adaptaciones a la bipedestación</h4>
<ul>
<li>Parte inferior de la columna curvada.</li>
<li>Miembros superiores liberados y acortados.</li>
<li>Manos con más libertad y precisión.</li>
<li>Pelvis más corta y ancha, con los ilíacos girados hacia dentro.</li>
<li>Miembros inferiores más largos.</li>
<li>Pie en plataforma.</li>
<li>El <b>tarso ocupa el 50%</b> de la longitud del pie.</li>
</ul>
<div class="trampa">⚠️ «¿Cuál NO es una adaptación?» → «<b>Disposición del foramen magnum más anterior a la base</b>», según la clave. Las otras tres (columna curvada, miembros superiores liberados y manos más precisas) sí lo son.</div>
<p class="muted">También: un 1,6% de diferencia genética con el homínido, primer cambio evolutivo hace 6-8 millones de años y yacimiento de Taung (1925).</p>
`
      },
      {
        titulo: "Pie humano frente a pie de primate",
        html: `
<table class="tabla">
<tr><th></th><th>Primate</th><th>Humano</th></tr>
<tr><td>Bóveda</td><td>No tiene: <mark>la cabeza del astrágalo, el escafoides y las cuñas contactan con el suelo</mark>.</td><td>Abovedado.</td></tr>
<tr><td>Talón</td><td>No apoya; calcáneo horizontal.</td><td>Recibe el peso. El <b>astrágalo se apoya sobre el calcáneo</b>.</td></tr>
<tr><td>Primer dedo</td><td>Separado y oponible; radio más corto.</td><td>Junto y paralelo a los demás.</td></tr>
<tr><td>Metatarsianos</td><td>Más largos que el tarso.</td><td>Misma longitud que el tarso.</td></tr>
<tr><td>Eje del pie</td><td>Entre el 1º y el 2º MTT.</td><td>Entre el 2º y el 3º MTT.</td></tr>
<tr><td>Tríceps sural</td><td>Poco desarrollado.</td><td>Potente, con tendón de Aquiles.</td></tr>
<tr><td>Peroneo lateral largo</td><td>Se inserta en el borde <b>externo</b>.</td><td>Cruza la planta hasta la <b>1ª cuña y el 1º MTT</b>.</td></tr>
<tr><td>Eje de los interóseos</td><td>Monos: 3º radio. Prosimios: 4º.</td><td><b>2º radio</b>.</td></tr>
</table>
<div class="trampa">⚠️ «Calcáneo superpuesto sobre el astrágalo» <b>NO es correcto</b>: es el astrágalo el que está sobre el calcáneo. Sustentaculum tali más horizontal y robusto y calcáneo más robusto sí son correctos.</div>
<div class="clave">🎯 <b>Tríceps sural</b>: «interviene de forma <b>pasiva</b> en mantener la posición erecta del hombre».<br>🎯 <b>Peroneo lateral largo</b>: «se inserta en la cara plantar de la <b>primera cuña y del primer metatarsiano</b>». Su función principal es mantener la bóveda, no la dorsiflexión.</div>
`
      },
      {
        titulo: "Tipos de pie: fórmula digital y metatarsal",
        html: `
<h4>Según la longitud de los dedos</h4>
<ul>
<li><b>Egipcio</b>: escalera descendente desde el 1º hasta el 5º.</li>
<li><b>Griego</b>: el <mark>2º dedo es el más largo</mark>. Patrón 1=3, 2&gt;3, 3&gt;4, 4&gt;5.</li>
<li><b>Cuadrado</b>: todos a la misma altura.</li>
</ul>
<h4>Según la longitud de los metatarsianos</h4>
<ul>
<li><b>Index plus minus</b>: <mark>todos los metatarsianos a la misma altura</mark>. Es la respuesta de la imagen del Kahoot.</li>
<li>Index minus e index plus son los equivalentes de egipcio y griego.</li>
</ul>
<div class="clave">🎯 «1=3, 4&gt;5, 3&gt;4, 2&gt;3» → <b>Griego</b>.</div>
`
      },
      {
        titulo: "Desarrollo embrionario (ontogenia)",
        html: `
<ul>
<li><b>Día 28</b> (estadio 13): engrosamiento del ectodermo. Los esbozos inferiores aparecen después que los superiores.</li>
<li>Estadios 15-16: forma de aleta y después de paleta.</li>
<li><b>Semana 5</b>: surcos que separan muslo, pierna y pie.</li>
<li><b>Semana 6</b>: placa pedía, visible a los <b>37 días</b>.
  <ul>
  <li>Día 41: condensaciones del tarso.</li>
  <li><b>Día 44</b>: rayos digitales y <b>rotación interna de 90º</b> del miembro.</li>
  </ul></li>
<li><b>Semana 7</b>: <mark>comienza la condrogénesis del mesénquima PROXIMAL</mark>. Patrón digital <b>3&gt;2&gt;1&gt;4&gt;5</b>.</li>
<li><b>Semana 8</b>: <mark>se condrifica el mesénquima DISTAL</mark>.
  <ul>
  <li><b>Día 51</b>: condrificación de cuñas y falanges.</li>
  <li>Día 54: hueso intermetatarsiano.</li>
  <li>Día 57: fin del desarrollo embrionario.</li>
  </ul></li>
<li>Hasta el <b>7º mes</b> la planta mira hacia medial y dorsal; entonces el pie se dobla en ángulo recto con la pierna.</li>
</ul>
<div class="trampa">⚠️ Las tres preguntas de verdadero o falso:<br>
«En la 8ª semana comienza la condrogénesis proximal» → <b>Falso</b> (es la 7ª).<br>
«En el día 52 se hace evidente la condrificación de las falanges distales» → <b>Falso</b> (es el día 51).<br>
«En la 8ª semana se condrifica el mesénquima distal» → <b>Verdadero</b>.</div>
<p class="muted">Filogenia: evolución de la especie. Ontogenia: desarrollo del individuo. Doctrinas: Lamarck («la función forma al órgano»), Darwin (selección natural), Linneo y Cuvier (inmutabilidad), Spencer (supervivencia de los mejor dotados).</p>
`
      },
      {
        titulo: "Osificación: cronología",
        html: `
<table class="tabla">
<tr><th>Hueso</th><th>Centro</th><th>Edad</th></tr>
<tr><td>Calcáneo</td><td>1º</td><td>5º mes fetal</td></tr>
<tr><td><b>Astrágalo</b></td><td>1º</td><td><mark>7º mes intrauterino</mark></td></tr>
<tr><td>Cuboides</td><td>1º</td><td>Nacimiento</td></tr>
<tr><td>Metatarsianos</td><td>1º</td><td>8 meses</td></tr>
<tr><td>Falange distal del 1er dedo</td><td>1º</td><td>9 semanas fetales</td></tr>
<tr><td>1º MTT / falange distal</td><td>2º</td><td>2 años y 4 meses</td></tr>
<tr><td>Escafoides</td><td>1º</td><td>3 años y 2 meses</td></tr>
<tr><td>2º MTT</td><td>2º</td><td>3 años y 2 meses</td></tr>
<tr><td>3º-5º MTT</td><td>2º</td><td>4 años</td></tr>
<tr><td>Calcáneo</td><td>2º</td><td>7 años y 2 meses</td></tr>
<tr><td>5ª falange media / distal</td><td>2º</td><td>8 años y 8 meses / 9 años y 6 meses</td></tr>
<tr><td><b>Sesamoideos</b></td><td>1º</td><td><mark>10 años y 4 meses</mark></td></tr>
</table>
<ul>
<li>Todos los huesos tienen un centro primario. <b>Solo las falanges, los metatarsianos y el calcáneo</b> tienen además un centro secundario.</li>
<li>El pie adulto se alcanza hacia los 21 años.</li>
</ul>
<div class="trampa">⚠️ Sesamoideos: «a partir de los <b>10 años y 4 meses</b>». La opción trampa es «4 años y 10 meses».</div>
`
      }
    ]
  },

  // ==========================================================================
  {
    tema: "t32",
    intro: "Cómo se reparte el peso en el pie, qué autor defiende cada teoría de apoyo, qué sostiene la bóveda plantar y cómo se interpreta la huella.",
    secciones: [
      {
        titulo: "Teorías de apoyo: quién dice qué",
        html: `
<h4>Teoría clásica (1º y 5º MTT): la más aceptada</h4>
<p>Tres puntos de apoyo: <b>1ª cabeza metatarsal, 5ª cabeza metatarsal y calcáneo</b>. La defienden anatomistas (Testut, Orts Llorca, Virchow, Fick, Strasser) y podólogos:</p>
<ul>
<li><b>Hohmann</b>.</li>
<li><b>Lelièvre</b>:
  <ul>
  <li>Puntos <b>inmediatos</b>: calcáneo, 1ª y 5ª cabeza.</li>
  <li>Puntos <b>mediatos</b>: el resto de metatarsianos durante la marcha.</li>
  </ul></li>
<li><b>Seitz</b>: el pie se ensancha unos 1 cm al apoyar. Separación entre metatarsianos:
  <ul>
  <li>1º-2º: <b>4 mm</b>.</li>
  <li>2º-3º: <b>2 mm</b>.</li>
  <li>3º-4º: <b>3 mm</b>.</li>
  <li>4º-5º: <b>1,5 mm</b>.</li>
  </ul></li>
</ul>
<h4>Teoría de los metatarsianos centrales</h4>
<table class="tabla">
<tr><th>Autor</th><th>Método</th><th>Conclusión</th></tr>
<tr><td><b>Meyer</b></td><td>Investigaciones propias</td><td>El <mark>3º MTT</mark> es el punto con más capacidad de sustentación.</td></tr>
<tr><td><b>Muskat</b></td><td>Fracturas</td><td>El <mark>2º MTT</mark> tiene más carga funcional.</td></tr>
<tr><td><b>Beelly</b></td><td>Desgaste del zapato y huellas en yeso</td><td>El 2º y el 3º MTT.</td></tr>
<tr><td><b>Momburg</b></td><td>Huellas en tierra</td><td>El 2º y el 3º MTT.</td></tr>
<tr><td><b>Morton</b></td><td>Estaticómetro</td><td>Una parte por cada MTT y <b>dos</b> para el 1º.</td></tr>
</table>
<div class="clave">🎯 «¿Qué autores concluyen que el 2º y 3º MTT tienen más carga?» → <b>Momburg y Beelly</b>.<br>🎯 «¿Quién dice que el 3º MTT tiene más capacidad?» → <b>Meyer</b>.</div>
<div class="trampa">⚠️ «Morton describe que solo recibe peso el 1º y 5º MTT y el talón» → <b>Falso</b>. Morton reparte entre todos los metatarsianos.</div>
<p>Hoy se acepta que <b>todos</b> los metatarsianos y el talón apoyan. En dinámica la carga varía según el momento de la marcha.</p>
`
      },
      {
        titulo: "Estabilidad de la bóveda plantar",
        html: `
<p>La bóveda se sostiene gracias a <mark>los ligamentos, los músculos y la arquitectura ósea</mark> («todas las anteriores»). Participan todos los músculos <b>excepto el tríceps sural</b>.</p>
<ul>
<li>Hasta unos <b>100 kg</b> la sostienen el hueso y los ligamentos; por encima entran en juego los músculos.</li>
<li><b>Hueso clave de la bóveda: el escafoides (navicular)</b>. En el Kahoot, «escafoides» y «navicular» eran ambas correctas porque son el mismo hueso.</li>
<li>La 2ª cuña da consistencia al arco. El <b>cuboides</b> contacta con 5 huesos: calcáneo, navicular, 3ª cuña, 4º y 5º MTT.</li>
</ul>
<h4>Ligamentos</h4>
<ul>
<li><b>Deltoideo</b> (de la tibia al calcáneo y al astrágalo): <mark>evita que el astrágalo y el escafoides basculen hacia DENTRO</mark>.</li>
<li>Calcáneo-cuboideo y cuboideo-metatarsiano: si están elongados, la bóveda desciende (pie plano infantil).</li>
</ul>
<h4>Músculos</h4>
<ul>
<li><b>Peroneo lateral largo</b>: da estabilidad anteroposterior.</li>
<li><b>Aductor del primer dedo</b>, con sus dos cabezas, oblicua y transversa.</li>
</ul>
<h4>Comportamiento de los arcos como muelles</h4>
<table class="tabla">
<tr><th>Arco</th><th>Muelle</th></tr>
<tr><td>ALI</td><td>Largo y elástico</td></tr>
<tr><td><b>ALE</b></td><td><mark>Corto y rígido</mark></td></tr>
<tr><td>Transverso</td><td>Corto y flexible</td></tr>
</table>
<p>El ALE alcanza su altura máxima en la apófisis estiloides, a unos 3,5 cm del suelo.</p>
<div class="trampa">⚠️ Deltoideo: la respuesta es «astrágalo y <b>escafoides</b> hacia <b>dentro</b>». Las trampas cambian escafoides por calcáneo o dentro por fuera.</div>
`
      },
      {
        titulo: "Reparto del peso, base y triángulo de sustentación",
        html: `
<ul>
<li>El peso llega al astrágalo y se reparte hacia delante y hacia atrás (50/50 o 60/40), sobre todo hacia el talón.</li>
<li><b>Pie talo</b>: en flexión dorsal permanente, solo apoya el talón. <b>Pie equino</b>: en flexión plantar.</li>
<li><b>Tacones de 2 cm</b>: igualan el peso entre antepié y retropié. Con más altura se sobrecargan los metatarsianos.</li>
<li><b>Base de sustentación</b>: el área que ocupan ambos pies en bipedestación.</li>
<li><b>Triángulo de apoyo</b>: se traza desde la mitad del 2º dedo hasta la mitad del talón, más la tangente distal.</li>
</ul>
`
      },
      {
        titulo: "Huella plantar y métodos de registro",
        html: `
<h4>Métodos</h4>
<ul>
<li><b>Fotopodograma</b>: papel fotográfico con líquido revelador durante <b>45 segundos</b>.</li>
<li><b>Radiofotopodograma</b>: fotopodograma con una radiografía superpuesta.</li>
<li><b>Pedigrafía</b>: con tinta; está en desuso.</li>
<li><b>Podoscopio</b>: es <b>cualitativo</b>, con cristal iluminado y espejo.</li>
<li><b>Baropodometría</b>: mide las presiones de forma <b>cuantitativa</b>, en estática y en dinámica. Es de los años 80.</li>
</ul>
<h4>Cómo se interpreta</h4>
<ul>
<li><b>Istmo</b> (mediopié): lo normal es entre ½ y ⅓ de la anchura del antepié.
  <ul>
  <li>Más ancho: <b>se derrumba la bóveda (pie pronado)</b>.</li>
  <li>Más estrecho: <b>ALI y ALE demasiado elevados (pie supinado)</b>.</li>
  </ul></li>
<li><b>Retropié</b>: unos ½ del ancho del antepié. Su bisectriz debe pasar por el 2º dedo o el 2º espacio interdigital.</li>
<li><b>Eje del pie</b> (del centro del talón al 2º dedo):
  <ul>
  <li>Desviado hacia fuera: derrumbamiento.</li>
  <li>Desviado hacia dentro: elevación excesiva.</li>
  </ul></li>
</ul>
<h4>Grados del pie plano</h4>
<ol>
<li>El istmo supera la mitad del antepié.</li>
<li>La huella es como la sombra del pie, sin protuberancia interna.</li>
<li>Aparece protuberancia interna y se mantiene el borde externo.</li>
<li>Protuberancia muy prominente: el escafoides casi toca el suelo.</li>
</ol>
<h4>Grados del pie cavo</h4>
<ul>
<li><b>Precavo</b>: 4 dígitos y prominencia externa.</li>
<li><b>Cavo funcional</b>: sin huella de los dedos.</li>
<li><b>1º</b>: se acentúa el apoyo anterior y el talón se adelgaza.</li>
<li><b>2º</b>: desaparece el istmo de la zona media.</li>
<li><b>3º</b>: desaparece <b>todo</b> el istmo y no hay pulpejos.</li>
</ul>
`
      }
    ]
  },

  // ==========================================================================
  {
    tema: "t33",
    intro: "Cómo se desalinean el tronco, la pelvis, la cadera, la rodilla y el tobillo, en qué plano ocurre cada alteración y qué músculo la causa.",
    secciones: [
      {
        titulo: "Planos del espacio (base para todo el tema)",
        html: `
<table class="tabla">
<tr><th>Plano</th><th>Alteraciones</th></tr>
<tr><td><b>Frontal</b></td><td>Varo/valgo (genu valgum, genu varum), inversión/eversión, antepié varo/valgo, supino/prono.</td></tr>
<tr><td><b>Sagital</b></td><td>Flexión/extensión: genu recurvatum, genu flexum, equino y talo.</td></tr>
<tr><td><b>Transverso</b></td><td>Rotaciones, aducción/abducción del antepié (metatarsus aductus).</td></tr>
</table>
<div class="clave">🎯 «Un genu valgum es una alteración en el plano…» → <b>Frontal</b>.</div>
`
      },
      {
        titulo: "Inclinaciones del tronco y de la pelvis",
        html: `
<h4>Tronco</h4>
<ul>
<li><b>Posterior</b>: aumenta la lordosis lumbar. Se debe a la extensión de cadera o a una flexión de cadera inadecuada.</li>
<li><b>Anterior</b>: flexión plantar del tobillo, debilidad del cuádriceps, extensores de cadera débiles, contractura de los flexores o abdominales débiles.</li>
<li><b>Lateral homolateral</b> (hacia el lado de apoyo): <mark>normalmente el paciente NO es consciente</mark>. Causas: abductores débiles, contracturas, dismetrías, escoliosis.</li>
<li><b>Lateral contralateral</b> (hacia el lado contrario al apoyo): <mark>debilidad de la musculatura flexora de cadera</mark> o falta de movilidad articular.</li>
</ul>
<h4>Pelvis</h4>
<ul>
<li><b>Inclinación anterior</b> (sacar el culo): normal unos 10º, puede llegar a 30º.
  <ul>
  <li>Causas: <mark>extensores de cadera débiles frente a los flexores</mark>, contractura en flexión y abdominales débiles.</li>
  <li>Aumenta la lordosis.</li>
  </ul></li>
<li><b>Inclinación posterior</b>: poco frecuente.</li>
<li><b>Basculación</b> (plano frontal): su origen principal es la <b>dismetría o heterometría</b>. «¿Puede provocarla una heterometría?» → <b>Verdadero</b>.</li>
<li><b>Hip hike</b>: elevación exagerada del mismo lado durante la oscilación.</li>
<li>En el plano transverso la pelvis rota unos <b>5º</b> durante la marcha.</li>
</ul>
`
      },
      {
        titulo: "Cadera",
        html: `
<ul>
<li>En la oscilación, la cadera necesita <mark>al menos 15º de flexión</mark>. Si no llega, la rodilla se flexiona menos y los dedos se arrastran.</li>
<li>Flexión exagerada o prematura: hasta 45º. Causas: contractura, espasticidad, dolor o artrosis.</li>
<li>En el plano frontal el fémur está en <mark>5º de aducción</mark>, y por eso no se aprecia clínicamente.</li>
<li><b>Ángulo cervicodiafisario</b>: normal entre <b>120 y 135º</b>.
  <ul>
  <li>Menos de 120º: <b>coxa vara</b>. Marcha en tijera, menor base de sustentación, caída contralateral de la pelvis.</li>
  <li>Más de 135º: <b>coxa valga</b>. Mayor base de sustentación.</li>
  </ul></li>
<li><b>Rotación interna</b>: <mark>HIPERactividad</mark> de isquiotibiales, aductores, fascia lata y glúteos menor y mediano, o debilidad del cuádriceps.</li>
<li><b>Rotación externa</b>: hiperactividad del glúteo mayor o flexión plantar del tobillo.</li>
</ul>
<div class="trampa">⚠️ «Hipoactividad de la fascia lata provoca rotación interna» → <b>Falso</b>: es la <b>hiper</b>actividad.</div>
`
      },
      {
        titulo: "Rodilla",
        html: `
<ul>
<li><b>Normal</b>: tibia y fémur forman unos <b>6º</b>.</li>
<li><b>Genu valgum</b> (rodilla hacia dentro): más de 6º. Las rodillas se juntan y los maléolos se separan, así que la base de sustentación <b>aumenta</b>.</li>
<li><b>Genu varum</b> (rodilla hacia fuera): las rodillas se separan y los maléolos se juntan, así que la base de sustentación disminuye.</li>
<li><b>Tibia valga</b>: el fémur es normal y solo se separan los maléolos. Se puede confundir con genu valgum si hay rotación interna con la rodilla flexionada.</li>
<li><b>Genu recurvatum</b>: la rodilla se extiende más allá de 180º. <b>Genu flexum</b>: no llega a 180º.</li>
<li>Rotación interna: rótulas <b>convergentes</b>. Rotación externa: rótulas <b>divergentes</b>.</li>
</ul>
<table class="tabla">
<tr><th>ALARGAN el miembro</th><th>ACORTAN el miembro</th></tr>
<tr><td>Recurvatum, varum, rotación externa</td><td>Valgo, flexo, rotación interna</td></tr>
</table>
<div class="clave">🎯 «Una tibia vara siempre va asociada a…» → <b>No tiene que ir asociada a ninguna otra alteración</b>.<br>🎯 «Un retropié valgo suele ir asociado a…» → <b>Serían válidas «tibia valga, genu valgum y fémur en aducción» y «genu valgum»</b> (en el Kahoot, las respuestas azul y amarilla).</div>
`
      },
      {
        titulo: "Tobillo y pie",
        html: `
<ul>
<li>El tobillo es la articulación <b>tibioperoneoastragalina (TPA)</b>, que funciona como una bisagra.
  <ul>
  <li><b>Equino</b>: flexión plantar.</li>
  <li><b>Talo</b>: flexión dorsal.</li>
  </ul></li>
<li>Amplitud total de unos <b>70º</b>: unos 50º de flexión plantar y entre 20 y 30º de flexión dorsal.</li>
<li>Para la marcha se necesitan como mínimo entre 10 y 20º de flexión plantar. En el cuestionario la respuesta es <b>20º</b>.</li>
<li>En el plano frontal, inversión y eversión. Retropié varo o valgo. Antepié en aducción o abducción.</li>
</ul>
`
      }
    ]
  },

  // ==========================================================================
  {
    tema: "t34",
    intro: "Torsiones de fémur y tibia, a qué edad camina el niño y cuándo aparecen los arcos, y la clasificación de malformaciones y malposiciones del pie y del hallux.",
    secciones: [
      {
        titulo: "Torsión femoral: anteversión frente a retroversión",
        html: `
<ul>
<li><b>Evolución de la torsión femoral interna (TFI)</b>:
  <ul>
  <li>Al nacer: 35-41º.</li>
  <li>A los 5-6 años: 27º.</li>
  <li>A los 10 años: 20º.</li>
  <li>A los 14 años: 15º.</li>
  </ul>
  A los <mark>12 años está entre 20 y 15º</mark>.</li>
<li>El ángulo normal de declinación es de 15º.
  <ul>
  <li>Más de 15º: <b>anteversión (TFI)</b>.</li>
  <li>Menos de 15º: <b>retroversión (TFE)</b>.</li>
  </ul></li>
</ul>
<table class="tabla">
<tr><th></th><th>Anteversión (TFI)</th><th>Retroversión (TFE)</th></tr>
<tr><td>De pie</td><td>Piernas hacia la línea media, <b>rótulas convergentes</b>.</td><td>Piernas hacia fuera, <b>rótulas divergentes</b>.</td></tr>
<tr><td>Al andar</td><td>Rótulas y pies hacia dentro; al niño le cuesta andar y se cae a menudo.</td><td>Ángulo de marcha abierto; rótulas y pies hacia fuera.</td></tr>
<tr><td>Hábitos</td><td>Duerme boca abajo con los pies hacia dentro y se <b>sienta en W</b>.</td><td>Duerme con los pies hacia fuera y se sienta «en indio».</td></tr>
</table>
<div class="trampa">⚠️ Las dos preguntas tienen la misma respuesta, <b>rótulas divergentes</b>:<br>«¿Cuál NO es un parámetro de la anteversión?» → rótulas divergentes.<br>«¿Cuál SÍ es un parámetro de la retroversión?» → rótulas divergentes.</div>
`
      },
      {
        titulo: "Torsión tibial",
        html: `
<ul>
<li>Al nacer la tibia está en torsión interna y gira sola hacia externa:
  <ul>
  <li>Al año: 2-10º.</li>
  <li>A los 3-4 años: 10-20º.</li>
  </ul></li>
<li>Lo normal son <b>20º</b> de rotación externa.
  <ul>
  <li>Más de 20º: rotación externa, que solo es patológica a partir de 40º.</li>
  <li><mark>Menos de 20º de rotación externa a partir de los 4 años = rotación interna de tibia</mark>, patológica si persiste.</li>
  </ul></li>
<li><b>Torsión tibial interna</b>: pies hacia dentro con rótulas al frente. El maléolo externo queda más adelantado. Sentarse en indio la favorece.</li>
<li><b>Torsión tibial externa</b>: pies hacia fuera con rótulas al frente. <mark>Sentarse en W la favorece</mark> (<b>Verdadero</b>).</li>
<li>En la postura normal, el maléolo interno está más adelantado que el externo y los pies forman unos 15º con el plano sagital.</li>
</ul>
`
      },
      {
        titulo: "Desarrollo de la marcha en el niño",
        html: `
<table class="tabla">
<tr><th>Edad</th><th>Hito</th></tr>
<tr><td>10-12 meses</td><td>Se pone de pie: inestable, con las piernas abiertas y la pelvis adelantada.</td></tr>
<tr><td><mark>1 año</mark> (12-15 meses)</td><td><b>Empieza a deambular.</b></td></tr>
<tr><td>18 meses</td><td>La base de sustentación se estrecha y los pasos son más estables.</td></tr>
<tr><td>Hasta 2 años</td><td>Pies en aducción y genu varum, que desaparece a los 2 años.</td></tr>
<tr><td><mark>2-3 años</mark></td><td>Corre, sube escaleras y monta en triciclo. <b>ALI en descarga</b> y <b>base de sustentación bastante normalizada</b>.</td></tr>
<tr><td>3 años</td><td>Genu valgo fisiológico. Si la separación entre maléolos supera <b>6 cm</b>, es patológico.</td></tr>
<tr><td><mark>4-5 años</mark></td><td><b>ALI en carga</b>, separación de 3-4 cm y ángulo de marcha de 15º, como el adulto.</td></tr>
</table>
<ul>
<li><b>Tacatá</b>: favorece el genu varo y la inversión, porque el niño va sentado «a caballo».</li>
<li><b>Parque</b>: favorece el genu valgo y la eversión o aplanamiento del pie.</li>
</ul>
<div class="clave">🎯 Truco: en el ALI la <b>descarga</b> llega antes (2-3 años) que la <b>carga</b> (4-5 años).</div>
`
      },
      {
        titulo: "Malformaciones",
        html: `
<p>Una malformación es una anomalía del desarrollo, normalmente congénita, que constituye un defecto estructural.</p>
<h4>Causas ambientales</h4>
<ul>
<li>Agentes infecciosos, como la polio.</li>
<li>Carencias nutricionales, como la falta de ácido fólico (espina bífida).</li>
<li>Sustancias químicas, como la talidomida.</li>
<li>Radiaciones ionizantes.</li>
</ul>
<div class="trampa">⚠️ «¿Cuál NO es una causa ambiental?» → <b>Sustancias bioquímicas</b>. Las causas son las sustancias <b>químicas</b>, no las «bioquímicas».</div>
<h4>Tipos</h4>
<ul>
<li><b>Amelia</b>: <mark>ausencia de una o varias extremidades</mark>.</li>
<li><b>Meroamelia</b>: ausencia de los huesos largos (solo hay manos y pies). Por eso «Meroamelia es la ausencia de extremidades» es <b>Falso</b>.</li>
<li><b>Cuantitativas</b>:
  <ul>
  <li>Oligodactilia: menos radios.</li>
  <li>Polidactilia: más radios.</li>
  <li><b>Sindactilia</b>: falta total o parcial del espacio interdigital (<b>Verdadero</b>).</li>
  <li>Ectrodactilia: falta de uno o varios radios.</li>
  </ul>
  La <b>condactilia NO es cuantitativa</b>.</li>
<li><b>De tamaño</b>:
  <ul>
  <li>Macrodactilia y braquidactilia: dedos más grandes o más pequeños.</li>
  <li>Hiperfalangismo y braquifalangismo: falanges más grandes o más pequeñas.</li>
  <li><b>Halomegalia</b>: hallux grande. <b>Halomicra</b>: hallux pequeño.</li>
  </ul></li>
<li><b>Hipoplasia esquelética</b>: <mark>falta una pieza ósea (una falange) y el dedo es más corto</mark>.</li>
<li><b>Sinostosis congénita</b>: unión de dos o más huesos.</li>
</ul>
`
      },
      {
        titulo: "Malposiciones del pie",
        html: `
<p>Una malposición es una deformidad de la arquitectura del pie <b>sin que cambie la forma de cada hueso</b> (<b>Verdadero</b>).</p>
<p><b>Orígenes</b>:</p>
<ul>
<li>Congénito <b>exógeno</b>: por la posición intrauterina; se corrige con manipulación si se trata pronto.</li>
<li>Congénito <b>endógeno</b>: de origen genético.</li>
<li><b>Adquirido</b>.</li>
</ul>
<p>«¿Cuál NO es un origen?» → <b>Hereditaria</b>.</p>
<h4>Malposiciones simples (un solo plano)</h4>
<ul>
<li>Transverso: <b>metatarsus aductus</b> (antepié hacia dentro) o abductus. En la imagen del Kahoot es <b>aductus</b>.</li>
<li>Frontal: <mark>antepié varo o valgo</mark> y retropié varo o valgo.</li>
<li>Sagital: equino o talo, y pseudoequino (metatarsianos en flexión plantar).</li>
</ul>
<h4>Malposiciones complejas</h4>
<table class="tabla">
<tr><th>Pie</th><th>Características</th></tr>
<tr><td><b>Plano</b></td><td>Valgo de talón, pronación del mediopié y abducción del antepié.</td></tr>
<tr><td><b>Cavo</b></td><td><mark>Calcáneo y metatarsianos verticalizados</mark>, retropié varo, dedos en garra. Tipos: <b>anterior, posterior y mixto</b>.</td></tr>
<tr><td><b>Pronado</b></td><td>Flexión dorsal, eversión y abducción. La bóveda desciende.</td></tr>
<tr><td><b>Supinado</b></td><td><mark>Flexión plantar, aducción e inversión</mark>. La bóveda sube.</td></tr>
<tr><td><b>Zambo</b></td><td>Equino-varo-aducto congénito, que se corrige con férulas.</td></tr>
</table>
<div class="trampa">⚠️ «¿Cuál NO es un tipo de pie cavo?» → <b>Medio</b>. Solo existen el anterior, el posterior y el mixto.</div>
`
      },
      {
        titulo: "Malposiciones del hallux y de los dedos",
        html: `
<ul>
<li><b>Hallux abductus valgus (HAV)</b>: subluxación de la 1ª articulación metatarsofalángica.
  <ul>
  <li>El hallux se desvía hacia <b>fuera</b> (lateral).</li>
  <li>El 1º metatarsiano se desvía hacia <b>dentro</b> (medial).</li>
  <li>El primer dedo rota en eversión.</li>
  <li>La cabeza del 1º metatarsiano sobresale por dentro.</li>
  </ul></li>
<li>El <b>juanete</b> es la inflamación alrededor de esa articulación; no es lo mismo que el HAV.</li>
<li><b>Hallux rigidus</b>: artrosis de la 1ª articulación metatarsofalángica, con movilidad limitada (sobre todo hacia arriba) y osteofitos.</li>
<li><b>HAV interfalángico</b>: la falange distal se desvía hacia fuera y rota. <b>No afecta</b> a la articulación metatarsofalángica.</li>
<li><b>Hallux adductus</b>: el primer dedo se desvía hacia <b>dentro</b> (<b>Verdadero</b>), normalmente por contractura del aductor.</li>
<li><b>Hallux extensus interfalángico</b>: deformidad en extensión.</li>
</ul>
<div class="trampa">⚠️ Preguntas trampa:<br>
«¿Qué NO es compatible con el HAV?» → <b>desviación medial del primer dedo</b>, porque en el HAV el dedo se va hacia fuera.<br>
«Hallux extensus de la 2ª articulación interfalángica» → <b>Falso</b>: el hallux solo tiene una articulación interfalángica.<br>
«El HAV interfalángico afecta a la metatarsofalángica» → <b>Falso</b>.</div>
<h4>Dedos menores (plano sagital)</h4>
<ul>
<li><b>Garra</b>: la articulación metatarsofalángica en extensión y las interfalángicas en flexión. Es la respuesta de la imagen del Kahoot.</li>
<li>Martillo, mazo y garra invertida son las otras deformidades.</li>
<li>Pueden ser reductibles, semirrígidos o rígidos. En los pulpejos y sobre las articulaciones se forman hiperqueratosis.</li>
</ul>
`
      }
    ]
  },

  // ==========================================================================
  {
    tema: "t4",
    intro: "Técnicas básicas de exploración, signos y síntomas (tumefacción, dolor, amiotrofia), medidas del pie, pruebas complementarias, analítica y reflejos.",
    secciones: [
      {
        titulo: "Técnicas de exploración física",
        html: `
<p>Las cuatro técnicas clásicas son <mark>inspección, palpación, percusión y auscultación</mark>. Además se usan la olfacción y la mensuración.</p>
<ul>
<li>La exploración <b>directa</b> usa los sentidos. La <b>indirecta</b> usa instrumentos: martillo de reflejos, goniómetro, pelvímetro.</li>
<li><b>Inspección</b>: <mark>observar al paciente para llegar a un diagnóstico fijándose en los detalles relevantes</mark>.
  <ul>
  <li>Con luz natural y el paciente desvestido.</li>
  <li>De forma general y detallada, objetiva y comparando ambos lados.</li>
  </ul></li>
<li><b>Palpación</b>: permite explorar <b>todo</b>: tejido subcutáneo, huesos, músculos, articulaciones, glándulas, órganos, piel y pelo.
  <ul>
  <li>La temperatura se valora con el <b>dorso de la mano</b>.</li>
  <li>Tipos: plana, en pinza (para vientres musculares grandes) y profunda.</li>
  </ul></li>
<li><b>Percusión</b>: directa (sirve para provocar dolor) o indirecta (golpes en series de 2 o 3).</li>
<li><b>Auscultación</b>: en podología se escuchan los ruidos vasculares con estetoscopio o Doppler.</li>
<li><b>Olfacción</b>: útil para <mark>úlceras</mark> (pie diabético), hongos, infecciones y valorar la higiene.</li>
</ul>
<h4>Sonidos al percutir</h4>
<table class="tabla">
<tr><th>Sonido</th><th>Ejemplo</th></tr>
<tr><td>Mate</td><td>Órgano macizo: hígado</td></tr>
<tr><td><b>Claro</b></td><td>Estructura resistente: <mark>hueso o metatarsiano</mark></td></tr>
<tr><td>Timpánico</td><td>Pulmón</td></tr>
</table>
`
      },
      {
        titulo: "Tumefacción (inflamación)",
        html: `
<p>Aumento de volumen local con los cuatro signos de la inflamación: <b>calor, rubor, dolor e impotencia funcional</b>.</p>
<ul>
<li><b>Calor (hipertermia)</b>: <mark>aumenta el flujo sanguíneo para ELEVAR los elementos defensivos</mark>. Hay vasodilatación, así que no es vasoconstricción.</li>
<li><b>Rubor</b>: consecuencia directa de la vasodilatación; produce eritema por la alta cantidad de hemoglobina en la zona. → <b>Todas son correctas</b>.</li>
<li><b>Dolor</b>: lo producen sustancias proinflamatorias que activan los nociceptores.</li>
<li><b>Impotencia funcional</b>: en las piernas compromete la marcha. «La tumefacción de los MMII puede provocar impotencia funcional» → <b>Verdadero</b>.</li>
</ul>
<h4>Signos según la causa</h4>
<table class="tabla">
<tr><th>Infección</th><th>Trastorno circulatorio</th></tr>
<tr><td>Fiebre, <mark>escalofríos</mark>, aumento de leucocitos.</td><td>Contenido hemático importante, varices, dolor.</td></tr>
</table>
<div class="trampa">⚠️ En la infección los leucocitos <b>suben</b>; la opción «descenso de la fórmula leucocitaria» es la trampa.</div>
`
      },
      {
        titulo: "Dolor y amiotrofia",
        html: `
<h4>Formas de clasificar el dolor</h4>
<ul>
<li>Duración: agudo o crónico.</li>
<li>Patogenia: neuropático, nociceptivo o psicógeno.</li>
<li>Localización: somático o visceral.</li>
<li><b>Curso</b>: <mark>continuo o irruptivo</mark>.</li>
<li>Intensidad: leve, moderado o severo.</li>
<li>Pronóstico: sistema de Edmonton.</li>
<li><b>Farmacología</b>.</li>
<li>Reposo: mecánico (con el movimiento) o inflamatorio (persiste siempre).</li>
<li><b>Palpación</b>, en grados del 1 al 4:
  <ol>
  <li>Duele sin palpar.</li>
  <li>Aumenta al palpar o mover.</li>
  <li>Aumenta más y el paciente retira la zona.</li>
  <li>No tolera la palpación ni el movimiento.</li>
  </ol></li>
</ul>
<div class="trampa">⚠️ «¿Cuál NO es una clasificación del dolor?» → <b>Patología</b>. Palpación, intensidad y farmacología sí lo son.<br>⚠️ «Según el curso, el dolor puede ser continuo e <b>inestable</b>» → <b>Falso</b>: es continuo o <b>irruptivo</b>.</div>
<ul>
<li>El <b>dolor irruptivo</b> es una exacerbación pasajera en un paciente con dolor de fondo controlado. El <b>incidental</b> es un subtipo provocado por el movimiento.</li>
<li>El <b>dolor neuropático</b> es punzante o quemante, con parestesias e hiperalgesia.</li>
<li>Respuesta a fármacos:
  <ul>
  <li>Dolor visceral y somático: responden bien a los opiáceos.</li>
  <li>Dolor óseo: parcialmente, y además ayudan los AINE.</li>
  <li>Dolor neuropático: antidepresivos o anticonvulsivantes.</li>
  </ul></li>
<li>Para medirlo se usa la <b>escala EVA</b> o la verbal numérica.</li>
</ul>
<h4>Amiotrofia</h4>
<p>Es la pérdida de masa muscular. Se produce por <b>inactividad</b>, rigidez articular, esclerosis, traumatismos o enfermedades sistémicas.</p>
<div class="clave">🎯 «¿Por qué NO puede producirse una amiotrofia?» → <b>Hiperactividad</b>.</div>
<p><b>Deformidad articular</b>: incongruencia articular o mala alineación, con o sin pérdida de contacto (luxación y subluxación). <b>Crepitación</b>: ruido articular que se palpa o se oye.</p>
`
      },
      {
        titulo: "Antropometría del pie (porcentajes)",
        html: `
<table class="tabla">
<tr><th>Medida</th><th>Valor</th></tr>
<tr><td><b>Apoyo máximo del talón</b></td><td><mark>6%</mark> de la longitud del pie</td></tr>
<tr><td>Extensión del ALI</td><td>Del 20 al 65% del pie</td></tr>
<tr><td>Altura máxima del ALI (articulación astrágalo-escafoidea)</td><td>33%</td></tr>
<tr><td>Anchura máxima del tarso</td><td>43%</td></tr>
<tr><td>Extensión del ALE</td><td>Del 18-20% al 58%</td></tr>
<tr><td>Apófisis estiloides del 5º MTT</td><td>40%</td></tr>
<tr><td>Anchura del retropié</td><td>1/6 de la longitud</td></tr>
<tr><td>Anchura máxima del antepié</td><td>De la 1ª a la 5ª cabeza metatarsal</td></tr>
</table>
<h4>División del pie en dos mitades, de delante atrás</h4>
<ul>
<li><b>Mitad interna</b>: 1º y 2º radios, 1ª y 2ª cuña, ⅓ de la 3ª cuña, escafoides, cabeza del astrágalo, sustentaculum tali y ⅓ del calcáneo.</li>
<li><b>Mitad externa</b>: 3º, 4º y 5º radios, ⅔ de la 3ª cuña, cuboides y ⅔ del calcáneo.</li>
</ul>
<div class="clave">🎯 «¿Qué NO incluye la parte externa?» → <b>la 3ª cuña</b>, porque no entra entera: está repartida entre las dos mitades.</div>
<p><b>División en tres partes, de dentro afuera</b>: anterior (los 5 radios), media (desde Chopart hasta los sesamoideos) y posterior (astrágalo y calcáneo).</p>
`
      },
      {
        titulo: "Pruebas complementarias",
        html: `
<h4>Luz de Wood</h4>
<ul>
<li>Luz ultravioleta en un cuarto oscuro, sobre la piel limpia.</li>
<li>Bacterias: <b>naranja o rojo</b>.</li>
<li>Hongos: <b>verde-amarillento</b>.</li>
<li>Los restos de fármacos pueden dar falsos positivos.</li>
</ul>
<div class="trampa">⚠️ «¿Qué NO es correcto?» → <b>«Color verde cuando hay bacterias»</b>. El verde indica hongos.</div>
<h4>Pruebas de microscopía</h4>
<ul>
<li><b>Dermatoscopia</b>: sencilla y no invasiva. Imprescindible para detectar pronto los tumores pigmentados.</li>
<li><b>Capilaroscopia</b>: estudia los capilares y la vascularización distal. Requiere una temperatura ambiente adecuada.</li>
<li><b>Microscopio clínico</b>.</li>
</ul>
<div class="trampa">⚠️ «¿Cuál NO es microscopía?» → <b>Arteriografía</b>, que es radiodiagnóstico.</div>
<h4>Otras pruebas</h4>
<ul>
<li><b>Biopsia</b>: el método <b>más eficaz</b> para diagnosticar patología de los tejidos.</li>
<li><b>Cultivos</b>: el bacteriano incluye antibiograma; el micológico es el más usado para diagnosticar micosis.</li>
<li><b>Termografía infrarroja</b>: rápida y poco invasiva.</li>
<li><b>Doppler</b>: valora el flujo sanguíneo mediante el sonido. Es la sonda sobre el pie de la imagen del Kahoot.</li>
<li><b>Arteriografía</b>: estudia la vascularización con radiología.</li>
<li><b>Ecografía</b>: ondas sonoras de alta frecuencia. Útil para las partes blandas, no invasiva e inocua.</li>
<li><b>Resonancia magnética (RMN)</b>: campo magnético y ondas de radio. Son las imágenes en blanco y negro del Kahoot.</li>
<li><b>Radiografía</b>: rayos X para ver el hueso. Es nociva para la salud.</li>
</ul>
<div class="trampa">⚠️ «En una radiografía puedo ver ligamentos» → <b>Falso</b>. Para ligamentos se usan la ecografía o la RMN.</div>
`
      },
      {
        titulo: "Analítica",
        html: `
<ul>
<li>El <b>perfil básico</b> incluye:
  <ul>
  <li>Hemograma.</li>
  <li>Velocidad de sedimentación globular.</li>
  <li>Coagulación.</li>
  <li>Glucemia.</li>
  <li>Ionograma.</li>
  <li>Proteína C reactiva.</li>
  </ul></li>
<li><b>Linfopenia</b>: <mark>linfocitos por debajo del 20%</mark>.</li>
<li><b>Monocitosis</b>: aparece en infecciones víricas, leucemia y parásitos. <mark>NO aparece en los procesos alérgicos</mark>.</li>
<li><b>Infección bacteriana</b>: neutrofilia. <b>Infección vírica</b>: neutropenia, según el temario.</li>
<li>Un aumento de los <b>reticulocitos</b> puede indicar dopaje.</li>
<li>Pueden obligar a frenar una cirugía:
  <ul>
  <li>Un tiempo de tromboplastina parcial activada prolongado.</li>
  <li>Un tiempo de trombina alargado más de 20 segundos.</li>
  </ul></li>
<li><b>Glucemia</b>: se mide tras <b>8 horas</b> de ayuno.
  <ul>
  <li>Más de <b>126 mg/dl</b> sugiere diabetes.</li>
  <li>Más de 200 mg/dl la confirma.</li>
  </ul></li>
<li><b>Hemoglobina glucosilada (HbA1c)</b>:
  <ul>
  <li>Normal: por debajo de 5,7%.</li>
  <li>Riesgo: de 5,7 a 6,4%.</li>
  <li><b>Diabetes: 6,5% o más</b>.</li>
  </ul>
  En una persona diabética:
  <ul>
  <li>Buen control: por debajo de 6,5%.</li>
  <li>Aceptable: de 6,5 a 7,5%.</li>
  <li>Insuficiente: por encima de 7,5%.</li>
  </ul></li>
</ul>
`
      },
      {
        titulo: "Reflejos",
        html: `
<h4>Reflejo cutáneo plantar</h4>
<p>Se recorre la planta con un objeto romo desde el lado externo del talón hacia las cabezas de los metatarsianos y se curva hacia el primer dedo.</p>
<ul>
<li>Respuesta <b>normal</b>: los dedos se flexionan ligeramente.</li>
<li><b>Babinski positivo</b> (patológico): el primer dedo se extiende y los demás se abren en abanico.</li>
</ul>
<h4>Signos alternativos al Babinski</h4>
<table class="tabla">
<tr><th>Signo</th><th>Cómo se provoca</th></tr>
<tr><td>Chaddock</td><td>Estimulando la cara lateral del dorso del pie, por debajo del maléolo externo.</td></tr>
<tr><td>Oppenheim</td><td>Deslizando los nudillos hacia abajo por el borde anterior de la tibia.</td></tr>
<tr><td>Schaeffer</td><td>Apretando el tendón de Aquiles.</td></tr>
<tr><td>Gordon</td><td>Apretando los gemelos.</td></tr>
</table>
<h4>Reflejos tendinosos (con martillo)</h4>
<ul>
<li><b>Rotuliano</b>: se golpea dos dedos por debajo de la rótula. La rodilla se <b>extiende</b>.</li>
<li><b>Aquíleo</b>: produce extensión (flexión plantar) del pie.</li>
<li><b>Mendel-Bechterew</b>: se percute sobre el <b>cuboides</b>. Produce flexión plantar.</li>
</ul>
`
      }
    ]
  },

  // ==========================================================================
  {
    tema: "t4c",
    intro: "Pruebas de exploración de la columna, la sacroilíaca, la cadera, la rodilla y el tobillo, con sus rangos de movimiento. Caen sobre todo los casos clínicos de la sacroilíaca y los grados.",
    secciones: [
      {
        titulo: "Columna",
        html: `
<ul>
<li><b>Test de Adams</b>: <mark>distingue si una escoliosis es funcional o estructural</mark>.
  <ul>
  <li>El paciente, de pie y con los pies juntos, se inclina hacia delante.</li>
  <li>Si la desviación desaparece, la escoliosis es funcional.</li>
  </ul></li>
<li><b>Prueba de la plomada</b>: se coloca en <mark>C7</mark>. La plomada debe caer por el surco entre los glúteos y entre los dos pies.</li>
<li><b>Signo de Schober</b>: valora cuánto <b>se flexiona</b> la columna lumbar.
  <ul>
  <li>Se marca <mark>S1</mark> (o L5) y otro punto 10 cm más arriba.</li>
  <li>Al inclinarse hacia delante, la distancia debería aumentar <b>4-5 cm</b>, que es lo <b>normal</b>.</li>
  <li>Si aumenta menos, la flexión es mala. Si aumenta más, hay hiperlaxitud.</li>
  </ul></li>
<li><b>Cómo saber de dónde viene el dolor</b>:
  <ul>
  <li>De pie, con las manos sobre las crestas ilíacas: si duele por encima de las manos, el origen es <b>lumbar</b>; por debajo, <b>sacro</b>.</li>
  <li>Sentado, con las manos en la nuca: si duele al inclinarse hacia delante, el origen es <mark>lumbar</mark>; si duele al girar el tronco, es la <b>sacroilíaca</b> (sus ligamentos).</li>
  </ul></li>
</ul>
<div class="clave">🎯 «Schober con un aumento de 4 cm» → <b>Normalidad del movimiento en flexión</b>.</div>
`
      },
      {
        titulo: "Articulación sacroilíaca: pruebas y casos clínicos",
        html: `
<table class="tabla">
<tr><th>Prueba</th><th>Cómo se hace</th><th>Si es positiva (+)</th></tr>
<tr><td><b>Erikson</b></td><td>Paciente boca arriba. Se aprietan las crestas ilíacas hacia la línea media.</td><td>Alteración de la <b>sacroilíaca</b>.</td></tr>
<tr><td><b>Gillis</b></td><td>Paciente boca abajo, con la rodilla a 90º. Se levanta el muslo hasta hiperextenderlo.</td><td>Sacroilíaca de origen <b>ligamentoso</b>.</td></tr>
<tr><td><b>Gaenslin</b></td><td>Paciente boca arriba abrazando las rodillas. Una pierna cae por el borde de la camilla en hiperextensión.</td><td><b>Inflamación</b> de la sacroilíaca.</td></tr>
<tr><td><b>Patrick / FABERE</b></td><td>El pie se apoya sobre la rodilla contraria (flexión, abducción y rotación externa) y se presiona.</td><td>Problema de la <b>sacroilíaca o de la cadera</b>.</td></tr>
<tr><td>Mango de cadera</td><td>Se lleva la rodilla flexionada hacia el hombro contrario.</td><td>Inflamación de la sacroilíaca.</td></tr>
</table>
<h4>Casos clínicos</h4>
<table class="tabla">
<tr><th>Erikson</th><th>Gillis</th><th>Gaenslin</th><th>Patrick</th><th>Diagnóstico</th></tr>
<tr><td>+</td><td><b>+</b></td><td>−</td><td>+</td><td>Sacroilíaca de origen <b>ligamentoso</b></td></tr>
<tr><td>+</td><td>−</td><td><b>+</b></td><td>−</td><td><b>Inflamación</b> de la sacroilíaca</td></tr>
<tr><td>+</td><td>−</td><td>−</td><td>−</td><td>Afectación de la <b>sacroilíaca</b></td></tr>
<tr><td>+</td><td>−</td><td>−</td><td><b>+</b></td><td>Afectación de la <b>cadera</b> (según la clave de clase)</td></tr>
</table>
<div class="clave">🎯 Truco para los casos: busca qué prueba «extra» es positiva además de Erikson.<br>
Gillis positiva → origen <b>ligamentoso</b>.<br>
Gaenslin positiva → <b>inflamación</b>.<br>
Solo Patrick positiva → <b>cadera</b>.<br>
Solo Erikson positiva → afectación de la <b>sacroilíaca</b>.</div>
`
      },
      {
        titulo: "Cadera: rangos y prueba de Thomas",
        html: `
<table class="tabla">
<tr><th>Movimiento</th><th>Activo</th><th>Pasivo</th></tr>
<tr><td>Flexión con la rodilla flexionada</td><td>120º</td><td>140º</td></tr>
<tr><td>Flexión con la rodilla extendida</td><td>90º</td><td>120º</td></tr>
<tr><td>Extensión con la rodilla flexionada</td><td>10º</td><td>30º</td></tr>
<tr><td>Extensión con la rodilla extendida</td><td>20º</td><td>30º</td></tr>
<tr><td>Abducción / aducción</td><td colspan="2">45-50º / 20-30º</td></tr>
<tr><td>Rotación interna / externa</td><td colspan="2">35º / 55-60º</td></tr>
</table>
<ul>
<li><b>Prueba de Thomas</b>: detecta una <b>contractura en flexión de la cadera</b> (músculo ilíaco).
  <ul>
  <li>Se flexiona una cadera hasta llevar el muslo contra el tronco.</li>
  <li>Si la rodilla contraria se levanta de la camilla, es positiva.</li>
  </ul></li>
<li>Las rotaciones se exploran con el paciente sentado y las piernas colgando.</li>
</ul>
`
      },
      {
        titulo: "Rodilla",
        html: `
<ul>
<li><b>Flexión de la rodilla</b>:
  <ul>
  <li><mark>140º activa con la cadera flexionada</mark>.</li>
  <li><mark>120º activa con la cadera extendida</mark>.</li>
  <li><mark>160º pasiva</mark>.</li>
  </ul></li>
<li><b>Pivot shift</b>: detecta la <b>rotura</b> del ligamento cruzado anterior (no el esguince).</li>
<li><b>Cajón anterior</b> y <b>cajón posterior</b>: exploran los ligamentos cruzados.</li>
<li><b>Maniobra de Apley</b> (paciente boca abajo con la rodilla a 90º):
  <ul>
  <li>Tirando de la pierna y girándola valora los <b>ligamentos laterales</b>, según la clave de clase.</li>
  <li>Comprimiendo valora los meniscos.</li>
  </ul></li>
<li><b>Maniobra de estrés</b> en varo o valgo: valora los <b>ligamentos laterales</b>. Con estrés en varo, el lateral externo.</li>
<li><b>McMurray</b>: explora los meniscos. <b>Peloteo rotuliano</b>: detecta derrame en la rodilla.</li>
</ul>
`
      },
      {
        titulo: "Tobillo y subastragalina",
        html: `
<table class="tabla">
<tr><th>Dato</th><th>Valor</th></tr>
<tr><td>Flexión plantar de la TPA con la rodilla extendida</td><td><mark>45º</mark></td></tr>
<tr><td>Flexión plantar mínima para andar bien</td><td><mark>20º</mark></td></tr>
<tr><td>Flexión dorsal mínima para andar bien</td><td><mark>10º</mark></td></tr>
<tr><td>Inversión de la articulación subastragalina (ASA)</td><td><mark>30-35º</mark></td></tr>
<tr><td>Retropié normal visto desde atrás</td><td>Hasta 5º de valgo</td></tr>
</table>
<p>Para comprobar la movilidad del primer radio, se sujeta la cabeza del 1º metatarsiano y se mueve hacia arriba y hacia abajo comparándola con las demás. La flexión dorsal y la flexión plantar con eversión del 1º metatarsiano eran preguntas de los cuestionarios con imagen.</p>
`
      }
    ]
  }
];
