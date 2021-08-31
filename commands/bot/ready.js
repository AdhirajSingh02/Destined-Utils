module.exports = {
channel: "854938789508415518",
type: "readyCommand",
code: `
$getVar[y] | \`$client[tag]\` is back online.

$getVar[a] | Server count: \`$serverCount\`
$getVar[a] | Total users: \`$allMembersCount\`
$getVar[a] | Current ping: \`$ping\`
$log[Logged into discord as $client[tag].]
`
}