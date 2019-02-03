import moment from 'moment'

const getTime = (initialStringTime, timeInSeconds) => {
  return moment(initialStringTime, 'HH:mm:ss')
    .subtract(timeInSeconds, 'seconds')
    .format('HH:mm:ss');
};

export default { getTime };
