import moment from 'moment';

const getTime = (initialStringTime, timeInSeconds) => {
  return moment(initialStringTime, 'HH:mm:ss')
    .subtract(timeInSeconds, 'seconds')
    .format('HH:mm:ss');
};

const toLocalDateTime = dateTimeString => {
  return moment(dateTimeString).format('DD/MM/YYYY HH:mm');
};

export default { getTime, toLocalDateTime };
