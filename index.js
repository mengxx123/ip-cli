#! /usr/bin/env node
const axios = require('axios')

async function getMyIp() {
    let url = `https://nodeapi.yunser.com/ip/me`
    let res = await axios.get(url)
    console.log(res.data)
    let ip = res.text

    // url = `http://ip.taobao.com/service/getIpInfo.php?ip=${ip}`
    // res = await axios.get('http://ip.taobao.com/service/getIpInfo.php?ip=219.137.207.192')
    // console.log(res.data)
}

getMyIp()

// router.get('/ip', function(req, res, next) {
//     let {ip, format} = req.query
//     if (!ip) {
//         res.json({
//             code: 403,
//             message: 'IP 为空'
//         })
//         return
//     }
//     // TODO 检查 IP 格式
//     let url = `http://ip.taobao.com/service/getIpInfo.php?ip=` + ip
//     console.log(url)

//     superagent.get(url)
//     .end(function (err, sres) {
//         if (err) return next(err);
//         console.log(sres.text)
//         let data = JSON.parse(sres.text)
//         if (data.code === 0) {
//             let info = data.data
//             if (format === 'text') {
//                 res.send(`所在地区：${info.country} ${info.region} ${info.city}
// ISP: ${info.isp}`)
//                 return
//             }
//             res.json(info)
//         } else {
//             res.json({
//                 code: 500,
//                 message: '请联系管理员修复'
//             })
//         }
//         // res.send(sres.text)
//     })
// })




// const commander = require('commander')
// const moment = require('moment')

// commander
//     .version('v0.0.2')
//     .description('A cmd manager')

// commander
//     .option('-v, --version', 'show version')
//     // .option('-l, --list', 'show all cmd')
//     // .option('-a, --add', 'Add bbq sauce')
//     // .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
// // console.log('demo-cli', process.cwd())

// commander
//     .helpOption('-h,--HELP')
//     // .option('-f, --foo', 'enable some foo')
//     // .option('-b, --bar', 'enable some bar')
//     // .option('-B, --baz', 'enable some baz')



// const USER_HOME = process.env.HOME || process.env.USERPROFILE

// const fs = require('fs')
// const path = require('path')

// // console.log('process', process)
// // console.log('process.argv', process.argv)
// // console.log('hello cmd')
// // console.log(USER_HOME)



// let userHome = USER_HOME

// let yunserFolder = path.resolve(userHome, '.yunser') // TODO package，npm install cmd-core
// if (!fs.existsSync(yunserFolder)) {
//     fs.mkdirSync(yunserFolder)
// }

// let appFolder = path.resolve(yunserFolder, 'cmd-cli') // TODO package，npm install cmd-core
// if (!fs.existsSync(appFolder)) {
//     fs.mkdirSync(appFolder)
// }

// let dbFilePath = path.resolve(appFolder, 'list')

// let contentText = fs.readFileSync(dbFilePath, 'utf-8')

// // console.log(contentText)


// let list = contentText.split('\n').map((item, index) => {
//     return {
//         index,
//         text: item
//     }
// })

// commander
//     .command('add <text>')
//     .description('Add command.')
//     //   .option('-r, --recursive', 'Remove recursively')
//     .action((text) => {
//         if (contentText) {
//             contentText += '\n' + text
//         } else {
//             contentText = text
//         }
//         fs.writeFileSync(dbFilePath, contentText)
//         console.log('add success')
//     })

// function printList(list) {
//     console.log(list.map(item => `${('' + item.index).padStart(3, ' ')}. ${item.text}`).join('\n'))
// }

// commander
//     .command('search <text>')
//     .description('Search in commands.')
//     //   .option('-r, --recursive', 'Remove recursively')
//     .action((text) => {
//         printList(list.filter(item => item.text.includes(text)))
//     })

// commander
//     .command('remove <index>')
//     .description('Remove command by index.')
//     //   .option('-r, --recursive', 'Remove recursively')
//     .action((index) => {
//         // let result = contentText.split('\n').filter(item => item.includes(text)).join('\n')
//         list.splice(parseInt(index), 1)
//         console.log('list', list)
//         fs.writeFileSync(dbFilePath, list.map(item => item.text).join('\n'))
//     })

// commander
//     .command('list')
//     .description('Show command list.')
//     .action(() => {
//         printList(list)
//     })

// commander
//     .command('clear')
//     .description('Clear all commands.')
//     .action(() => {
//         fs.writeFileSync(dbFilePath, '')
//         // console.log('clear finish')
//     })

// commander
//     .command('backup')
//     .description('Backup yopur commands.')
//     .action(() => {
//         let backupFilePath = path.resolve(appFolder, `list.${moment().format('YYYYMMDD_HHmmss')}`)
//         console.log(`backup file path: ` + backupFilePath)
//         fs.writeFileSync(backupFilePath, contentText)
//         // console.log('clear finish')
//     })

// commander.parse(process.argv)

// // let name = process.argv[2] || 'World'
// // console.log(`Hello ${name}`)

// // const path = require('path')
// // const fs = require('fs')

// // console.log('process.argv', process.argv)
// // let filePath = path.resolve(process.cwd(), '123.txt')
// // fs.writeFile(filePath, process.argv[1], function(err) {
// //     // console.log("callback");
// //     if(err) {
// //         return console.log('创建文件失败')
// //     }
// //     console.log("创建文件成功");
// // })
