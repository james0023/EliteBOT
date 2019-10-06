const Discord = require("discord.js")

exports.run = async (args, message) => {
  let member = message.mentions.users.first() || message.guild.members.get(args[0]).user
  if (!member) return message.reply("mencione um usuário para enviar um pagamento.")
  if (member.id === message.author.id) return message.reply("você não pode fazer um pagamento para você mesmo!")
  if (isNaN(args[1])) return message.reply('valor de coins inválido, insira um valor válido');


  let doador = await database.Users.findOne({
    '_id': message.author.id
  })

  if (doador.coins < value) return message.reply("você não tem coins suficientes para isso!")



  let membro = await database.Users.findOne({
    '_id': member.id
  })


  const valor = parseInt(args[1])
  doador.coins -= valor
  membro.coins += valor
  membro.save()
  doador.save()

  message.reply("coins enviado com sucesso", {
    member: member,
    value: value.toLocaleString()
  })
}

exports.help = {
  name: 'pay',
  aliases: ['pagar', 'doar'],
}