//search
//    / /
// global,case insensitive,multiline
// g,i,m
const s = 'adfdfdvd,dfg/eref.r.dddf;g'

let ans = s.replace(/[./,;]/g, '')
console.log(ans);