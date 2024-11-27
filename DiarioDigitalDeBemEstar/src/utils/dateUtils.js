// utils/dateUtils.js
import moment from 'moment-timezone';
import moment from 'moment';
import 'moment/locale/pt-br';

// Configurar moment para o idioma português
moment.locale('pt-br');


// Fuso horário de Brasília
const TIMEZONE = 'America/Sao_Paulo';

// Formatar data no padrão DD/MM/AAAA
export const formatDate = (isoDate) => {
  return moment(isoDate).tz(TIMEZONE).format('DD/MM/YYYY');
};

// Retornar a data atual no fuso horário de Brasília
export const getCurrentDate = () => {
  return moment().tz(TIMEZONE).format('DD/MM/YYYY');
};
