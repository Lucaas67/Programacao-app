import moment from 'moment-timezone';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

const TIMEZONE = 'America/Sao_Paulo';

export const formatDate = (isoDate) => {
  return moment(isoDate).tz(TIMEZONE).format('DD/MM/YYYY');
};

export const getCurrentDate = () => {
  return moment().tz(TIMEZONE).format('DD/MM/YYYY');
};
