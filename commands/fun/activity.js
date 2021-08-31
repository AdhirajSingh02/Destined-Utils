module.exports = {
name: "activity",
code: `
$activity[$findUser[$message]]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;$getVar[n] Invalid args, the ID should be of a discord user.]
`
}
