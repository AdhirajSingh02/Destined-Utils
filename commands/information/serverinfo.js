module.exports = {
name: "server-info",
aliases: ['si','serverinfo'],
code: `
$title[Information for $serverName]

$addField[Role count;\`$roleCount\`;yes]
$addField[Member count;\`$membersCount\`;yes]
$addField[Server owner;<@!$ownerID>, \`$ownerID\`;yes]
$addField[Server Name;\`$serverName\`;yes]
`
}