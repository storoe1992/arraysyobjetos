let radiologia = [
    {
      "HORA": "11:00",
      "ESPECIALISTA": "IGNACIO SCHULZ",
      "PACIENTE": "FRANCISCA ROJAS",
      "RUT": "9878782-1",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
      "PACIENTE": "PAMELA ESTRADA",
      "RUT": "15345241-3",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:00",
      "ESPECIALISTA": "FERNANDO WURTHZ",
      "PACIENTE": "ARMANDO LUNA",
      "RUT": "16445345-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "15:30",
      "ESPECIALISTA": "ANA MARIA GODOY",
      "PACIENTE": "MANUEL GODOY",
      "RUT": "17666419-0",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "16:00",
      "ESPECIALISTA": "PATRICIA SUAZO",
      "PACIENTE": "RAMON ULLOA",
      "RUT": "14989389-K",
      "PREVISION": "FONASA"
    }
  ];
let traumatologia = [
    {
      "HORA": "8:00",
      "ESPECIALISTA": "MARIA PAZ ALTUZARRA",
      "PACIENTE": "PAULA SANCHEZ",
      "RUT": "15554774-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "10:00",
      "ESPECIALISTA": "RAUL ARAYA",
      "PACIENTE": "ANGÉLICA NAVAS",
      "RUT": "15444147-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "10:30",
      "ESPECIALISTA": "MARIA ARRIAGADA",
      "PACIENTE": "ANA KLAPP",
      "RUT": "17879423-9",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "ALEJANDRO BADILLA",
      "PACIENTE": "FELIPE MARDONES",
      "RUT": "1547423-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "CECILIA BUDNIK",
      "PACIENTE": "DIEGO MARRE",
      "RUT": "16554741-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "12:00",
      "ESPECIALISTA": "ARTURO CAVAGNARO",
      "PACIENTE": "CECILIA MENDEZ",
      "RUT": "9747535-8",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "12:30",
      "ESPECIALISTA": "ANDRES KANACRI",
      "PACIENTE": "MARCIAL SUAZO",
      "RUT": "11254785-5",
      "PREVISION": "ISAPRE"
    }
  ];
let dental = [
    {
      "HORA": "8:30",
      "ESPECIALISTA": "ANDREA ZUÑIGA",
      "PACIENTE": "MARCELA RETAMAL",
      "RUT": "11123425-6",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:00",
      "ESPECIALISTA": "MARIA PIA ZAÑARTU",
      "PACIENTE": "ANGEL MUÑOZ",
      "RUT": "9878789-2",
      "PREVISION": "ISAPRE"
    },
    {
      "HORA": "11:30",
      "ESPECIALISTA": "SCARLETT WITTING",
      "PACIENTE": "MARIO KAST",
      "RUT": "7998789-5",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "13:00",
      "ESPECIALISTA": "FRANCISCO VON TEUBER",
      "PACIENTE": "KARIN FERNANDEZ",
      "RUT": "18887662-K",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "13:30",
      "ESPECIALISTA": "EDUARDO VIÑUELA",
      "PACIENTE": "HUGO SANCHEZ",
      "RUT": "17665461-4",
      "PREVISION": "FONASA"
    },
    {
      "HORA": "14:00",
      "ESPECIALISTA": "RAQUEL VILLASECA",
      "PACIENTE": "ANA SEPULVEDA",
      "RUT": "14441281-0",
      "PREVISION": "ISAPRE"
    }
  ];

  document.write('<p>Estadisticas centro médico ñuñoa</p>');
  document.write(`<p>Cantidad de consultas radiología: ${radiologia.length}</p>`);
  document.write(`<p>Cantidad de consultas trauma: ${traumatologia.length}</p>`);
  document.write(`<p>Cantidad de consultas dental: ${dental.length}</p>`);
  document.write(`<p>------------------------</p>`);  
  document.write('<p>Primera y última atención por paciente en Radiología</p>');
  document.write('<p>Primera atención</p>');
  document.write(`<p>${radiologia[0].RUT} - ${radiologia[0].PREVISION}</p>`); 
  document.write('<p>Última atención</p>');
  document.write(`<p>${radiologia[radiologia.length - 1].RUT} - ${radiologia[radiologia.length - 1].PREVISION}</p>`);
  document.write(`<p>------------------------</p>`);  
  document.write('<p>Primera y última atención por paciente en Traumatología</p>');
  document.write('<p>Primera atención</p>');
  document.write(`<p>${traumatologia[0].RUT} - ${traumatologia[0].PREVISION}</p>`); 
  document.write('<p>Última atención</p>');
  document.write(`<p>${traumatologia[traumatologia.length - 1].RUT} - ${traumatologia[traumatologia.length - 1].PREVISION}</p>`);
  document.write(`<p>------------------------</p>`);  
  document.write('<p>Primera y última atención por paciente en Dental</p>');
  document.write('<p>Primera atención</p>');
  document.write(`<p>${dental[0].RUT} - ${dental[0].PREVISION}</p>`); 
  document.write('<p>Última atención</p>');
  document.write(`<p>${dental[dental.length - 1].RUT} - ${dental[dental.length - 1].PREVISION}</p>`);

