export const sendFormToTg = (name, tgNick) => {
  const message = `${name} - @${tgNick}`

  return fetch(`https://api.telegram.org/bot5543193450:AAEAf0Z8sasjKkwn4VgSLk1CSM9IhpMgMQE/sendMessage?chat_id=-657595671&parse_mode=html&text=${message}`, {
    method: 'GET'
  })
  .then((res) => res.json())
}