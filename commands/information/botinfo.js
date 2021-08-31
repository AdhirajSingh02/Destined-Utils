module.exports = {
name: "botinfo",
aliases: ['bot-info','stats','bi'],
code: `
$title[Information for $client[tag]]
$addField[<:a_blue:879286478071562251> Quick links;<:a_arrow:855301271636672522> [Support server](https://discord.gg/qPrxrTkczZ)
<:a_arrow:855301271636672522> Documentation;yes]
$addField[<:a_blue:879286478071562251> Development team;<:a_arrow:855301271636672522> $userTag[550951188796014598]
<:a_arrow:855301271636672522> $userTag[501285963209900033]
<:a_arrow:855301271636672522> $userTag[755115696211624098]
<:a_arrow:855301271636672522> $userTag[831599349220900924]
<:a_arrow:855301271636672522> $userTag[446339358786846763];yes]
$addField[<:a_blue:879286478071562251> Aoi.js version;<:a_arrow:855301271636672522> \`$packageVersion\`;yes]
$addField[<:a_blue:879286478071562251> Node version;<:a_arrow:855301271636672522> \`$nodeVersion\`;yes]
$addField[<:a_blue:879286478071562251> Ram usage;<:a_arrow:855301271636672522> \`$ram\`;yes]
$addField[<:a_blue:879286478071562251> Cpu Usage;<:a_arrow:855301271636672522> \`$cpu\`;yes]
$addField[<:a_blue:879286478071562251> Uptime;<:a_arrow:855301271636672522> \`$uptime\`;yes]
$addField[<:a_blue:879286478071562251> DataBase Ping;<:a_arrow:855301271636672522> \`$dbPing\`;yes]
$addField[<:a_blue:879286478071562251> Bot Ping;<:a_arrow:855301271636672522> \`$ping\`;yes]
$addField[<:a_blue:879286478071562251> Channels;<:a_arrow:855301271636672522> \`$allChannelsCount\`;yes]
$addField[<:a_blue:879286478071562251> Users;<:a_arrow:855301271636672522> \`$allMembersCount\`;yes]
$addField[<:a_blue:879286478071562251> Server count;<:a_arrow:855301271636672522> \`$serverCount\`;yes]
$color[#36393F]
$thumbnail[$client[avatar]]
`
}