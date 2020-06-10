

const fast = require('@f5devcentral/f5-fast-core');
const fs = require('fs').promises;
const path = require('path');

// fast.FsTemplateProvider()
const tsPath = './tempSetGood/'
const tsName = path.basename(tsPath);
const tsDir = path.dirname(tsPath);
const dst1 = undefined;
const provider = new fast.FsTemplateProvider(tsDir, [tsName]);
debugger;
let dst = dst1 || `./${tsName}.zip`;

console.log(dst);
console.log(provider);

provider.buildPackage(tsName, dst);

// provider.fetch('hello.mst')
// .then((templ) => {
//     console.log(templ);
// })
debugger;
