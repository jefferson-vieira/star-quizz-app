export function handleError(error) {
  if (typeof error === 'string') return error;
  if (typeof error === 'number') return getMessageErrorByStatus(error);

  const { response } = error || {};
  const { data, status } = response || {};
  if (data && typeof data.message === 'string') return data.message;

  return getMessageErrorByStatus(status);
}

function getMessageErrorByStatus(status) {
  switch (status) {
    case 404:
      return 'Não encontramos o conteúdo que você estava procurando!';
    case 500:
      return 'Houve um erro que nos impediu de completar sua solicitação!';
    case 503:
      return 'Não foi possível se comunicar com o servidor. Tente novamente mais tarde!';
    default:
      return 'Um erro inesperado ocorreu. Tente novamente mais tarde!';
  }
}
